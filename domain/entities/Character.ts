export class Character {
  constructor(
    protected _name: string,
    protected _energy: number,
    protected _life: number,
    protected _attack: number,
    protected _magic: number,
    protected _defense: number,
    protected _speed: number
  ) {}

  public showStatus(): void {
    console.table([this]);
  }

  public attackAction(target: Character): void {
    if (target._defense > this._attack) {
      target._life = target._life;
      console.log("================== BATTLE ACTIONS ==================");
      console.log(`Miss attack!`);
      console.log("====================================================");
    } else {
      console.log("================== BATTLE ACTIONS ==================");
      console.log(`you attacked ${target._name}!`);
      console.log("====================================================");
      target._life -= this._attack - target._defense;
    }
  }

  public defenseAction(target: Character): void {
    if (target._attack < this._defense) {
      this._life = this._life;

      console.log("================== BATTLE ACTIONS ==================");
      console.log(`You defended!`);
      console.log("====================================================");
    } else {
      console.log("================== BATTLE ACTIONS ==================");
      console.log(`${target._name} attacked you!`);
      console.log("====================================================");
      this._life -= target._attack - this._defense;
    }
  }

  public get name(): string {
    return this._name;
  }

  public get energy(): number {
    return this._energy;
  }

  public get life(): number {
    return this._life;
  }

  public get attack(): number {
    return this._attack;
  }

  public get magic(): number {
    return this._magic;
  }

  public get defense(): number {
    return this._defense;
  }

  public get speed(): number {
    return this._speed;
  }

  public set magic(magic: number) {
    this.magic = magic;
  }

  public set life(life: number) {
    this._life = life;
  }

  public set attack(attack: number) {
    this._attack = attack;
  }

  public set defense(defense: number) {
    this._defense = defense;
  }

  public set speed(speed: number) {
    this._speed = speed;
  }

  public set energy(energy: number) {
    this._energy = energy;
  }
}
