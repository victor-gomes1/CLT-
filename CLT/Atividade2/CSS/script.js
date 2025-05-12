document.addEventListener('DOMContentLoaded', function () {
    const btnFormulario = document.getElementById('btnFormulario');
    const btnVoltar = document.getElementById('btnVoltar');
    const secaoCurriculo = document.getElementById('curriculo');
    const secaoFormulario = document.getElementById('formulario');

    
    btnFormulario.addEventListener('click', () => {
        secaoCurriculo.style.display = 'none';
        secaoFormulario.style.display = 'block';
    });

    
    btnVoltar.addEventListener('click', () => {
        secaoFormulario.style.display = 'none';
        secaoCurriculo.style.display = 'block';
    });
});