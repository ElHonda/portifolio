const THEMES = ["light-blue", "light-green", "light-red", "light-yellow", "dark"];

function changeTheme(newTheme) {
    if(THEMES.includes(newTheme)){
        // Encontra a tag <link> pelo ID
        var linkTag = document.getElementById("theme-link");

        if (linkTag) {
            // Modifica o atributo href
            linkTag.setAttribute("href", "css/themes/" + newTheme + "-theme.css" );
            localStorage.setItem("selectedTheme", newTheme);
        }
    }else{
        console.warn("Undefined Theme");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let currentTheme = localStorage.getItem("selectedTheme");
    if(THEMES.includes(currentTheme)){
        changeTheme(currentTheme);
    }else{
        localStorage.setItem("selectedTheme", "dark");
    }
});