var human = new Player ('Human', '👤');
var computer = new Player ('Computer', '💻');

var rock = document.querySelector('#rockClassic').src;
var paper = document.querySelector('#paperClassic').src;
var scissors = document.querySelector('#scissorsClassic').src;
var cowboy = document.querySelector('#cowboy').src;
var gun = document.querySelector('#gun').src;

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
      if (this.compChoice === paper && (this.humanChoice === scissors || this.humanChoice === cowboy)) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === paper && (this.humanChoice === rock || this.humanChoice === gun)) {
        this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === scissors && (this.humanChoice === paper || this.humanChoice === cowboy)) {
        this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === scissors && (this.humanChoice === rock || this.humanChoice === gun)) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === rock && (this.humanChoice === scissors || this.humanChoice === cowboy)) {
          this.competitors[1].wins++;
        return 'Computer wins!'}
      else if (this.compChoice === rock && (this.humanChoice === paper || this.humanChoice === gun)) {
        this.competitors[0].wins++;
        return 'Human wins!'}
      else if (this.compChoice === cowboy && (this.humanChoice === scissors || this.humanChoice === rock)){
          this.competitors[0].wins++;
          return 'Human wins!'}
      else if (this.compChoice === cowboy && (this.humanChoice === paper || this.humanChoice === gun)) {
          this.competitors[1].wins++;
          return 'Computer wins!'}
      else if (this.compChoice === gun && (this.humanChoice === paper || this.humanChoice === cowboy)) {
          this.competitors[0].wins++;
          return 'Human wins!'}
      else if (this.compChoice === gun && (this.humanChoice === rock || this.humanChoice === scissors)) {
          this.competitors[1].wins++;
          return 'Computer wins!'}
      else {return 'Its a draw!'}

}
  // updateLocalStorage(player) {
  //   player.saveWinsToStorage()
  //   player.retrieveWinsFromStorage()
  // }
}
