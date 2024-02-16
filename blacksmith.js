let gold = 10;
let ore = 0;
let wood = 0;
let fireStatus = false;
let sword = 0;
let axe = 0;

function help() {
  return `INSTRUCTIONS:
Blacksmith is a simple text-based game.

As a blacksmith, you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.

COMMANDS:

- fire()
- buy(item)
- make(item)
- sell(item)
- inventory()
- help()`;
}

function fire() {
  if (fireStatus) {
    fireStatus = false;
    console.log('Fire is out');
  } else if (wood > 0) {
    fireStatus = true;
    wood--;
    console.log('Fire is on');
  } else {
    console.log('Not enough wood (womp womp)');
  }
}

function buy(item) {
  if (!fireStatus) {
    if (item === "ore") {
      if (gold >= 3) {
        gold -= 3;
        ore++;
        console.log("you bought 1 ore!");
      } else {
        console.log("Not enough gold (time to get your money up)!");
      }
    } else if (item === "wood") {
      if (gold >= 1) {
        gold--;
        wood++;
        console.log("you bought 1 wood woohoo!");
      } else {
        console.log("Not enough gold (time to get your money up)!");
      }
    } else {
      console.log("Invalid item to buy!");
    }
  } else {
    console.log("Can't buy while fire is burning stinky binky!");
  }
}

function make(item) {
  if (fireStatus) {
    if (item === "sword") {
      if (ore >= 2 && wood >= 1) {
        ore -= 2;
        wood--;
        sword++;
        console.log("good job you made 1 sword.");
      } else {
        console.log("Not enough ore/wood!");
      }
    } else if (item === "axe") {
      if (ore >= 1 && wood >= 2) {
        ore--;
        wood -= 2;
        axe++;
        console.log("1 axe made.");
      } else {
        console.log("Not enough ore/wood!");
      }
    } else {
      console.log("Invalid item to make!");
    }
  } else {
    console.log("Can't make while fire is not burning you goof!");
  }
}

function sell(item) {
  if (!fireStatus) {
    if (item === "sword") {
      if (sword > 0) {
        sword--;
        gold += 5;
        console.log("you sold 1 sword.");
      } else {
        console.log("No swords in inventory!");
      }
    } else if (item === "axe") {
      if (axe > 0) {
        axe--;
        gold += 4;
        console.log("1 axe sold.");
      } else {
        console.log("you got no axes!");
      }
    } else {
      console.log("you dont have axes to sell!");
    }
  } else {
    console.log("Can't sell while fire is burning silly billy!");
  }
}

function inventory() {
  console.log(`Inventory:
Swords: ${sword}
Axes: ${axe}
Ore: ${ore}
Wood: ${wood}
Gold: ${gold}`);
}

// Log the help() function
console.log(help());
