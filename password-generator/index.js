const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

let buttonEl = document.getElementById('button-el');

let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let passwordFirst = '';
let passwordSec = '';
let fullText = '';
let fullTextTwo = '';

function generate() {
	if (passwordOne.value != '') {
		passwordOne.value = '';
	}
	for (let i = 0; i < 15; i++) {
		passwordFirst = characters[Math.floor(Math.random() * characters.length)];
		console.log(passwordOne.value);
		fullText += passwordFirst;
		passwordOne.value += passwordFirst;
		console.log(` The ${i} passwordOne.value = ${passwordOne.value}`);
	}

	if (passwordTwo.value != '') {
		passwordTwo.value = '';
	}

	for (let j = 0; j < 15; j++) {
		passwordSec = characters[Math.floor(Math.random() * characters.length)];
		console.log(passwordTwo.value);
		passwordTwo.value += passwordSec;
	}
}
