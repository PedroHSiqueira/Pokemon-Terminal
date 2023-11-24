import Pokemon from "./Pokemon";
import { personagem } from "./Principal";

export class Personagem {
  protected _nome: string = "";
  protected _pokemon: Pokemon = new Pokemon("", "", 0, 0, 0, []);

  public apresentarse(): string {
    console.clear();
    return (`
  Descrição Do seu Personagem:

»»———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————««
      
   ${this._nome} traz consigo uma aura de curiosidade e determinação. Com uma abordagem equilibrada entre estratégia e empatia, ${this._nome} se aproxima de seus Pokémon
   procurando compreender suas personalidades. seu primeiro Pokémon foi enviado pelo seu pai como Presente\n
»»———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————««
  `
    )
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

export class Oponente extends Personagem {
  constructor() {
    super();
  }

  public apresentarse(): string {
    return (
      `
  Descrição Do seu Oponente:
      
»»———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————««

    Nome: ${this._nome}

    ${this._nome} é um treinador de Pokémon que busca se tornar o melhor treinador do mundo. Ele é um treinador de Pokémon do tipo ${this._pokemon.tipo}
    seu primeiro Pokémon foi enviado pelo seu pai como Presente\n
»»———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————««`);
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
