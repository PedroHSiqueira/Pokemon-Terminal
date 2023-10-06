import { ataque, rodada } from "./Batalha";
import { oponente, personagem } from "./Principal";

export let danoOponente: number = 0;

function random(minimo: number, maximo: number): number {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

export class estetica {
  public static nome() {
    console.clear()
    console.log(` 
                           Bem vindos ao Pokemon!
             
                         »»——————————　★　——————————««
                         |     Escolha seu Nome      |
                         |       _____________       |
                         »»——————————　★　——————————««
                                                      `);
  }

  public static apresentacao() {
    console.clear()
    console.log(`\n✷ 　 　　 　 ·         　 ⋆ · 　 *         ✷ 　 　　 　 ·
　 　　 *　　 * ⋆ 　 .      Bem vindo ao Centro Pokémon      　 　　 *　　 * ⋆ 　 . 
· 　　 ⋆ 　　　 ˚ ˚ 　　 ✦                     　 ⋆ · 　 *         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦
　 ⋆ · 　 *      * ⋆ 　 .       * ⋆ 　 .             * ⋆ 　 .              　 ⋆ · 　 *
　 *         ✷ 　 　       Prazer em conhece-lo ${personagem.nome}!,　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　Agora você tera 3 Opções de Pokemons Iniciais　 　 　　 *　　 * ⋆ 　 . ✧　 　 · 　 ✧　✵
　　 *　　 * ⋆ 　 . 　Deves escolher com qual irá iniciar a sua jornada!　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✧　 　 · 　 ✧　✵           　 ⋆ · 　 *`);
  }

  public static selecao() {
    console.log(`                           
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
   *****************************************          | |                                            | |\n`);
  }

  public static confirmacao() {
    console.clear()
    console.log(`
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
       |_/____________________________/.\n`);
  }

  public static batalha() {
    console.log(`                           
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Batalha -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.

                                ${personagem.nome} Vs ${oponente.nome}  

                          (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'`);
  }

  public static ataques() {
    estetica.batalha()
    console.log(`
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
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static fortalecimento() {
    console.clear()
    estetica.batalha()
    console.log(`
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
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static vitoria() {
    console.log(`
»»-----------------------------------------------««
Parabéns ${personagem.nome} você venceu a batalha!
»»-----------------------------------------------««\n`);
  }

  public static derrota() {
    console.log(`
»»-----------------------------------------------««
Infelizmente ${personagem.nome} você perdeu a batalha!
»»-----------------------------------------------««\n`);
  }

  public static ataqueUm() {
    console.clear()
    estetica.batalha()
    console.log(`
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
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static ataqueDois() {
    console.clear()
    estetica.batalha()
    console.log(`
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
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);
  }

  public static dano() {

    console.clear()
    estetica.batalha()

    let ataqueOponente = oponente.pokemon.ataques[random(0, 2)];

    console.log(`
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
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`);

    if (ataqueOponente == oponente.pokemon.ataques[0]) {
      danoOponente += random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[1]) {
      personagem.pokemon.vida -= random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[2]) {
      personagem.pokemon.vida -= random(2, 7);
    }
  }
}
