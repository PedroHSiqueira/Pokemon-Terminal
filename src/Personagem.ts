import Pokemon from "./Pokemon";

export default class Personagem{
  private _nome: string = "";
  public pokemon: Pokemon = new Pokemon()

  get nome(){
    return this._nome;
  }

  set nome(nome: string){
    this._nome = nome;
  }
}
