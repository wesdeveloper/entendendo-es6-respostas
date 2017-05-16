/**
 * Created by wesleylopes on 16/05/2017.
 */
const produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

const possuiProduto = (produtos, produto) => {
    "use strict";
    if(!produtos.get(produto)){
        return false;
    }
    return true;
};

console.log(possuiProduto(produtos, 'Refrigerante'));