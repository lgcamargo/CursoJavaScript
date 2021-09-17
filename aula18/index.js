function criaPessoa (nome, sobrenome, idade){
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
};

const pessoa1 = criaPessoa('Lucas','Gabriel', 24)
const pessoa2 = criaPessoa('Millena','Beatriz', 22)

console.log(pessoa1.nome);
console.log(pessoa2.nome);

