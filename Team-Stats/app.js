const team = {
    _players: [
      {firstName: "John", lastName: "Smith", age: 25},
      {firstName: "Jones", lastName: "Williams", age: 19},
      {firstName: "Chris", lastName: "Wilson", age: 19}
    ],
    _games: [
      {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
      {opponents: "Wolves", teamPoints: 23, opponentPoints: 20},
      {opponent: "Lions", teamPoints : 15, opponentPoints: 18}
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    
    addGame(oppName, points, oppPoints) {
      const game = {
        opponent: oppName,
        points: points,
        opponentPoints: oppPoints
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  
  console.log(team.players);
  
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Wolves", 56, 90);
  team.addGame("Tigers", 30, 47);
  
  console.log(team.games);
