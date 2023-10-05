import { oponente, personagem } from "./Principal";
const teclado = require("prompt-sync")();
let option: number;
let ataque: number = 0;
let danoOponente: number = 0;
let rodada: number = 1;

export class Batalha {
  public static Iniciar() {
    console.clear();
    console.log(`
+----------Pokemon!----------+
| Parabéns o seu Inicial Foi |
|         Escolhido!         |
|                            |
| Uma Batalha será iniciada! |
+----------------------------+\n`);

    option = +teclado("Aperte Enter para continuar ... ");

    console.clear();
    console.log(`                           
»»----------　Batalha!　--------««

           ${personagem.nome} Vs ${oponente.nome}  
    
    (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  
    
»»------------------------------««\n`);
  }

  public static atacar() {
    while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
      console.log(`
»»----------　Rodada ${rodada}　-------------------------««
 Escolha seu Movimento:    

 1. ${personagem.pokemon.ataques[0]}   2. ${personagem.pokemon.ataques[1]}        Vida atual: ${personagem.pokemon.vida}

 3. ${personagem.pokemon.ataques[2]}
»»-----------------------------------------------««`);

      option = +teclado("Movimento Escolhido: ");

      switch (option) {
        case 1:
          console.clear();
          if (ataque <= 20) {
            ataque += ramdom(2, 5);
            console.log(`
»»————————————　★　————————————««");
Seu ataque foi Fortalicido!

Seu Bônus de ataque atual é: ${ataque}
»»————————————　★　————————————««\n`);
            break;
          } else {
            console.log("Seu ataque já está no máximo!");
            break;
          }
        case 2:
          console.clear();
          console.log(`
»»——————————————　★　——————————————««");
  Você atacou o ${oponente.nome} com o ${personagem.pokemon.ataques[1]}!
»»——————————————　★　——————————————««`);
          oponente.pokemon.vida -= ramdom(3, 9) + ataque;
          break;
        case 3:
          console.clear();
          console.log(`
»»——————————————　★　——————————————««");
  Você atacou o ${oponente.nome} com o ${personagem.pokemon.ataques[2]}!
»»——————————————　★　——————————————««`);
          oponente.pokemon.vida -= ramdom(2, 5) + ataque;
          break;
      }

      let ataqueOponente = oponente.pokemon.ataques[ramdom(0, 2)];

      if (oponente.pokemon.vida > 0) {
        option = +teclado("Passar o turno para o oponente, clique enter ... ");
        console.log(`
»»-----------------------------------------------««
 ${oponente.nome} Usou o ${ataqueOponente}     Vida do oponente: ${oponente.pokemon.vida}
»»-----------------------------------------------««`);
        option = +teclado("Voltar para o seu turno, clique enter ... ");
      }

      if (ataqueOponente == oponente.pokemon.ataques[0]) {
        danoOponente += ramdom(3, 9);
      }

      if (ataqueOponente == oponente.pokemon.ataques[1]) {
        personagem.pokemon.vida -= ramdom(3, 9);
      }

      if (ataqueOponente == oponente.pokemon.ataques[2]) {
        personagem.pokemon.vida -= ramdom(2, 7);
      }

      rodada += 1;
    }

    function ramdom(minimo: number, maximo: number): number {
      return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    if (oponente.pokemon.vida <= 0) {
      console.log(`
»»----------Fim de Batalha!----------««
  Vitória! ${oponente.nome} Foi Derrotado!
»»-----------------------------------««\n`);
    } else if (personagem.pokemon.vida <= 0) {
      console.log(`
»»----------Fim de Batalha!----------««
  Derrota! ${personagem.nome} Foi Derrotado!
»»-----------------------------------««\n`);
    }
  }
}
