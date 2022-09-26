var classicChoices;
var difficultChoices;
var selectedGameType;
var human = new Player ('Human', '👤');
var computer = new Player ('Computer', '💻');

var rock = document.querySelector('#rockClassic').src;
var paper = document.querySelector('#paperClassic').src;
var scissors = document.querySelector('#scissorsClassic').src;
var cowboy = document.querySelector('#cowboy').src;
var gun = document.querySelector('#gun').src;
var classicSection = document.querySelector('#classicClickable');
var difficultSection = document.querySelector('#difficultClickable');
var sectionHomeView = document.querySelector('#homePage');
var difficultView = document.querySelector('#difficultView');
var classicView = document.querySelector('#classicView');
var outcomeView = document.querySelector('#outcomeView');
var difficultRockImage = document.querySelector('#rockDifficult');
var difficultPaperImage = document.querySelector('#paperDifficult');
var difficultScissorsImage = document.querySelector('#scissorsDifficult');
var computerWins = document.querySelector('#compWins');
var humanWins = document.querySelector('#humanWins');
var button = document.querySelector('#changeGame');
var updatingTitle = document.querySelector('#liveUpdatesTitle');

difficultSection.addEventListener('click', createDifficultGameView);
classicSection.addEventListener('click', createClassicGameView);
button.addEventListener('click', changeGame);
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
  classicChoices = [rock, paper, scissors];
  selectedGameType = 'classic';
  return
}

function pickDifficult() {
  difficultChoices = [rock, paper, scissors, cowboy, gun];
  selectedGameType = 'difficult';
  return
}

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

function displayTheChosenOnes(game) {
  game.rallyTheTroops(human, computer);
  game.randomCompChoice()
  outcomeView.innerHTML = `<img src="${game.compChoice}"><img src="${game.humanChoice}"> `;
  updatingTitle.innerText = game.showTheWinner();
}

function runItBack() {
  if(selectedGameType === 'classic') {displayOutcome();
  setTimeout(function(){
      createClassicGameView()
    }, 1500);}
  else {displayOutcome();
  setTimeout(function(){
      createDifficultGameView()
    }, 1500);}
}

var weapons = document.querySelectorAll('.weapons');
for (var i = 0; i < weapons.length; i++) {
  weapons[i].addEventListener('click', function (event) {
    var choice = event.target.src;
    var game = new Game (choice, selectedGameType);
    runItBack()
    displayTheChosenOnes(game);
    showMeThatScoreBoard();
    displayOutcome();
  } );
}
