const ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
];

const calculaDistancia = (ruas) => ruas.reduce((acc, rua) => acc += rua.tamanho, 0);

console.log(calculaDistancia(ruas));