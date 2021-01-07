function setTheme(theme) {
  window.localStorage.setItem("theme", theme);
  changeTheme(theme);
}

function loadTheme(theme) {
  document.getElementById("theme").href = theme;
}

function loadStoredTheme() {
  const theme = windo.localStorage.getItem("theme");
  if (theme != undefined) {
    loadTheme(theme);
  }
}

loadStoredTheme()
