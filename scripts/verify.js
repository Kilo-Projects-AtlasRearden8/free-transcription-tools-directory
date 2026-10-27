// Verification checks for the Free Transcription and Caption Tools Directory.
// Runs with plain Node.js (no dependencies): `npm test`.
"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
let failures = 0;

function fail(msg) {
  console.error("FAIL: " + msg);
  failures += 1;
}

function ok(msg) {
  console.log("ok: " + msg);
}

// 1. data/tools.json is valid JSON
let data;
try {
  data = JSON.parse(fs.readFileSync(path.join(root, "data/tools.json"), "utf8"));
  ok("data/tools.json is valid JSON");
} catch (err) {
  fail("data/tools.json is not valid JSON: " + err.message);
  process.exit(1);
}

const tools = data.tools || [];
assert(Array.isArray(tools), "tools must be an array");

// Required fields per tool
const required = [
  "id", "name", "cost", "costDetail", "platforms", "devices",
  "category", "need", "builtIn", "setup", "link", "tags"
];

const idSet = new Set();
for (const tool of tools) {
  for (const field of required) {
    if (!(field in tool)) {
      fail("tool " + (tool.id || "(unknown)") + ': missing field "' + field + '"');
    }
  }
  if (tool.id && typeof tool.id !== "string") fail("tool: id must be a string");
  if (tool.name && typeof tool.name !== "string") fail("tool " + tool.id + ": name must be a string");
  if (typeof tool.builtIn !== "boolean") fail("tool " + tool.id + ": builtIn must be boolean");
  if (!Array.isArray(tool.platforms) || tool.platforms.length === 0) {
    fail("tool " + tool.id + ": platforms must be a non-empty array");
  }
  if (!Array.isArray(tool.devices) || tool.devices.length === 0) {
    fail("tool " + tool.id + ": devices must be a non-empty array");
  }
  if (!Array.isArray(tool.tags) || tool.tags.length === 0) {
    fail("tool " + tool.id + ": tags must be a non-empty array");
  }
  if (tool.link) {
    try {
      new URL(tool.link);
    } catch (err) {
      fail("tool " + tool.id + ': invalid link "' + tool.link + '"');
    }
    // No affiliate links
    const lowLink = tool.link.toLowerCase();
    if (
      lowLink.includes("amazon") ||
      lowLink.includes("amzn.") ||
      lowLink.includes("tag=") ||
      lowLink.includes("affiliate")
    ) {
      fail("tool " + tool.id + ': possible affiliate link "' + tool.link + '"');
    }
  }
  if (tool.id) {
    if (idSet.has(tool.id)) fail('duplicate tool id "' + tool.id + '"');
    idSet.add(tool.id);
  }
}
ok("all " + tools.length + " tools have required fields, valid non-affiliate links");

// 2. Groups consistency: every group toolId references an existing tool
const groups = data.groups || {};
const allNeedIds = new Set();
const allDeviceIds = new Set();

for (const g of groups.byNeed || []) {
  if (!g.id || !g.label || !Array.isArray(g.toolIds)) {
    fail("need group missing id/label/toolIds: " + JSON.stringify(g));
    continue;
  }
  for (const id of g.toolIds) {
    if (!idSet.has(id)) fail('need group "' + g.id + '": unknown tool id "' + id + '"');
    allNeedIds.add(id);
  }
}

for (const g of groups.byDevice || []) {
  if (!g.id || !g.label || !Array.isArray(g.toolIds)) {
    fail("device group missing id/label/toolIds: " + JSON.stringify(g));
    continue;
  }
  for (const id of g.toolIds) {
    if (!idSet.has(id)) fail('device group "' + g.id + '": unknown tool id "' + id + '"');
    allDeviceIds.add(id);
  }
}
ok("all group toolIds reference existing tools (" + (groups.byNeed || []).length + " need groups, " + (groups.byDevice || []).length + " device groups)");

// 3. Every tool appears in at least one need group and one device group
for (const tool of tools) {
  if (!allNeedIds.has(tool.id)) fail('tool "' + tool.id + '": not in any need group');
  if (!allDeviceIds.has(tool.id)) fail('tool "' + tool.id + '": not in any device group');
}
ok("every tool is assigned to at least one need group and one device group");

// 4. index.html references its assets; app.js loads the data file
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const appJs = fs.readFileSync(path.join(root, "js/app.js"), "utf8");
for (const asset of ["css/style.css", "js/app.js"]) {
  if (!html.includes(asset)) fail('index.html does not reference "' + asset + '"');
}
if (!appJs.includes("data/tools.json")) fail('js/app.js does not load "data/tools.json"');
ok("index.html references CSS and JS; js/app.js loads the data file");

// 5. tools.md exists and mentions every tool by name
const mdPath = path.join(root, "tools.md");
if (!fs.existsSync(mdPath)) {
  fail("tools.md is missing (index.html links to it)");
} else {
  const md = fs.readFileSync(mdPath, "utf8");
  for (const tool of tools) {
    if (!md.includes(tool.name)) fail('tools.md does not mention tool "' + tool.name + '"');
  }
  ok("tools.md mentions every tool (" + tools.length + " tools)");
}

if (failures > 0) {
  console.error("\n" + failures + " verification failure(s)");
  process.exit(1);
}

console.log(
  "\nVerification passed: " +
  tools.length + " tools, " +
  (groups.byNeed || []).length + " need groups, " +
  (groups.byDevice || []).length + " device groups"
);
process.exit(0);
