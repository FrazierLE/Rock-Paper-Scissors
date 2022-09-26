var classicChoices;
var difficultChoices;
var selectedGameType;

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
