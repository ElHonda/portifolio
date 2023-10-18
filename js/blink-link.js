// Executa função no carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Recupera os links do navbar
    const links = document.querySelectorAll("nav a");

    // Para cada link, adiciona evento de click
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            // Evita chamar a função padrão
            e.preventDefault();
    
            // Obtém o ID da seção vinculada ao link
            const sectionId = this.getAttribute("href").substr(1);
    
            // Adiciona a classe "selected" à seção vinculada
            const section = document.getElementById(sectionId);
            section.classList.add("selected");
    
            // Aplica temporariamente um filtro de brilho para escurecer
            section.style.filter = "brightness(0.7)";
        
            // Corrige o offset do Top subtraindo o tamanho da navbar
            window.scrollTo(0, section.offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight);
    
            // Remove o filtro após 0.5 segundos
            setTimeout(() => {
                section.style.filter = "brightness(1)";
            }, 500);
        });
    });
    
    
});