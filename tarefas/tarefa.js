let counter = 0;

while (counter < 10) {
    counter++;
    console.log(`Contagem Crescente: ${counter}`);
}

while (counter > 0) {
    console.log(`Contagem Decrescente: ${counter}`);
    counter--;
}

let verified = true;

while (verified) {
    counter = prompt('Escolha um número para a contagem regressiva que seja maior que 0');
    if (isNaN(counter)) {
        alert("Por favor, insira um número válido.");
    } else if (counter <= 0) {
        alert('Valor deve ser maior que 0 e não pode ser o próprio 0');
    } else {
        verified = false;
    }
}

while (counter >= 0) {
    console.log(`Contagem Decrescente: ${counter}`);
    counter--;
}

// let interval = setInterval(() => {
//     console.log(`Contagem Decrescente: ${counter}`);
//     counter--;
//     if (counter < 0) {
//         clearInterval(interval);
//         console.log('OH MY GOD IT IS GONNA BLOW');
//         alert('KABUN');
//     }
// }, 1000);

verified = true;

let initCounter = 0

while (verified) {
    counter = prompt('Escolha um número para a contagem progressiva que seja maior que 0');
    if (isNaN(counter)) {
        alert("Por favor, insira um número válido.");
    } else if (counter <= 0) {
        alert('Valor deve ser maior que 0 e não pode ser o próprio 0');
    } else {
        verified = false;
    }
}

while (initCounter < counter) {
    initCounter++;
    console.log(`Contagem Crescente: ${initCounter}`);
}