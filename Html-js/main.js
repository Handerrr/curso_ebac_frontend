const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        validarMensagem(true, campoA, campoB);
    } else {
        validarMensagem(false, campoA, campoB);
    }
});

function validarMensagem(valid, valorA, valorB) {
    const paragrafoElement = document.getElementById('paragrafo');
    if (valid) {
        paragrafoElement.innerHtml = `Formulário válido: ${valorB} é maior que ${valorA}.`;
        paragrafoElement.className = 'paragrafo sucess';
    } else {
        paragrafoElement.innerHtml = `Formulário inválido: O valor ${valorB} é menor que ${valorA}.`;
        paragrafoElement.className = 'paragrafo error';
    }
    paragrafoElement.style.display = 'block';
}
