const alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];

const aprovados = (array, media) => {
	return array.filter((item) => item.media >= media);
};

console.log(aprovados(alunos, 6.0)); 