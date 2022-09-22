class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }
  saveWinsToStorage() {
      var storeMe = this.wins;
      var stringified = JSON.stringify(storeMe);
      localStorage.setItem("this.wins", stringified)
  }
  retrieveWinsFromStorage() {
      var retrievedWinner = localStorage.getItem("this.wins")
      var parsedWinner = JSON.parse(retrievedWinner)
  }
  // takeTurn() {
  //
  // }
}
