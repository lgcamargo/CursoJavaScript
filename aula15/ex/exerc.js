const numero = Number(prompt('Digite um número:'));
const scriptSpan = document.getElementById('script-span');
const texto = document.getElementById('texto');

scriptSpan.innerHTML = numero;
texto.innerHTML += `<p>Raíz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

