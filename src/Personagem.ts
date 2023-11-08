import Pokemon from "./Pokemon";

export class Personagem {
  protected _nome: string = "";
  protected _pokemon: Pokemon = new Pokemon("", "", 0, 0, 0, []);

  //Getter
  public get nome() {
    return this._nome;
  }

  public get pokemon(): Pokemon {
    return this._pokemon;
  }

  //Setter
  public set nome(nome: string) {
    this._nome = nome;
  }

  public set pokemon(pokemon: Pokemon) {
    this._pokemon = pokemon;
  }
}

export class Oponente extends Personagem {
  constructor() {
    super();
  }

  //Getter
  public get nome() {
    return this._nome;
  }

  public get pokemon(): Pokemon {
    return this._pokemon;
  }

  //Setter
  public set nome(nome: string) {
    this._nome = nome;
  }

  public set pokemon(pokemon: Pokemon) {
    this._pokemon = pokemon;
  }
}
