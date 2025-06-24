const inputNome = document.getElementById('nome');
const lista = document.getElementById('lista')

inputNome.addEventListener('input', () => {
  const texto = inputNome.value.toLowerCase();
  const itens = lista.querySelectorAll('li')

  itens.forEach(item => {
    const nome = item.textContent.toLowerCase();
    if (nome.includes(texto)) {
      item.style.fontWeight = "bold";
    } else {
      item.style.fontWeight = "normal";
    } 
  });
});