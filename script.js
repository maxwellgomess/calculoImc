function mostra(frase) {
    document.write(frase)
}

function calculoImc(peso, altura) {
    let imc = peso / (altura**2)
    return imc
}

let altura = prompt("Informe sua altura")
let peso = prompt("Informe seu peso")

let imc = calculoImc(peso, altura)

if (imc > 35) {
    mostra("Seu IMC é " + imc + "! Você está acima do peso")
} else if (imc < 18.5) {
    mostra("Seu IMC é " + imc + "! Você está abaixo do peso")
} else {
    mostra("Seu IMC é " + imc + "! Está tudo certo com seu peso")
}


