var classicChoices;
var difficultChoices;
var selectedGameType;

var classicSection = document.querySelector('#classicClickable');
var difficultSection = document.querySelector('#difficultClickable');
// var classicRockImage = document.querySelector('#rockClassic');
// var classicPaperImage = document.querySelector('#paperClassic');
// var classicScissorsImage = document.querySelector('#scissorsClassic');
var sectionHomeView = document.querySelector('#homePage');
var difficultView = document.querySelector('#difficultView');
var classicView = document.querySelector('#classicView');
var outcomeView = document.querySelector('#outcomeView');
var difficultRockImage = document.querySelector('#rockDifficult');
var difficultPaperImage = document.querySelector('#paperDifficult');
var difficultScissorsImage = document.querySelector('#scissorsDifficult');
// var cowboyImage = document.querySelector('#cowboy');
// var revolverImage = document.querySelector('#gun');
var computerWins = document.querySelector('#compWins');
var humanWins = document.querySelector('#humanWins');
var button = document.querySelector('#changeGame');
var updatingTitle = document.querySelector('#liveUpdatesTitle');

difficultSection.addEventListener('click', createDifficultGameView);
classicSection.addEventListener('click', createClassicGameView);
button.addEventListener('click', changeGame);
// classicRockImage.addEventListener('click', chooseClassicRock);
// classicPaperImage.addEventListener('click', chooseClassicPaper);
// classicScissorsImage.addEventListener('click', chooseClassicScissors);
// difficultRockImage.addEventListener('click', chooseDifficultRock);
// difficultPaperImage.addEventListener('click', chooseDifficultPaper);
// difficultScissorsImage.addEventListener('click', chooseDifficultScissors);
// cowboyImage.addEventListener('click', chooseCowboy);
// revolverImage.addEventListener('click', chooseGun);
classicSection.addEventListener('click', pickClassic);
difficultSection.addEventListener('click', pickDifficult);

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
  difficultView.classList.add('hidden');
  button.classList.add('hidden');
  updatingTitle.innerText = "Choose Your Game";
}

function pickClassic() {
  // classicChoices = ['./assets/rock.png', './assets/post-it.png', './assets/scissors.png'];
  classicChoices = [rock, paper, scissors];
  selectedGameType = 'classic';
  return
}

function pickDifficult() {
  difficultChoices = [rock, paper, scissors, cowboy, gun];
  // difficultChoices = ['./assets/rock.png', './assets/post-it.png', './assets/scissors.png', './assets/cowboy.png', './assets/cartoon-gun.png'];
  selectedGameType = 'difficult';
  return
}



// function chooseClassicRock() {
//   rockChoice.rallyTheTroops(human, computer);
//   rockChoice.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${rockChoice.compChoice}"> <img src="${rockChoice.humanChoice}"> `;
//   updatingTitle.innerText = rockChoice.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseClassicPaper() {
//   paperChoice.rallyTheTroops(human, computer);
//   paperChoice.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${paperChoice.compChoice}"> <img src="${paperChoice.humanChoice}"> `;
//   updatingTitle.innerText = paperChoice.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseClassicScissors() {
//   scissorsChoice.rallyTheTroops(human, computer);
//   scissorsChoice.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${scissorsChoice.compChoice}"><img src="${scissorsChoice.humanChoice}"> `;
//   updatingTitle.innerText = scissorsChoice.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseDifficultRock() {
//   difficultRock.rallyTheTroops(human, computer);
//   difficultRock.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${difficultRock.compChoice}"> <img src="${difficultRock.humanChoice}"> `;
//   updatingTitle.innerText = difficultRock.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseDifficultPaper() {
//   difficultPaper.rallyTheTroops(human, computer);
//   difficultPaper.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${difficultPaper.compChoice}"> <img src="${difficultPaper.humanChoice}"> `;
//   updatingTitle.innerText = difficultPaper.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseDifficultScissors() {
//   difficultScissors.rallyTheTroops(human, computer);
//   difficultScissors.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${difficultScissors.compChoice}"> <img src="${difficultScissors.humanChoice}"> `;
//   updatingTitle.innerText = difficultScissors.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseCowboy() {
//   cowboyChoice.rallyTheTroops(human, computer);
//   cowboyChoice.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${cowboyChoice.compChoice}"><img src="${cowboyChoice.humanChoice}"> `;
//   updatingTitle.innerText = cowboyChoice.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }
//
// function chooseGun() {
//   gunChoice.rallyTheTroops(human, computer);
//   gunChoice.randomCompChoice();
//   outcomeView.innerHTML = `<img src="${gunChoice.compChoice}"><img src="${gunChoice.humanChoice}"> `;
//   updatingTitle.innerText = gunChoice.showTheWinner();
//   showMeThatScoreBoard();
//   displayOutcome();
//   setTimeout(function(){
//       if(selectedGameType === 'classic') {createClassicGameView()} else {createDifficultGameView()}
//   }, 1500);
// }





function showMeThatScoreBoard() {
  document.getElementById('humanWins').innerHTML = human.wins;
  document.getElementById('compWins').innerHTML = computer.wins;
}

function displayOutcome() {
  classicSection.classList.add('hidden');
  classicView.classList.add('hidden');
  difficultSection.classList.add('hidden');
  difficultView.classList.add('hidden');
  outcomeView.classList.remove('hidden');
  setTimeout(function() {
    outcomeView.classList.add('hidden');
  }, 1500)
}

var game;

var weaponsC = document.querySelectorAll('.classicWeapons');
for (var i = 0; i < weaponsC.length; i++) {
  weaponsC[i].addEventListener('click', function (event) {
    pickClassic()
    var choice1 = event.target.src
    classic = new Game (choice1, 'classic');
    classic.rallyTheTroops(human, computer);
    classic.randomCompChoice()
    outcomeView.innerHTML = `<img src="${classic.compChoice}"><img src="${classic.humanChoice}"> `;
    updatingTitle.innerText = classic.showTheWinner();
    showMeThatScoreBoard();
    displayOutcome();
    setTimeout(function(){
      createClassicGameView()
        }, 1500);
    return
  } )
}

var weaponsD = document.querySelectorAll('.difficultWeapons');
for (var i = 0; i < weaponsD.length; i++) {
  weaponsD[i].addEventListener('click', function () {
    var choice2 = event.target.src
    difficult = new Game (choice2, 'difficult');
    difficult.rallyTheTroops(human, computer);
    difficult.randomCompChoice()
    outcomeView.innerHTML = `<img src="${difficult.compChoice}"><img src="${difficult.humanChoice}"> `;
    updatingTitle.innerText = difficult.showTheWinner();
    showMeThatScoreBoard();
    displayOutcome();
    setTimeout(function(){
      createDifficultGameView()
        }, 1500);
    return
  } )
}
