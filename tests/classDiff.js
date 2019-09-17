class Human {
  constructor(name) {
    this.name = name;
  }
}

class Warrior extends Human {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    console.log("Warrior is comming");
  }
  Attack() {
    console.log(`${this.name} using ${this.weapon}`);
  }
}

function Elf(name) {
  this.name = name;
}

function Rogue(name, weapon) {
  Elf.call(this, name);
  this.weapon = weapon;
  console.log("Rogue is comming");
}

Rogue.prototype.Attack = function() {
  console.log(`${this.name} using ${this.weapon}`);
};

const character = new Warrior("John", "Axe");
character.Attack();

const character2 = new Rogue("Jason", "Arrow");
character2.Attack();
