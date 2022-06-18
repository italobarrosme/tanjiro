export class Dice {
  constructor(public numberOfSides: number) {}

  roll(): number {
    return Math.floor(Math.random() * this.numberOfSides) + 1;
  }
}
