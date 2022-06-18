import { Character } from "./Character";

export class Scenery {
  constructor(
    public name: string,
    public description: string,
    public lifeBonus: number,
    public attackBonus: number,
    public defenseBonus: number,
    public speedBonus: number,
    public magicBonus: number
  ) {}

  showScenery(): void {
    console.table([this]);
  }

  showSceneryDescription(): void {
    console.log(`${this.name}: ${this.description}`);
  }

  applyBonus(character: Character): void {}
}
