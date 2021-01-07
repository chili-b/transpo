function setTheme(theme) {
  window.localStorage.setItem("theme", theme);
  loadTheme(theme);
}

function loadTheme(theme) {
  document.getElementById("theme").href = theme;
}

function loadStoredTheme() {
  const theme = window.localStorage.getItem("theme");
  if (theme != undefined) {
    loadTheme(theme);
  }
}

loadStoredTheme()
