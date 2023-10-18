import { ataque, rodada } from "./Batalha";
import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
import { oponente, personagem } from "./Principal";

const teclado = require("prompt-sync")();

let danoOponente: number = 0;

export class Funcionalidades {
  public static random(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
}

export class Error {
  public static verificarNome(): string {
    return `
»»———————————————————————————————————　★　———————————————————————————————————««\n
☛ Erro ...Nome Inválido, Por favor escolha um nome com mais de 3 caracteres!\n
»»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static VerificaSelecao(): string {
    return `
»»———————————————————————————————————　★　———————————————————————————————————««\n
☛ Erro ...Nome Inválido, Por favor escolha um nome com mais de 3 caracteres!\n
»»———————————————————————————————————————————————————————————————————————————««\n`;
  }
}

export class estetica {
  public static nome(): string {
    console.clear();
    return ` 
                         Bem vindos ao Pokemon Terminal!
                           
»»———————————————————————————————————　★　———————————————————————————————————««
                           
                                 Escolha seu Nome      
                                   _____________       
                           
»»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static apresentacao(): string {
    return `\n✷ 　 　　 　 ·         　 ⋆ · 　 *         ✷ 　 　　 　 ·
　 　　 *　　 * ⋆ 　 .      Bem vindo ao Centro Pokémon      　 　　 *　　 * ⋆ 　 . 
· 　　 ⋆ 　　　 ˚ ˚ 　　 ✦                     　 ⋆ · 　 *         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦
　 ⋆ · 　 *      * ⋆ 　 .       * ⋆ 　 .             * ⋆ 　 .              　 ⋆ · 　 *
　 *         ✷ 　 　       Prazer em conhece-lo ${personagem.nome}!,　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　Agora você tera 3 Opções de Pokemons Iniciais　 　 　　 *　　 * ⋆ 　 . ✧　 　 · 　 ✧　✵
　　 *　　 * ⋆ 　 . 　Deves escolher com qual irá iniciar a sua jornada!　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✧　 　 · 　 ✧　✵           　 ⋆ · 　 *`;
  }

  public static selecao(): string {
    return `                           
          ====
          !!!!
        ============================
      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      ||      _____          _____    ||            __| |____________________________________________| |__
      ||      | | |          | | |    ||           (__   _____________Escolha um numero!_____________   __)
      ||      |-|-|          |-|-|    ||              | |                                            | |
      ||      #####          #####    ||              | |             1 - Charmander                 | |
      ||                              ||              | |                                            | |
      ||      _____   ____   _____    ||              | |             2 - Squirtle                   | |
      ||      | | |   @@@@   | | |    ||              | |                                            | |
      ||      |-|-|   @@@@   |-|-|    ||              | |             3 - Bulbassaur                 | |
      ||      #####   @@*@   #####    ||            __| |____________________________________________| |__
      ||              @@@@            ||           (__   ____________________________________________   __)
    ******************____****************            | |                                            | |
   *****************************************          | |                                            | |\n`;
  }

  public static confirmacao(): string {
    console.clear();
    return `
       ______________________________
       |                            |.
       |         Parabéns!          |.
       |____________________________|.
       |                            |.
       |      o seu Inicial Foi     |.
       |         Selecionado        |.
       |                            |.
       |                            |.
       | Uma Batalha será iniciada! |.
       |                            |.
       |           Pronto?          |.
       |   _________________________|___
       |  /                            /.
       |_/____________________________/.\n`;
  }

  public static batalha(): string {
    return `                           
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Batalha -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.

                                ${personagem.nome} Vs ${oponente.nome}  

                          (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'`;
  }

  public static ataques(): string {
    console.log(estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50                                            
    |                                                                       |
    |-----------------------------------------------------------------------|
    !                                                                       !
    :                                                                       :
    :                                                                       :
    .                                                                       .
    .                                                                       .
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static fortalecimento(): string {
    console.clear();
    console.log(estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
    |                      Seu ataque foi Fortalicido!                      |
    :                                                                       :
                          Seu Bônus de ataque atual é: ${ataque}                    
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static ataqueUm(): string {
    console.clear();
    console.log(estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
                            ${personagem.pokemon.nome} atacou o ${oponente.pokemon.nome}                          
    :                                                                       :
                                    com o ${personagem.pokemon.ataques[1]}!                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static ataqueDois(): string {
    console.clear();
    console.log(estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
                        ${personagem.pokemon.nome} atacou o ${oponente.pokemon.nome}                          
    :                                                                       :
                                com o Tackle!                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:                 
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static dano(): string {
    console.clear();
    console.log(estetica.batalha());

    let ataqueOponente = oponente.pokemon.ataques[Funcionalidades.random(0, 2)];

    if (ataqueOponente == oponente.pokemon.ataques[0]) {
      danoOponente += Funcionalidades.random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[1]) {
      personagem.pokemon.vida -= Funcionalidades.random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[2]) {
      personagem.pokemon.vida -= Funcionalidades.random(2, 7);
    }

    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 50    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
    :                                                                       :
                             ${oponente.pokemon.nome} Usou o ${ataqueOponente}                          
                                                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:              
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 50                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static vitoria(): string {
    return `
    »»———————————————————————————————————　★　———————————————————————————————————««
    ☛ Parabéns ${personagem.nome}, você venceu a batalha!
    »»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static derrota(): string {
    return `
    »»———————————————————————————————————　★　———————————————————————————————————««
    ☛ Infelizmente ${personagem.nome}, você perdeu a batalha!
    »»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static menuOpcoes(): string {
    return `\n\n
     ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ 
     ╬═╬═        
     ╬═╬═   1 - Reiniciar a Batalha     
     ╬═╬═        
     ╬═╬═   2 - Trocar de Pokemon
     ╬═╬═                 
     ╬═╬═   3 - Finalizar Jogo              
     ╬═╬═                 
     ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ \n`;
  }

  public static finalizacao(): string {
    return (`\n
    ___  _______  _______  _______    _______  ___   __    _  _______  ___      ___   _______  _______  ______   _______ 
    |   ||       ||       ||       |  |       ||   | |  |  | ||   _   ||   |    |   | |       ||   _   ||      | |       |
    |   ||   _   ||    ___||   _   |  |    ___||   | |   |_| ||  |_|  ||   |    |   | |____   ||  |_|  ||  _    ||   _   |
    |   ||  | |  ||   | __ |  | |  |  |   |___ |   | |       ||       ||   |    |   |  ____|  ||       || | |   ||  | |  |
 ___|   ||  |_|  ||   ||  ||  |_|  |  |    ___||   | |  _    ||       ||   |___ |   | | ______||       || |_|   ||  |_|  |
|       ||       ||   |_| ||       |  |   |    |   | | | |   ||   _   ||       ||   | | |_____ |   _   ||       ||       |
|_______||_______||_______||_______|  |___|    |___| |_|  |__||__| |__||_______||___| |_______||__| |__||______| |_______|\n`)
  }
}

let option: number;

export class Funcoes {
  public static SelecaoPokemon() {
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
  }
}
