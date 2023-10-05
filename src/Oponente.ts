import Pokemon from "./Pokemon";

export default class Oponente{
  private _nome:string = "Indefinido";
  public pokemon: Pokemon = new Pokemon()

  get nome(){
    return this._nome;
  }

  set nome(nome: string){
    this._nome = nome;
  }
}