/* Free Transcription and Caption Tools Directory — client-side search & filters */
(function () {
  var tools = [];
  var groups = { byNeed: [], byDevice: [] };
  var searchInput = document.getElementById("search-input");
  var clearBtn = document.getElementById("clear-search");
  var resultsEl = document.getElementById("results");
  var needButtons = document.querySelectorAll('[data-filter-type="need"]');
  var deviceButtons = document.querySelectorAll('[data-filter-type="device"]');

  var currentNeed = "all";
  var currentDevice = "all";
  var currentQuery = "";

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  function loadTools() {
    return fetch("data/tools.json")
      .then(function (response) {
        if (!response.ok) throw new Error("Failed to load tools data");
        return response.json();
      })
      .then(function (data) {
        tools = data.tools || [];
        groups = data.groups || { byNeed: [], byDevice: [] };
        render();
      })
      .catch(function (err) {
        resultsEl.innerHTML =
          '<div class="empty">Unable to load the tools directory. Please refresh the page.</div>';
        console.error(err);
      });
  }

  function toolIdsForNeed(value) {
    var group = groups.byNeed.find(function (g) { return g.id === value; });
    return group ? new Set(group.toolIds) : null;
  }

  function matchesFilters(tool) {
    if (currentNeed !== "all") {
      var needIds = toolIdsForNeed(currentNeed);
      if (!needIds || !needIds.has(tool.id)) return false;
    }
    if (currentDevice !== "all") {
      var deviceLabelMap = {
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        ios: "iOS",
        android: "Android",
        web: "Web",
        chromeos: "ChromeOS"
      };
      var label = deviceLabelMap[currentDevice];
      var matches = tool.platforms.indexOf(label) !== -1;
      if (currentDevice === "chromeos") {
        matches = matches || tool.platforms.indexOf("Chrome (any OS)") !== -1;
      }
      if (!matches) return false;
    }
    if (currentQuery) {
      var q = currentQuery.toLowerCase();
      var haystack = (tool.name + " " + tool.cost + " " + tool.platforms.join(" ") +
        " " + tool.category + " " + tool.need + " " + tool.setup + " " + tool.tags.join(" ")).toLowerCase();
      if (haystack.indexOf(q) === -1) return false;
    }
    return true;
  }

  function render() {
    var filtered = tools.filter(matchesFilters);
    resultsEl.innerHTML = "";

    if (filtered.length === 0) {
      resultsEl.innerHTML = '<div class="empty">No tools match your filters. Try clearing the search or changing a filter.</div>';
      return;
    }

    filtered.forEach(function (tool) {
      var card = document.createElement("article");
      card.className = "card";

      var platforms = tool.platforms.map(function (p) { return escapeHtml(p); }).join(", ");
      var builtInHtml = tool.builtIn ? '<span class="built-in">Built in</span>' : "";
      var setupHtml = escapeHtml(tool.setup).replace(/\n/g, "<br>");
      var tagsHtml = tool.tags.map(function (t) { return '<span class="tag">' + escapeHtml(t) + "</span>"; }).join("");

      card.innerHTML =
        '<h2>' + escapeHtml(tool.name) + ' ' + builtInHtml +
        '<span class="cost">' + escapeHtml(tool.cost) + '</span></h2>' +
        '<p class="meta"><strong>Cost:</strong> ' + escapeHtml(tool.costDetail) + "<br>" +
        '<strong>Platforms:</strong> ' + platforms + "</p>" +
        '<p class="setup"><strong>Setup:</strong> ' + setupHtml + "</p>" +
        '<div class="tags">' + tagsHtml + "</div>" +
        '<div class="actions">' +
        '<a href="' + escapeHtml(tool.link) + '" class="btn" target="_blank" rel="noopener">Official site &rarr;</a>' +
        "</div>";

      resultsEl.appendChild(card);
    });
  }

  function setSearch(value) {
    currentQuery = value.trim();
    clearBtn.style.display = currentQuery ? "block" : "none";
    render();
  }

  function setNeedFilter(btn) {
    currentNeed = btn.getAttribute("data-filter-value");
    updateActive(needButtons, btn);
    render();
  }

  function setDeviceFilter(btn) {
    currentDevice = btn.getAttribute("data-filter-value");
    updateActive(deviceButtons, btn);
    render();
  }

  function updateActive(group, activeBtn) {
    group.forEach(function (b) {
      b.classList.toggle("active", b === activeBtn);
    });
  }

  searchInput.addEventListener("input", function () { setSearch(this.value); });
  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    setSearch("");
    searchInput.focus();
  });

  needButtons.forEach(function (btn) {
    btn.addEventListener("click", function () { setNeedFilter(btn); });
  });
  deviceButtons.forEach(function (btn) {
    btn.addEventListener("click", function () { setDeviceFilter(btn); });
  });

  loadTools();
})();
