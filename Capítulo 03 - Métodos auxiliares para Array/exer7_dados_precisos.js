const lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
];

const buscar = (propriedade, valor, lista) => {
	return lista.find((item) => item[propriedade] == valor);
};

console.log(buscar('nome', 'Tânia', lista));