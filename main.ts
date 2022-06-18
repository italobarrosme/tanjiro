import prompt from "prompt-sync";
import { Character } from "./domain/entities/Character";
import { Warrior } from "./domain/entities/Classes/Warrior";
import { Wizard } from "./domain/entities/Classes/Wizard";
import { Rogue } from "./domain/entities/Classes/Rogue";
import { Priest } from "./domain/entities/Classes/Priest";
import { Paladin } from "./domain/entities/Classes/Paladin";
import { Hunter } from "./domain/entities/Classes/Hunter";

import { Dice } from "./domain/entities/Dice";
import { Scenery } from "./domain/entities/Scenery";
import { Battle } from "./domain/entities/Battle";

let keyboard = prompt();
let option: number = 0;
let characters: Character[] = [];
let dice = new Dice(20);

let scenery: Scenery = new Scenery(
  "Forest",
  "A beautiful forest",
  10,
  0,
  0,
  0,
  0
);

while (option !== 9) {
  console.log("xxxxxxxxxxxxxxxxxx MENU xxxxxxxxxxxxxxxxxx");
  console.log("1. Create a new character");
  console.log("2. View character stats");
  console.log("3. Start battle");
  console.log("4. Clear characters");
  console.log("9. Exit");
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

  option = Number(keyboard("Enter your choice: "));

  switch (option) {
    case 1:
      let newCharacter: Character;
      let name = keyboard("Enter your name: ");
      let energy = dice.roll();
      let life = dice.roll();
      let attack = dice.roll();
      let defense = dice.roll();
      let speed = dice.roll();
      let magic = dice.roll();

      console.log("1. Warrior");
      console.log("2. Wizard");
      console.log("3. Rogue");
      console.log("4. Priest");
      console.log("5. Paladin");
      console.log("6. Hunter");

      let grade = String(keyboard("Enter your class: "));

      switch (grade) {
        case "1":
          newCharacter = new Warrior(
            name,
            energy,
            life,
            attack,
            magic,
            defense,
            speed
          );
          characters.push(newCharacter);
          break;
        case "2":
          newCharacter = new Wizard(
            name,
            energy,
            life,
            attack,
            magic,
            defense,
            speed
          );
          characters.push(newCharacter);
          break;
        case "3":
          newCharacter = new Rogue(
            name,
            energy,
            life,
            attack,
            magic,
            defense,
            speed
          );
          characters.push(newCharacter);
          break;
        case "4":
          newCharacter = new Priest(
            name,
            energy,
            life,
            attack,
            magic,
            defense,
            speed
          );
          characters.push(newCharacter);
          break;
        case "5":
          newCharacter = new Paladin(
            name,
            energy,
            life,
            attack,
            magic,
            defense,
            speed
          );
          characters.push(newCharacter);
          break;
        case "6":
          newCharacter = new Hunter(
            name,
            energy,
            life,
            attack,
            magic,
            defense,
            speed
          );
          characters.push(newCharacter);
          break;
        default:
          console.log("Invalid class");
          break;
      }

      console.log(`${name} has been created!`);
      console.table(characters);
      break;
    case 2:
      characters.forEach((character) => {
        character.showStatus();
      });
      break;

    case 3:
      let battle = new Battle(characters[0], characters[1], scenery);
      battle.startBattle();

      break;
    case 4:
      characters = [];
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;

    default:
      console.log("Close game");
      option = 9;
      break;
  }
}
