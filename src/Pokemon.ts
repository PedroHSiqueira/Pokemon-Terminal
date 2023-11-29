export default class Pokemon {
  private _nome: string;
  private _tipo: string;
  private _vida: number;
  private _energia: number;
  private _nivel: number;
  private _ataques: string[];

  constructor(
    nome: string,
    tipo: string,
    vida: number,
    energia: number,
    nivel: number,
    ataques: string[]
  ) {
    this._nome = nome;
    this._tipo = tipo;
    this._vida = vida;
    this._energia = energia;
    this._nivel = nivel;
    this._ataques = ataques;
  }

  //Getter
  public get nome(): string {
    return this._nome;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public get vida(): number {
    return this._vida;
  }

  public get ataques(): string[] {
    return this._ataques;
  }

  public get nivel(): number {
    return this._nivel;
  }

  //Setter
  public set vida(vida: number) {
    this._vida = vida;
  }

  public set nivel(nivel: number) {
    this._nivel = nivel;
  }
}

export class Bulbasaur extends Pokemon {
  constructor() {
    super("Bulbasaur", "Planta", 50, 100, 1, ["Growl", "Vine Whip", "Tackle"]);
  }
}

export class Charmander extends Pokemon {
  constructor() {
    super("Charmander", "Fogo", 50, 100, 1, ["Growl", "Ember", "Tackle"]);
  }
}

export class Squirtle extends Pokemon {
  constructor() {
    super("Squirtle", "Água", 50, 100, 1, ["Growl", "Bubble", "Tackle"]);
  }
}
