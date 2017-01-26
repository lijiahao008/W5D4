class Game {
  constructor() {
    this.stacks = [[], [], []];
  }

  Game.prototype.promptMove = function (){
    console.log(this.stacks);
    
  }

}
