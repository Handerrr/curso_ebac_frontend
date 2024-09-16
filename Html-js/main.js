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
        paragrafoElement.textContent = `Formulário válido: ${valorB} é maior que ${valorA}.`;
        paragrafoElement.className = 'paragrafo sucess';
    } else {
        paragrafoElement.textContent = `Formulário inválido: ${valorB} deve ser maior que ${valorA}.`;
        paragrafoElement.className = 'paragrafo error';
    }
    paragrafoElement.style.display = 'block';
}