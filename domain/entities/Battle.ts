import prompt from "prompt-sync";
let keyboard = prompt();
import { Character } from "./Character";
import { Scenery } from "./Scenery";

export class Battle {
  constructor(
    public character: Character,
    public enemy: Character,
    public scenery: Scenery
  ) {}

  startBattle(): void {
    console.log("================== SCENERY ====================");
    this.scenery.showScenery();
    this.scenery.showSceneryDescription();
    this.scenery.applyBonus(this.character);

    console.log("================== CHARACTER ==================");
    this.character.showStatus();

    console.log("================== ENEMY ======================");
    this.enemy.showStatus();

    let option: number = 0;

    while (option !== 9) {
      console.log("_________________ BATTLE MENU _________________");
      console.log("1. Attack");
      console.log("2. Defend");
      console.log("9. Exit");

      option = Number(keyboard("Enter your choice: "));

      switch (option) {
        case 1:
          this.character.attackAction(this.enemy);
          this.character.showStatus();
          this.enemy.showStatus();

          if (this.enemy.life <= 0) {
            console.log("================== BATTLE ACTIONS ==================");
            console.log("You win!");
            console.log("====================================================");
            option = 9;
          } else if (this.character.life <= 0) {
            console.log("================== BATTLE ACTIONS ==================");
            console.log("You lose!");
            console.log("====================================================");
            option = 9;
          }

          break;
        case 2:
          this.character.defenseAction(this.enemy);
          this.character.showStatus();
          this.enemy.showStatus();

          if (this.enemy.life <= 0) {
            console.log("================== BATTLE ACTIONS ==================");
            console.log("You win!");
            console.log("====================================================");
            option = 9;
          } else if (this.character.life <= 0) {
            console.log("================== BATTLE ACTIONS ==================");
            console.log("You lose!");
            console.log("====================================================");
            option = 9;
          }

          break;
        case 9:
          console.log("Go back menu!");
          break;
        default:
          console.log("Invalid option");
          break;
      }
    }
  }
}
