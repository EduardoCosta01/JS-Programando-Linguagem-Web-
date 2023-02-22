var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(evento) {
    
    evento.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function() {
        evento.target.parentNode.remove();
    }, 500);
    
});
