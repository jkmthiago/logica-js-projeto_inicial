console.log("Bem vindo!")

let nome = "Thiago Eleuterio da Silva"

console.log(`Olá ${nome}, seja bem vindo!`)

const progL = prompt("Qual a sua linguagem de programação favorita?")

console.log(`Legal, então você curte ${progL}!`)

const valor1 = 12
const valor2 = 74

let resultado = valor1 + valor2
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}`)

resultado = valor1 - valor2
console.log(`A subtração entre ${valor1} e ${valor2} é igual a ${resultado}`)

let idade = prompt("Qual a sua idade?")

if (idade >= 18) {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

let verified = true
let numero = 0

while (verified) {
    numero = prompt("Digite um número")
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.")
    } else {
        verified = false
    }
}

if (numero == 0) {console.log("O número é zero")}
else if (numero >  0) {console.log("O número é positivo")}
else if (numero <  0) {console.log("O número é negativo")}

let counter = 0;

while (counter < 10) {
    counter++;
    console.log(`Contagem Crescente: ${counter}`);
}

let nota = 8.5
if (nota >= 7){console.log("Aprovado")}
else {console.log("Reprovado")}

console.log(`Um número pseudo-aleatório ${parseInt(Math.random())}`)
console.log(`Um número pseudo-aleatório entre 1 e 10 é ${parseInt(Math.random()*10 + 1)}`)
console.log(`Um número pseudo-aleatório entre 1 e 10 é ${parseInt(Math.random()*1000 + 1)}`)