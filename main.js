var classicChoices = ['./assets/rock.png', './assets/post-it.png', './assets/scissors.png'];
var classicSection = document.querySelector('#classicClickable');
var difficultSection = document.querySelector('#difficultClickable');
var classicRockImage = document.querySelector('#rockClassic');
var classicPaperImage = document.querySelector('#paperClassic');
var classicScissorImage = document.querySelector('#scissorClassic');
var difficultRockImage = document.querySelector('#rockDifficult');
var difficultPaperImage = document.querySelector('#paperDifficult');
var difficultScissorsImage = document.querySelector('#scissorsDifficult');
var sectionHomeView = document.querySelector('#homePage');
var difficultView = document.querySelector('#difficultView');
var classicView = document.querySelector('#classicView')
// var placeholder1 = document.querySelector('');
// var placeholder1 = document.querySelector('');
var computerWins = document.querySelector('#compWins');
var humanWins = document.querySelector('#humanWins');

//need to create a resetGameBoard function
//create eventlistener and variable to classic div - add hidden class, remove another
// change text h2 - for winner/choose your fighter
// choose fighter function
//add innerHTML for h6
//add change game button - go home function
//add photos and rules for other game
//keep win state, set time out method/resetGameBoard function
//css hover on clickables

difficultSection.addEventListener('click', createDifficultGameView);
classicSection.addEventListener('click', createClassicGameView);


function createDifficultGameView() {
  classicSection.classList.add('hidden');
  difficultSection.classList.add('hidden');
  homePage.classList.add('hidden');
  difficultView.classList.remove('hidden');
}

function createClassicGameView() {
  classicSection.classList.add('hidden');
  difficultSection.classList.add('hidden');
  homePage.classList.add('hidden');
  classicView.classList.remove('hidden')
}
