document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggleBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const kmPanels = document.querySelectorAll(".km-panel, .km");
    const enPanels = document.querySelectorAll(".en-panel, .en");
    const htmlRoot = document.documentElement;

    let currentLang = "both"; // Options: 'km', 'en', 'both'

    // Language Toggle Feature
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            if (currentLang === "both") {
                currentLang = "km";
                document.querySelectorAll(".km-panel, .km").forEach(el => el.style.display = "block");
                document.querySelectorAll(".en-panel, .en").forEach(el => el.style.display = "none");
                langToggleBtn.innerText = "🇰🇭 ភាសាខ្មែរ";
            } else if (currentLang === "km") {
                currentLang = "en";
                document.querySelectorAll(".km-panel, .km").forEach(el => el.style.display = "none");
                document.querySelectorAll(".en-panel, .en").forEach(el => el.style.display = "block");
                langToggleBtn.innerText = "🇬🇧 English";
            } else {
                currentLang = "both";
                document.querySelectorAll(".km-panel, .km").forEach(el => el.style.display = "block");
                document.querySelectorAll(".en-panel, .en").forEach(el => el.style.display = "block");
                langToggleBtn.innerText = "🇰🇭 / EN";
            }
        });
    }

    // Theme Toggle Feature (Dark / Light Mode)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlRoot.getAttribute("data-theme");
            if (currentTheme === "dark") {
                htmlRoot.setAttribute("data-theme", "light");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                htmlRoot.setAttribute("data-theme", "dark");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    console.log("UNIVERSE HUOKAING THARA Overview Platform initialized successfully.");
});
