const reverse = (str) => {
	if (!str) return null;
	str = str.split(' ');
	res = str.map((ele) => {
		return ele.length > 5 ? ele.split('').reverse().join('') : ele;
	});
	return res.join(' ');
};

console.log(reverse('Hey fellow warriors'));
console.log(reverse('This is another test'));
