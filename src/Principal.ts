import Personagem from "./Personagem";
import Oponente from "./Oponente";
const teclado = require("prompt-sync")();

const personagem: Personagem = new Personagem();
const oponente: Oponente = new Oponente();
let option: number;

function ramdom(minimo: number, maximo: number): number {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.clear();
console.log(" Bem vindos ao Pokemon!");
console.log(`\n+----------------------+`);
console.log("|   Escolha seu Nome   |");
console.log("|    _____________     |");
console.log("+----------------------+\n");
option = teclado("Escolha seu Nome: ");

while (option.toString().length < 3) {
  console.log("Nome Inválido");
  option = teclado("Escolha seu Nome: ");
}
console.clear();
personagem.nome = option.toString();

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(`\nPrazer em conhece-lo ${personagem.nome}!, Agora você tera 3 Opções de Pokemons Iniciais`);
console.log("Deves escolher com qual irá iniciar a sua jornada!");

console.log(`\n+----------Pokemon!----------+`);
console.log("| 1.Charmander (Fogo)        |");
console.log("|                            |");
console.log("| 2.Squirtle (Água)          |");
console.log("|                            |");
console.log("| 3.Bulbasaur (Planta)       |");
console.log("+----------------------------+\n");

option = +teclado("Numero Selecionado: ");

while (option < 1 || option > 3) {
  console.log("Opção Inválida, Por favor escolha uma das 3 opções!");
  option = +teclado("Escolha seu Inicial: ");
}

switch (option) {
  case 1:
    personagem.pokemon.Charmander();
    oponente.pokemon.Bulbasaur();
    oponente.nome = "Gary";
    break;

  case 2:
    personagem.pokemon.Squirtle();
    oponente.pokemon.Charmander();
    oponente.nome = "Jesse";
    break;

  case 3:
    personagem.pokemon.Bulbasaur();
    oponente.pokemon.Squirtle();
    oponente.nome = "James";
    break;
}

//----------------------------------------------
// Inicio da Batalha

console.clear();
console.log(`\n+----------Pokemon!----------+`);
console.log(`| Parabéns o seu Inicial Foi |`);
console.log("|         Escolhido!         |");
console.log("|                            |");
console.log("| Uma Batalha será iniciada! |");
console.log("+----------------------------+\n");

option = +teclado("Aperte Enter para continuar ... ");

console.clear();
console.log(`\n+----------Batalha!----------+`);
console.log(`       ${personagem.nome} Vs ${oponente.nome}  `);
console.log(`  (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  `);
console.log("+----------------------------+\n");

let rodada: number = 1;
let ataque: number = 0;
let danoOponente: number = 0;

while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
  console.log(`\n+----------Rodada ${rodada}-----------------------------+`);
  console.log(` Escolha seu Movimento:        \n`);
  console.log(` 1. ${personagem.pokemon.ataques[0]}   2. ${personagem.pokemon.ataques[1]}        Vida atual: ${personagem.pokemon.vida}  `);
  console.log(`+-----------------------------------------------+\n`);

  option = +teclado("Numero Escolhido: ");

  switch (option) {
    case 1:
      console.clear();
      if (ataque <= 50) {
        ataque += ramdom(3, 9);
        console.log(`+------------------------------------------------------+`);
        console.log(`Seu ataque foi Fortalicido!`)
        console.log(`Seu Bônus de ataque atual é: ${ataque}`)
        console.log(`+------------------------------------------------------+`);
        break;
      }else{
        console.log("Seu ataque já está no máximo!");
        break;
      }
    case 2:
      console.clear();
      console.log(`+-----------------------------------------------+`);
      console.log(`Você atacou o ${oponente.nome} com o ${personagem.pokemon.ataques[1]}!`);
      console.log(`+-----------------------------------------------+`);
      oponente.pokemon.vida -= ramdom(3, 9) + ataque;
      if(oponente.pokemon.vida <= 0){
        console.log(`\n+----------Fim de Batalha!----------+\n`);
        console.log(`Vitória! ${oponente.nome} Foi Derrotado!\n`);
        console.log(`+-----------------------------------+\n`);
      }
      break;
  }

  
  let ataqueOponente = oponente.pokemon.ataques[ramdom(0, 1)];
  
  if(oponente.pokemon.vida > 0){
    option = +teclado("Passar o turno para o oponente, clique enter ... ")
    console.log(`\n+-----------------------------------------------+`);
    console.log(` ${oponente.nome} Usou o ${ataqueOponente}     Vida do oponente: ${oponente.pokemon.vida}`);
    console.log(`+-----------------------------------------------+`);
    option = +teclado("Voltar para o seu turno, clique enter ...");
  }


  if(ataqueOponente == oponente.pokemon.ataques[0]){
    danoOponente += ramdom(3, 9);
  }

  if(ataqueOponente == oponente.pokemon.ataques[1]){
    personagem.pokemon.vida -= ramdom(3, 9);
  }

  rodada += 1;
}
