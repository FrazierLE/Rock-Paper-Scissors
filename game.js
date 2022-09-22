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
      this.gameCount++
      if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
        this.competitors[0].wins += 1;
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
        this.competitors[1].wins += 1;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && this.humanChoice === paper) {
        this.competitors[1].wins += 1;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && this.humanChoice === rock) {
        this.competitors[0].wins += 1;
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === rock) {
          this.competitors[1].wins += 1;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/post-it.png' && this.humanChoice === scissors) {
        this.competitors[0].wins += 1;
        return 'Human wins!'}
      else {return 'Its a draw!'}
}
  updateLocalStorage(human) {
    human.saveWinsToStorage()
    human.retrieveWinsFromStorage()
  }
  updateLocalStorageComputer(computer) {
    computer.saveWinsToStorage()
    computer.retrieveWinsFromStorage()
  }
}

var testing1 = new Game (rock);
var testing2 = new Game (paper);
var testing3 = new Game (scissors);









//classic game logic :
// rock > scissors
//scissors > paper
// paper > rock


//update innerHTML of h2 for who wins
