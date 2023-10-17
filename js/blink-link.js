document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
    
            // Obtém o ID da seção vinculada ao link
            const sectionId = this.getAttribute("href").substr(1);
    
            // Adiciona a classe "selected" à seção vinculada
            const section = document.getElementById(sectionId);
            section.classList.add("selected");
    
            // Aplica temporariamente um filtro de brilho para escurecer
            section.style.filter = "brightness(0.7)"; // Ajuste conforme desejado
        
            window.scrollTo(0, section.offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight);
    
            // Remove o filtro após 2 segundos (ajuste conforme desejado)
            setTimeout(() => {
                section.style.filter = "brightness(1)";
            }, 500);
        });
    });
    
    
});