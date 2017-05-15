/**
 * Created by wesleylopes on 15/05/2017.
 */
const lista = [1,0,5,6,7];

const isListaVazia = (lista) => lista[Symbol.iterator]().next().done;

console.log(isListaVazia(lista));
