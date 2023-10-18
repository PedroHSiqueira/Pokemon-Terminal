import { Batalha } from "./Batalha";
import { Personagem, Oponente } from "./Personagem";
import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
import { Error, Funcoes, estetica } from "./Utilitario";

const teclado = require("prompt-sync")();
export const personagem: Personagem = new Personagem();
export const oponente: Oponente = new Oponente();
export let option: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.log(estetica.nome());
option = teclado(" ☛ Digite ele aqui: ");

while (option.toString().length < 3) {
  console.log(Error.verificarNome());
  option = teclado("☛ Digite ele aqui: ");
}
personagem.nome = option.toString();

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(Funcoes.SelecaoPokemon());

//----------------------------------------------
// Inicio da Batalha

console.log(Batalha.Iniciar());
console.log(Batalha.atacar());

//------------------------------------------------

option = +teclado("Passar o turno para o oponente, clique enter ... ");

while(personagem.pokemon.vida){
  console.clear();
  console.log(estetica.menuOpcoes());

option = +teclado("Opção Selecionada: ");
while (option < 1 || option > 3 || isNaN(option)) {
  console.log(Error.VerificaSelecao());
  option = +teclado("☛ Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    oponente.pokemon.vida = 1;
    console.log(Batalha.Iniciar());
    console.log(Batalha.atacar());
    break;

  case 2:
    console.clear();
    console.log(Funcoes.SelecaoPokemon());
    break;

  case 3:
    console.clear();
    break;
}
}
