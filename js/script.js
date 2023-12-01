 // Funzione per generare un numero casuale 
 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Funzione per generare un array di 5 numeri casuali
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(getRandomNumber(1, 10));
    }
    return numbers;
}

// Funzione per avviare il gioco
function startGame() {
    // Genera i numeri casuali da memorizzare
    const numbersToShow = generateRandomNumbers();
     // Mostra i numeri all'utente
     alert("Memorizza i seguenti numeri: " + numbersToShow.join(", "));
}