/**
 * Created by wesleylopes on 15/05/2017.
 */
const lista = [1,2,3,4];

const somaFaturamento = (lista) => {
    "use strict";
    let sum = 0;
    for(let number of lista){
        sum += number;
    }
    return sum;
};

console.log(somaFaturamento(lista));