document.addEventListener("DOMContentLoaded", () => {
    const btnFormulario = document.getElementById("btnFormulario");
    const formulario = document.getElementById("formulario");
    const btnVoltar = document.getElementById("btnVoltar");

    // Verifica se o botão e o formulário existem no DOM
    if (btnFormulario && formulario) {
        btnFormulario.addEventListener("click", () => {
            formulario.style.display = "block"; // Exibe o formulário
        });
    } else {
        console.error("O botão 'btnFormulario' ou o formulário 'formulario' não foi encontrado no DOM.");
    }

    // Verifica se o botão de voltar existe no DOM
    if (btnVoltar) {
        btnVoltar.addEventListener("click", () => {
            formulario.style.display = "none"; // Oculta o formulário
        });
    } else {
        console.error("O botão 'btnVoltar' não foi encontrado no DOM.");
    }
});