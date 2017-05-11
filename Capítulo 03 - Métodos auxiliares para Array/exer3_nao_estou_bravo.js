const arr = ['oi', 'tudo', 'bem?'];

const caps = (arr) => {
	return arr.map(item => item.toUpperCase());
}

console.log(caps(arr));