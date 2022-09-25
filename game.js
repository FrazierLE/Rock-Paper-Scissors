var human = new Player ('Human', '👤');
var computer = new Player ('Computer', '💻');

var rock = './assets/rock.png';
var paper = './assets/post-it.png';
var scissors = './assets/scissors.png';
var cowboy = './assets/cowboy.png';
var gun = './assets/cartoon-gun.png';

class Game {
  constructor(choice, selectedGameType) {
    this.compChoice = '';
    this.gameCount = 0;
    this.humanChoice = choice;
    this.competitors = [];
    this.selectedGameType = selectedGameType;
  }
    rallyTheTroops(human, computer) {
    this.competitors.push(human, computer)
  }
    randomCompChoice() {
      if (this.selectedGameType === 'classic') {
        var randomChoice = classicChoices[Math.floor(Math.random() * 3)]
        this.compChoice = randomChoice;}
      else {
        var randomChoice = difficultChoices[Math.floor(Math.random() * 5)]
        this.compChoice = randomChoice;}
    }

    showTheWinner() {
      this.gameCount++
      if (this.compChoice === './assets/post-it.png' && (this.humanChoice === scissors || this.humanChoice === cowboy)) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === './assets/post-it.png' && (this.humanChoice === rock || this.humanChoice === gun)) {
        this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && (this.humanChoice === paper || this.humanChoice === cowboy)) {
        this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/scissors.png' && (this.humanChoice === rock || this.humanChoice === gun)) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === './assets/rock.png' && (this.humanChoice === scissors || this.humanChoice === cowboy)) {
          this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === './assets/rock.png' && (this.humanChoice === paper || this.humanChoice === gun)) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === './assets/cowboy.png' && (this.humanChoice === scissors || this.humanChoice === rock)){
          this.competitors[0].wins++;
          return 'Human wins!'}
      else if (this.compChoice === './assets/cowboy.png' && (this.humanChoice === paper || this.humanChoice === gun)) {
          this.competitors[1].wins++;
          return 'Computer wins!'}
      else if (this.compChoice === './assets/cartoon-gun.png' && (this.humanChoice === paper || this.humanChoice === cowboy)) {
          this.competitors[0].wins++;
          return 'Human wins!'}
      else if (this.compChoice === './assets/cartoon-gun.png' && (this.humanChoice === rock || this.humanChoice === scissors)) {
          this.competitors[1].wins++;
          return 'Computer wins!'}
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

//Classic Choices
var rockChoice = new Game (rock, 'classic');
var paperChoice = new Game (paper, 'classic');
var scissorsChoice = new Game (scissors, 'classic');
//Difficult Choices
var difficultRock = new Game (rock, 'difficult');
var difficultPaper = new Game (paper, 'difficult');
var difficultScissors = new Game (scissors, 'difficult');
var cowboyChoice = new Game (cowboy, 'difficult');
var gunChoice = new Game (gun, 'difficult');




//update innerHTML of h2 for who wins
