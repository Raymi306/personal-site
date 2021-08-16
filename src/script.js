import './style.css';
import 'assets/mazeletter-metropolis.woff2';

const dpr = window.devicePixelRatio;
const w = Math.ceil(window.screen.width);
const h = Math.ceil(window.screen.height);
const screenMax = Math.max(w, h);
const fontSize = 3;

const maze = document.getElementById('maze');
const canvas = document.createElement('canvas');
canvas.style.width = w;
canvas.style.height = h;
const ctx = canvas.getContext('2d');
ctx.scale(dpr, dpr);
ctx.font = fontSize + 'em maze';

maze.style.fontSize = fontSize + 'em';

function getRandomAsciiChars(num) {
	const buf = [];
	for (let i = 0; i < num; i++) {
		const code = Math.floor(Math.random() * 93) + 33;
		const character = String.fromCharCode(code);
		buf.push(character);
	}
	return buf;
}
function getRandomAsciiChar() {
	const code = Math.floor(Math.random() * 93) + 33;
	const character = String.fromCharCode(code);
	return character;
}
function drawMazeRow(numCharGuess, maxScreenSize) {
	const buf = getRandomAsciiChars(numCharGuess);
	while (true) {
		if (ctx.measureText(buf.join('')).width > maxScreenSize) {
			break;
		}
		buf.push(getRandomAsciiChar());
		numCharGuess += 1;
	}
	buf.push('\n');
	return {
		'sizeHint': numCharGuess,
		'row': buf.join(''),
	};
}
function drawMaze(screenMax) {
	const buf = [];
	let numCharGuess = 0;
	let counter = 0;
	while (true) {
		const result = drawMazeRow(numCharGuess, screenMax);
		const row = result.row;
		numCharGuess = result.sizeHint;
		buf.push(row);
		const textMetric = ctx.measureText(buf.join(''));
		counter++;
		if (screenMax / (Math.abs(textMetric.actualBoundingBoxAscent) + Math.abs(textMetric.actualBoundingBoxDescent)) < counter) break;
	}
	return buf.join('');
}
const mazeString = drawMaze(screenMax);
maze.innerText = mazeString;
