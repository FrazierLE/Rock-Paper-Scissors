var human = new Player ('Human', '👤');
var computer = new Player ('Computer', '💻');
var rock = './assets/rock.png';
var paper = './assets/post-it.png';
var scissors = './assets/scissors.png';

class Game {
  constructor(choice) {
    this.compChoice = '';
    this.gameCount = 0;
    this.humanChoice = choice;
    this.competitors = [];
  }
  rallyTheTroops(human, computer) {
    this.competitors.push(human, computer)
    console.log('TEST1: ', this.competitors[0].name)
  }
  randomCompChoice() {
    for (var i = 0; i < classicChoices.length; i++) {
      var randomChoice = classicChoices[Math.floor(Math.random() * classicChoices.length)]
    }
    this.compChoice = randomChoice;
    return
  }
  showTheWinner() {
      if (this.compChoice === this.humanChoice) {return 'its a draw!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
        this.competitors[0].wins += 1
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
        this.competitors[1].wins += 1
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && this.humanChoice === paper) {
        this.competitors[1].wins += 1
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && this.humanChoice === rock) {
        this.competitors[0].wins += 1;
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
          this.competitors[1].wins += 1;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
        this.competitors[0].wins += 1
        return 'Human wins!'}
      // else if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
      //   return `${this.competitors[0].name} wins!`}
      // else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
      //   return `${this.competitors[1].name} wins!`}
      // else if (this.compChoice === './assets/scissors.png' && this.humanChoice === paper) {
      //   return `${this.competitors[1].name} wins!`}
      // else if (this.compChoice === './assets/scissors.png' && this.humanChoice === rock) {
      //   return `${this.competitors[0].name} wins!`}
      // else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
      //   return `${this.competitors[1].name} wins!`}
      // else if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
      //   return `${this.competitors[0].name} wins!`}
      // else if (this.compChoice === "./assets/post-it.png") {console.log('Computer wins!')}
      // else if (this.compChoice === "./assets/scissors.png") {console.log('Human wins!')}
}
  countGameNumber() {
    this.gameCount++
  }
}

var testing1 = new Game (rock);
var testing2 = new Game (paper);
var testing3 = new Game (scissors);





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
