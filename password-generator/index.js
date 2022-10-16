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
		passwordOne.value += passwordFirst;
	}

	if (passwordTwo.value != '') {
		passwordTwo.value = '';
	}

	for (let j = 0; j < 15; j++) {
		passwordSec = characters[Math.floor(Math.random() * characters.length)];
		passwordTwo.value += passwordSec;
	}
}

let passwordA = document.getElementById('passwordA');
let passwordB = document.getElementById('passwordB');
let passwordAA = '';
let passwordBB = '';

function generateWhite() {
	if (passwordA.value != '') {
		passwordA.value = '';
	}
	for (let i = 0; i < 15; i++) {
		passwordAA = characters[Math.floor(Math.random() * characters.length)];
		passwordA.value += passwordAA;
	}

	if (passwordB.value != '') {
		passwordB.value = '';
	}

	for (let j = 0; j < 15; j++) {
		passwordBB = characters[Math.floor(Math.random() * characters.length)];
		passwordB.value += passwordBB;
	}
}
