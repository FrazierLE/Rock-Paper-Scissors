class Player {
  constructor(name, token, wins = 0) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage() {
      localStorage.setItem('this.wins', 'wins')
  }
  retrieveWinsFromStorage() {
      var winner = localStorage.getItem('wins')
      this.wins++
  }
  // takeTurn() {
  //
  // }
}
