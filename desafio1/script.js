const inputNumero = document.getElementById('numero');
const divTabuada = document.getElementById('tabuada');

inputNumero.addEventListener('input', () => {
    const numero = parseInt(inputNumero.value);
    divTabuada.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = document.createElement('p');
        linha.textContent = `${numero} x ${i} = ${resultado}`;
        divTabuada.appendChild(linha);
    }
});