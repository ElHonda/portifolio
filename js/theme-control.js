const THEMES = ["light-1", "light-2", "light-3", "light-4", "dark-1", "dark-2", "dark-3"];

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
        localStorage.setItem("selectedTheme", "dark-1");
    }
});