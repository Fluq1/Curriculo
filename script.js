document.addEventListener("DOMContentLoaded", function() {
    var text = document.querySelector('.iam');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        text.style.transform = `translateY(-${scrollPosition}px)`;
    });

    // Initialize Typed.js
    var typing = new Typed(".text", {
        strings: ["", "Programador Web em formação", "Entusiasta de Design Gráfico", "Aspirante a Desenvolvedor de Software Full Stack",],
        typeSpeed: 140,
        backSpeed: 40,
        loop: true,
    });
});
