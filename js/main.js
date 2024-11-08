function darkMode() {
    const body = document.body;
    const wasDark = localStorage.getItem("darkmode") === "true";
    localStorage.setItem("darkmode", !wasDark);
    body.classList.toggle("dark-mode", !wasDark);
}
document.querySelector("#btn").addEventListener("click", darkMode);
