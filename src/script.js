import './style.css';
import 'assets/mazeletter-metropolis.woff2';

function getRandomAsciiChar() {
	const code = Math.floor(Math.random() * 93) + 33;
	const character = String.fromCharCode(code);
	return character;
}
function getRandomAsciiChars(num) {
	const buf = [];
	for (let i = 0; i < num; i++) {
		buf.push(getRandomAsciiChar());
	}
	return buf;
}
function getMazeRow(numCharGuess, screenMax, ctx) {
	const buf = getRandomAsciiChars(numCharGuess);
	while (ctx.measureText(buf.join('')).width < screenMax) {
		buf.push(getRandomAsciiChar());
		numCharGuess += 1;
	}
	buf.push('\n');
	return {
		'sizeHint': numCharGuess,
		'row': buf.join(''),
	};
}
function getMaze(screenMax, ctx) {
	const buf = [];
	let numCharGuess = 0;
	let counter = 0;
	const result = getMazeRow(numCharGuess, screenMax, ctx);
	const row = result.row
	const textMetric = ctx.measureText('a');
	const numRows = screenMax / textMetric.width * 2;
	counter++;
	numCharGuess = result.sizeHint;
	buf.push(row);
	while (counter < numRows) {
		const result = getMazeRow(numCharGuess, screenMax, ctx);
		const row = result.row;
		numCharGuess = result.sizeHint;
		buf.push(row);
		counter++;
	}
	return buf.join('');
}
function setup() {
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
	return {screenMax, ctx, maze, canvas};
}
function draw(context) {
	context.maze.innerText = getMaze(context.screenMax, context.ctx);

}
const context = setup();
draw(context);
document.getElementById('draw-button').addEventListener('click', () => {draw(context)});
