export default class Pokemon{
  nome:string = "";
  tipo:string = "";
  vida:number = 50;
  energia:number = 100;
  nivel:number = 1;
  ataques:string[] = [] 

   Bulbasaur(): void{
    this.nome = "Bulbasaur"
    this.tipo = "Planta"
    this.ataques = ["Growl", "Razor Leaf"]
  }

  Charmander(): void{
    this.nome = "Charmander"
    this.tipo = "Fogo"
    this.ataques = ["Growl", "Ember"]
  }

  Squirtle(): void{
    this.nome = "Squirtle"
    this.tipo = "Água"
    this.ataques = ["Growl", "Bubble"]
  }
}
