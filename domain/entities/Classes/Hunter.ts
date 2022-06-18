import { Character } from "../Character";

export class Hunter extends Character {
  readonly _nameClass: string = "Hunter";
  readonly _energyBonus: number = 2;
  readonly _lifeBonus: number = 5;
  readonly _attackBonus: number = 10;
  readonly _magicBonus: number = 2;
  readonly _defenseBonus: number = 2;
  readonly _speedBonus: number = 10;

  constructor(
    name: string,
    energy: number,
    life: number,
    attack: number,
    magic: number,
    defense: number,
    speed: number
  ) {
    super(name, energy, life, attack, magic, defense, speed);

    this._energy += this._energyBonus;
    this._life += this._lifeBonus;
    this._attack += this._attackBonus;
    this._magic += this._magicBonus;
    this._defense += this._defenseBonus;
    this._speed += this._speedBonus;
  }
}
