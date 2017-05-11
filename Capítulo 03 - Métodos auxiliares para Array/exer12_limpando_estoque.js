const produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
];

const existeProdutosDatados = (produtos, data) => {
  let dataReferencia = new Date();
  if(data) dataReferencia = new Date(data);
  return produtos.some(function(produto) {
    return new Date(produto.dataValidade) < dataReferencia;
  });
};
console.log(existeProdutosDatados(produtos, '03/01/2018'));

