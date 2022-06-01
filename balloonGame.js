class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

//function balloonAttack:
//takes 2 player instances
//calculates balloons left after 10 mins
//returns name of winner,
//if tie, return "Tie"


function balloonAttack(p1, p2){
    p1.status();
    p2.status();
    function after10Mins(p){
        return p.balloonCount - p.hitsPerMinute * 10;
    }
    console.log(after10Mins(p1));
    console.log(after10Mins(p2));
    if (after10Mins(p1) > after10Mins(p2)){
        return p2.name;
    } else if (after10Mins(p1) < after10Mins(p2)){
        return p1.name;
    } else if (after10Mins(p1) === after10Mins(p2)){
        return "Tie"
    } else {
        throw Error("something went wrong");
    }
}

console.log(balloonAttack(p1, p2));
