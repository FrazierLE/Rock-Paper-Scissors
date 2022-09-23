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
// choose fighter function?
//add photos and rules for other game



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
  console.log('fuck',rockChoice.rallyTheTroops(human, computer));
  console.log('what are you picking?', rockChoice.randomCompChoice());
  outcomeView.innerHTML = `<img src="${rockChoice.compChoice}">`;
  updatingTitle.innerText = rockChoice.showTheWinner();
  console.log('rock', human);
  console.log('rock', computer);
  showMeThatScoreBoard();
  displayOutcome();
  setTimeout(function(){
      createClassicGameView();
  }, 1500);
}

function choosePaper() {
  paperChoice.rallyTheTroops(human, computer);
  paperChoice.randomCompChoice();
  outcomeView.innerHTML = `<img src="${paperChoice.compChoice}">`;
  updatingTitle.innerText = paperChoice.showTheWinner();
  console.log('paper', human);
  console.log('paper', computer);
  showMeThatScoreBoard();
  displayOutcome();
  setTimeout(function(){
      createClassicGameView();
  }, 1500);
}

function chooseScissors() {
  scissorsChoice.rallyTheTroops(human, computer);
  scissorsChoice.randomCompChoice();
  outcomeView.innerHTML = `<img src="${scissorsChoice.compChoice}">`;
  updatingTitle.innerText = scissorsChoice.showTheWinner();
  console.log('scissors', human);
  console.log('scissors', computer);
  showMeThatScoreBoard();
  displayOutcome();
  setTimeout(function(){
      createClassicGameView();
  }, 1500);
}

function showMeThatScoreBoard() {
  document.getElementById('humanWins').innerHTML = human.wins;
  document.getElementById('compWins').innerHTML = computer.wins;
}

function displayOutcome() {
  classicSection.classList.add('hidden');
  classicView.classList.add('hidden');
  if(rockChoice) {
    outcomeView.innerHTML += `<img src="${'./assets/rock.png'}">`;}
  else if (paperChoice) {outcomeView.innerHTML += `<img src="${'./assets/post-it.png'}">`;}
  else if (scissorsChoice) {outcomeView.innerHTML += `<img src="${'./assets/scissors.png'}">`;}
}

function hideOutcome() {
  outcomeView.classList.add('hidden');
}














//want more room to code
