// Lista de temas disponiveis
const THEMES = ["light-1", "light-2", "light-3", "light-4", "dark-1", "dark-2", "dark-3"];

// Função para troca de tema
function changeTheme(newTheme) {
    // Somente tenta mudar o tema caso ele exista
    if(THEMES.includes(newTheme)){
        // Encontra a tag <link> pelo ID
        var linkTag = document.getElementById("theme-link");

        // Se a tag existir, altera o href com o tema desejado
        if (linkTag) {
            // Modifica o atributo href
            linkTag.setAttribute("href", "css/themes/" + newTheme + "-theme.css" );
            localStorage.setItem("selectedTheme", newTheme);
        }
    }else{
        // Mensagem de tema não definido
        console.warn("Undefined Theme");
    }
}

// Adiciona evento na inicialização da página
document.addEventListener("DOMContentLoaded", function() {
    // Recupera o tema corrente do localStorage
    let currentTheme = localStorage.getItem("selectedTheme");
    // Caso seja um tema válido, aplica
    if(THEMES.includes(currentTheme)){
        // Chama a função para alterar o tema
        changeTheme(currentTheme);
    }else{
        // Define o tema padrão caso não tenha encontrado um tema válido
        localStorage.setItem("selectedTheme", "dark-1");
    }
});