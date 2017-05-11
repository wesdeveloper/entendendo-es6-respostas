const arr = [1,2,3,3,4,5];

const removeDuplicatas = (arr) => {
	return arr.reduce((acc, value) => {
		let achou = acc.find((atual) => value === atual);

		if(!achou){
			acc.push(value)
		}

		return acc;
	}, []);
};

console.log(removeDuplicatas(arr));