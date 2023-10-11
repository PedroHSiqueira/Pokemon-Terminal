import Pokemon from "./Pokemon";
export class Personagem {
  protected _nome: string = "";
  public pokemon: Pokemon = new Pokemon("", "", 0, 0, 0, []);

  public get nome() {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }
}

export class Oponente extends Personagem {
  constructor() {
    super()
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }
}
