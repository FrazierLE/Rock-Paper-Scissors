class Game {
  constructor() {
    this.compChoice = '';
    this.gameCount = 0;
  }
  randomCompChoice() {
    var classicChoices = ["assets/rock.png", "assets/post-it.png", "assets/scissors.png"];
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


//method gameCount - default to 0, create method to add gameCount++



//method randomCompChoice:
