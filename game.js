var human = new Player ('human', '👤');
var computer = new Player ('computer', '💻');

class Game {
  constructor() {
    this.compChoice = '';
    this.gameCount = 0;
    this.classicChoices = ["./assets/rock.png", "./assets/post-it.png", "./assets/scissors.png"];
    this.competitors = [];
  }
  rallyTheTroops(human, computer) {
    console.log('testing1', human)
    console.log('testing2', computer)
    this.competitors.push(human, computer)
  }
  randomCompChoice() {
    // var classicChoices = ["assets/rock.png", "assets/post-it.png", "assets/scissors.png"];
    for (var i = 0; i < classicChoices.length; i++) {
      var randomChoice = classicChoices[Math.floor(Math.random() * classicChoices.length)]
    }
    this.compChoice = randomChoice;
    return
  }
  countGameNumber() {
    this.gameCount++
  }
}

var testing = new Game ();




// determineWinner(player1, player2) {
// if (player1.classicChoices[0] && this.compChoice === 'assets/post-it.png') {h2element.innerHTML = "Computer Wins!"}
// else if (player1.classicChoices[1] && this.compChoice === 'assets/scissors.png') {h2element.innerHTML = "Computer Wins!"}
// else if (player1.classicChoices[2] && this.compChoice === 'assets/rock.png') {h2element.innerHTML = "Computer Wins!"}

// else if (player1.classicChoices[2] && this.compChoice === 'assets/post-it.png') {h2element.innerHTML = "Human Wins!"}
// else if (player1.classicChoices[1] && this.compChoice === 'assets/post-it.png') {h2element.innerHTML = "Computer Wins!"}
// else if (player1.classicChoices[0] && this.compChoice === 'assets/post-it.png') {h2element.innerHTML = "Human Wins!"}
// else {return h2element.innerHTML = "It's a draw!" player1.wins = 0  player2.wins = 0}




//classic game logic :
// rock > scissors
//scissors > paper
// paper > rock
// if (human chooses rock && computer chooses rock === true) {draw}
// if (human chooses paper && computer chooses paper === true) {draw}
// if (human chooses scissors && computer chooses scissors === true) {draw}

// if (human chooses rock && computer chooses paper === true) {comp wins}
// if (human chooses paper && computer chooses scissors === true) {comp wins}
// if (human chooses scissors && computer chooses rock === true) {comp wins}

// if (comp chooses rock && human chooses paper === true) {human wins}
// if (comp chooses paper && human chooses scissors === true) {human wins}
// if (comp chooses scissors && human chooses rock === true) {human wins}

//update innerHTML of h2 for who wins
