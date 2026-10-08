(function () {

 
    // DOM Elements


    const root = document.documentElement;
    const themeButton = document.getElementById("theme");



    // Get Saved Theme


    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch (error) {
        savedTheme = null;
    }



    // Determine Initial Theme


    const preferredTheme =
        savedTheme ||
        (
            matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        );



    // Set Theme


    function setTheme(theme) {

        root.setAttribute("data-theme", theme);

        themeButton.textContent =
            theme === "dark"
                ? "Light"
                : "Dark";

        try {
            localStorage.setItem("theme", theme);
        } catch (error) {
            // Ignore localStorage errors
        }
    }


    // Initialize Theme
  

    setTheme(preferredTheme);


    
    // Theme Toggle
    

    themeButton.addEventListener("click", function () {

        const currentTheme =
            root.getAttribute("data-theme");

        const nextTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        setTheme(nextTheme);
    });

})();