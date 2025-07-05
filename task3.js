// Load dark mode preference
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");
  const isDark = localStorage.getItem("darkMode") === "true";

  if (isDark) {
    document.body.classList.add("dark");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isNowDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isNowDark);
    toggleBtn.innerHTML = isNowDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  });

  // Form submit message
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting!");
  });
});
