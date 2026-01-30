const toggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.theme) {
  document.body.className = localStorage.theme;
} else if (prefersDark) {
  document.body.className = "dark";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "";
});
