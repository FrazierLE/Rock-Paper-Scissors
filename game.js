var human = new Player ('Human', '👤');
var computer = new Player ('Computer', '💻');
var rock = './assets/rock.png';
var paper = './assets/post-it.png';
var scissors = './assets/scissors.png';
var wait = this;

class Game {
  constructor(choice) {
    this.compChoice = '';
    this.gameCount = 0;
    this.humanChoice = choice;
    this.competitors = [];
  }
    rallyTheTroops(human, computer) {
    this.competitors.push(human, computer)
  }
    randomCompChoice() {
    for (var i = 0; i < classicChoices.length; i++) {
      var randomChoice = classicChoices[Math.floor(Math.random() * classicChoices.length)]
    }
    this.compChoice = randomChoice;
    return
  }
    showTheWinner() {
      this.gameCount++
      if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
        this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && this.humanChoice === paper) {
        this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && this.humanChoice === rock) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
          this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else {return 'Its a draw!'}
}
  // updateLocalStorage(player) {
  //   player.saveWinsToStorage()
  //   player.retrieveWinsFromStorage()
  // }
  // wait() {
  //   {setTimeout(resetGameBoard, 2000)}
  // }
}

var rockChoice = new Game (rock);
var paperChoice = new Game (paper);
var scissorsChoice = new Game (scissors);









//classic game logic :
// rock > scissors
//scissors > paper
// paper > rock


//update innerHTML of h2 for who wins
