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

    setTimeout(function() {
      // Chiedi all'utente di inserire i numeri dopo il tempo di attesa
      const userNumbers = [];
      for (let i = 0; i < 5; i++) {
        const userInput = prompt("Inserisci il numero " + (i + 1));
        const parsedInput = parseInt(userInput);
        userNumbers.push(parsedInput);
      }

      // Verifica i numeri indovinati
      const correctNumbers = numbersToShow.filter(num => userNumbers.includes(num));

      // Mostra il risultato
      alert("Hai indovinato " + correctNumbers.length + " numeri: " + correctNumbers.join(", "));
    }, 5000);
}

startGame();