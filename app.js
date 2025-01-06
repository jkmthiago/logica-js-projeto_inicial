let successDiv = document.getElementById('success')
let tryHard = document.getElementById('tryHard')
let gameOn = document.getElementById('gameOn')
let rangeDiv = document.getElementById('range')

let range = 100
let secretNumber = parseInt(Math.random() * 101)
let secretNumberRangeInfo = 'Escolha um número entre 0 e'

let feedbacks = []

let firstTry = true

function setSecretNumberRange(choice){
    if (choice == "rangeFrom") {
        document.getElementById('buttons').style.display = 'none'
        document.getElementById('choseARange').style.display = 'flex'
    } else if (choice == "notToRange"){
        rangeDiv.style.display = 'none'
        gameOn.style.display = 'block'
        document.getElementById('secretNumberRangeInfo').innerText = `${secretNumberRangeInfo} 100`
    } else if (choice == "startTheGame"){
        range = parseInt(document.getElementById('userRangeChoice').value)
        if (range <= 0) {
            alert('Valor deve ser maior que 0 e não pode ser o próprio 0');
            return;
        } else if (isNaN(range)) {
            alert("Por favor, insira um número válido.");
            return;
        }
        secretNumber = parseInt(Math.random() * (range + 1))
        rangeDiv.style.display = 'none'
        gameOn.style.display = 'block'
        document.getElementById('secretNumberRangeInfo').innerText = `${secretNumberRangeInfo} ${range}`
    } else if (choice == "returnToButtons"){
        document.getElementById('choseARange').style.display = 'none'
        document.getElementById('buttons').style.display = 'flex'
    } else if (choice == "reloadGame") {
        location.reload()
    }
}

function attemptDone() {
    let attempt = parseInt(document.getElementById('attempt').value)

    if (isNaN(attempt)) {
        alert("Por favor, insira um número válido.");
        return;
    } else if (attempt > range || attempt < 0){
        alert(`Por favor, insira um entre 0 e ${range}.`);
        return;
    }
    
    if (firstTry) {
        firstTry = false
        document.getElementById('noAttempts').style.display = 'none'
    }

    let feedback

    if (attempt > secretNumber) {
        feedback = "O número secreto é menor que " + attempt
    } else if (attempt < secretNumber) { 
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
