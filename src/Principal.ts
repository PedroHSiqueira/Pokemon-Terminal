import { Batalha } from "./Batalha";
import { Personagem, Oponente } from "./Personagem";
import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
import { Error, estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export const personagem: Personagem = new Personagem();
export const oponente: Oponente = new Oponente();
let option: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.log(estetica.nome())
option = teclado(" ☛ Digite ele aqui: ");

while (option.toString().length < 3) {
  console.log(Error.verificarNome())
  option = teclado("☛ Digite ele aqui: ");
}
personagem.nome = option.toString();

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(estetica.apresentacao());
console.log(estetica.selecao());

option = +teclado("Opção Selecionada: ");

while (option < 1 || option > 3 || isNaN(option)) {
  console.log(Error.VerificaSelecao());
  option = +teclado("☛ Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    personagem.pokemon = new Charmander();
    oponente.pokemon = new Bulbasaur();
    oponente.nome = "Gary";
    break;

  case 2:
    personagem.pokemon = new Squirtle();
    oponente.pokemon = new Charmander();
    oponente.nome = "Jesse";
    break;

  case 3:
    personagem.pokemon = new Bulbasaur();
    oponente.pokemon = new Squirtle();
    oponente.nome = "James";
    break;
}

//----------------------------------------------
// Inicio da Batalha

console.log(Batalha.Iniciar());
console.log(Batalha.atacar());
