const dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
];

const calculaAreaTotal = (dimensoes) => {
	return dimensoes.reduce((acc, item) => {
		return acc += (item.altura * item.comprimento);
	}, 0);
};

console.log(calculaAreaTotal(dimensoes));