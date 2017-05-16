/**
 * Created by wesleylopes on 16/05/2017.
 */
const caixa = {
    'Arroz': 7.10,
    'Feijao': 2.30,
    'Macarrao': 4.70,
    'Refrigerante': 3.00
};

const fretes = {
    'Sao Paulo': 10.10,
    'Rio de Janeiro': 12.30,
    'Brasilia': 14.70,
    'Outros': 13.00
};

const calculaValorTotalDaCompra = (produtos, cidade, caixa, fretes) => {
    "use strict";
    let total = 0;

    return produtos.map((item) => total += (caixa[item] + fretes[cidade]));

};

console.log(calculaValorTotalDaCompra(['Arroz'], 'Sao Paulo', caixa, fretes));