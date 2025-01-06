let successDiv = document.getElementById('success')
let tryHard = document.getElementById('tryHard')
let gameOn = document.getElementById('gameOn')

let secretNumber = parseInt(Math.random() * 100)

let feedbacks = []

let firstTry = true

function attemptDone() {
    let attempt = document.getElementById('attempt').value
    if (firstTry) {
        firstTry = false
        document.getElementById('noAttempts').style.display = 'none'
    }

    if (isNaN(attempt)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    let feedback

    if (attempt > secretNumber) {
        // alert('Você errou! O número secreto é menor que ' + attempt)
        feedback = "O número secreto é menor que " + attempt
    } else if (attempt < secretNumber) {
        // alert('Você errou! O número secreto é maior que ' + attempt)
        feedback = "O número secreto é maior que " + attempt
    } else {
        gameOn.style.display = 'none'
        successDiv.style.display = 'flex'
    }

    feedbacks.unshift(feedback)

    tryHard.innerHTML = '';
    for (let i = 0; i < feedbacks.length; i++) {
        let p = document.createElement('p')
        p.textContent = feedbacks[i]
        p.id = i + 1
        tryHard.appendChild(p)
    }
}


// alert('Boas vindas ao jogo do número aleatório')

// let numeroSecreto = parseInt(Math.random()*100)
// console.log(numeroSecreto)

// let chute = prompt("Escolha um número entre 0 e 100")

// while (chute != numeroSecreto) {
//     chute = prompt("Escolha um número entre 0 e 100")
// }
