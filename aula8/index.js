const nome = 'Lucas', sobrenome = 'Camargo', idade = 24, peso = 62, altura = 1.72, anoAtual = 2021
let imc,anoNascimento
anoNascimento = (anoAtual-idade)-1
imc = peso / (altura*altura)

console.log(nome+' '+sobrenome+' tem '+idade+' anos, pesa '+peso+'kg tem '+altura+'m de altura e seu IMC é de '+imc)
console.log(nome+' '+sobrenome+' nasceu em '+anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)