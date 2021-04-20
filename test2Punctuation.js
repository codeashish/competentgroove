const correct = (str) => {
	if (!str) return null;
	str = str.trim();

	if (str[0] !== str[0].toUpperCase()) str = str[0].toUpperCase() + str.substring(1);
	if (str[str.length - 1] !== '.') str += '.';

	for (let i = 1; i < str.length - 1; i++) {
		if (str.charCodeAt(i) < 97 && str.charCodeAt(i) > 65) {
			if (str.charAt(i - 1) !== ' ' || str.charAt(i - 2) !== '.') {
				str = str.substring(0, i - 1) + '.' + ' ' + str.substring(i);
			}
		}
		if (str.charAt(i) == '.' && str.charAt(i + 1) === ' ') {
			i += 2;
			if (str.charCodeAt(i) >= 97) {
				str = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
			}
		}
		if (str.charAt(i) == '.' && str.charAt(i + 1) !== ' ') {
			i++;
			str = str.substring(0, i) + ' ' + str[i].toUpperCase() + str.substring(i + 1);
		}
	}

	return str;
};

console.log(correct('John have an apple The sky is blue. they get a coin'));
console.log(correct(''));
