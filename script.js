document.addEventListener("DOMContentLoaded", () => {
    // Animação de entrada suave da Hero Section
    const esquerda = document.querySelector(".left");
    const direita = document.querySelector(".right");

    if (esquerda && direita) {
        esquerda.style.opacity = "0";
        direita.style.opacity = "0";
        esquerda.style.transform = "translateX(-30px)";
        direita.style.transform = "translateX(30px)";

        setTimeout(() => {
            esquerda.style.transition = "all 0.8s ease-out";
            direita.style.transition = "all 0.8s ease-out";

            esquerda.style.opacity = "1";
            direita.style.opacity = "1";
            esquerda.style.transform = "translateX(0)";
            direita.style.transform = "translateX(0)";
        }, 150);
    }

    // Ação do botão de compra
    const botao = document.querySelector(".botao");
    if (botao) {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Redirecionando para o checkout da Kiwify...");
            // window.location.href = "LINK_DA_SUA_PAGINA_KIWIFY";
        });
    }

    // Efeito Hover na imagem do Ebook (Segurança JS adicional para suavidade)
    const ebook = document.querySelector(".right img");
    if (ebook) {
        ebook.addEventListener("mouseenter", () => {
            ebook.style.transform = "scale(1.03) rotate(-1.5deg)";
        });

        ebook.addEventListener("mouseleave", () => {
            ebook.style.transform = "scale(1) rotate(0deg)";
        });
    }
});
