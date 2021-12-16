const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}


function lightDarkToggle(e) {
    var theme = document.documentElement.getAttribute("data-theme");

    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
    }
}