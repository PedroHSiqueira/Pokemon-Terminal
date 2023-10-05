export default class Pokemon {
  nome: string;
  tipo: string;
  vida: number;
  energia: number;
  nivel: number;
  ataques: string[];

  constructor(
    nome: string,
    tipo: string,
    vida: number,
    energia: number,
    nivel: number,
    ataques: string[]
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.vida = vida;
    this.energia = energia;
    this.nivel = nivel;
    this.ataques = ataques;
  }

  Charmander(): void {
    this.nome = "Charmander";
    this.tipo = "Fogo";
    this.ataques = ["Growl", "Ember", "Tackle"];
  }

  Squirtle(): void {
    this.nome = "Squirtle";
    this.tipo = "Água";
    this.ataques = ["Growl", "Bubble", "Tackle"];
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
