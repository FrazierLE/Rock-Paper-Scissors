var classicChoices = ['./assets/rock.png', './assets/post-it.png', './assets/scissors.png'];
var classicSection = document.querySelector('#classicClickable');
var difficultSection = document.querySelector('#difficultClickable');
var classicRockImage = document.querySelector('#rockClassic');
var classicPaperImage = document.querySelector('#paperClassic');
var classicScissorsImage = document.querySelector('#scissorsClassic');
var difficultRockImage = document.querySelector('#rockDifficult');
var difficultPaperImage = document.querySelector('#paperDifficult');
var difficultScissorsImage = document.querySelector('#scissorsDifficult');
var sectionHomeView = document.querySelector('#homePage');
var difficultView = document.querySelector('#difficultView');
var classicView = document.querySelector('#classicView');
var outcomeView = document.querySelector('#outcomeView');
// var placeholder1 = document.querySelector('');
// var placeholder1 = document.querySelector('');
var computerWins = document.querySelector('#compWins');
var humanWins = document.querySelector('#humanWins');
var button = document.querySelector('#changeGame');
var updatingTitle = document.querySelector('#liveUpdatesTitle')

//need to create a resetGameBoard function
//create eventlistener and variable to classic div - add hidden class, remove another
// change text h2 - for winner/choose your fighter
// choose fighter function
//add innerHTML for h6
//add photos and rules for other game
//keep win state, set time out method/resetGameBoard function
//css hover on clickables

difficultSection.addEventListener('click', createDifficultGameView);
classicSection.addEventListener('click', createClassicGameView);
button.addEventListener('click', changeGame);
classicRockImage.addEventListener('click', chooseRock);
classicPaperImage.addEventListener('click', choosePaper);
classicScissorsImage.addEventListener('click', chooseScissors);

function createDifficultGameView() {
  classicSection.classList.add('hidden');
  difficultSection.classList.add('hidden');
  homePage.classList.add('hidden');
  difficultView.classList.remove('hidden');
  button.classList.remove('hidden');
  updatingTitle.innerText = "Choose Your Fighter";
}

function createClassicGameView() {
  classicSection.classList.add('hidden');
  difficultSection.classList.add('hidden');
  homePage.classList.add('hidden');
  classicView.classList.remove('hidden');
  difficultView.classList.add('hidden');
  button.classList.remove('hidden');
  updatingTitle.innerText = "Choose Your Fighter";
}

function changeGame() {
  classicSection.classList.remove('hidden');
  difficultSection.classList.remove('hidden');
  homePage.classList.remove('hidden');
  classicView.classList.add('hidden');
  button.classList.add('hidden');
  updatingTitle.innerText = "Choose Your Game";
}

function chooseRock() {
  rockChoice.rallyTheTroops(human, computer);
  rockChoice.randomCompChoice();
  updatingTitle.innerText = rockChoice.showTheWinner();
  console.log('rock', human)
  console.log('rock', computer)
  document.getElementById('humanWins').innerHTML = human.wins;
  document.getElementById('compWins').innerHTML = computer.wins;
}

function choosePaper() {
  paperChoice.rallyTheTroops(human, computer);
  paperChoice.randomCompChoice();
  updatingTitle.innerText = paperChoice.showTheWinner();
  console.log('paper', human)
  console.log('paper', computer)
  document.getElementById('humanWins').innerHTML = human.wins;
  document.getElementById('compWins').innerHTML = computer.wins;
}

function chooseScissors() {
  console.log('hello')
  scissorsChoice.rallyTheTroops(human, computer);
  scissorsChoice.randomCompChoice();
  updatingTitle.innerText = scissorsChoice.showTheWinner();
  console.log('scissors', human)
  console.log('scissors', computer)
  document.getElementById('humanWins').innerHTML = human.wins;
  document.getElementById('compWins').innerHTML = computer.wins;
}

















//want more room to code
