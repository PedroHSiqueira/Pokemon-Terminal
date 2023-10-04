export class Pokemon{
  nome:string = "";
  tipo:string = "";
  vida:number = 50;
  nivel:number = 1;
  ataques:string[] = [] 

  Bulbasaur(): void{
    this.nome = "Bulbasaur"
    this.tipo = "Planta"
    this.ataques = ["Tackle", "Growl", "Razor Leaf"]
  }

  Charmander(): void{
    this.nome = "Charmander"
    this.tipo = "Fogo"
    this.ataques = ["Tackle", "Growl", "Ember"]
  }

  Squirtle(): void{
    this.nome = "Squirtle"
    this.tipo = "Água"
    this.ataques = ["Tackle", "Growl", "Bubble"]
  }
}
