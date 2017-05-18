/**
 * Created by wesleylopes on 18/05/2017.
 */
const jogador = {};
jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome  + '_' +  jogador.idade); // saída: Rodrigo_33

//Funciona porque const no caso é do tipo objeto
//e o que se alterou o atributo do objeto e não o objeto em si