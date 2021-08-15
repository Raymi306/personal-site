import './style.css';
import 'assets/mazeletter-metropolis.woff2';

function getRandomAsciiChar() {
	const result = Math.floor(Math.random() * 93) + 33;
	return String.fromCharCode(result);
}
function drawMazeRow(buf, width) {
	for (let i = 0; i < width; i++) {
		buf.push(getRandomAsciiChar());
	}
	buf.push('\n');
}
function drawMazeToBuf(buf, col_len, row_len) {
	for (let i = 0; i < col_len; i++) {
		drawMazeRow(buf, row_len);
	}
}
function blit(buf, elem) {
	elem.innerText = buf.join('')
}
function tweak(buf) {
	const index = Math.floor(Math.random() * (buf.length - 1));
	const peek = buf[index];
	if (peek != '\n') {
		buf[index] = getRandomAsciiChar();
	}
}
function tweak_n_blit(buf, elem) {
	tweak(buf);
	window.requestAnimationFrame(() => blit(buf, elem));
}

const mazeContainer = document.getElementById('maze');
const dpiScale = window.devicePixelRatio;
const w = Math.ceil(window.screen.width * dpiScale);
const h = Math.ceil(window.screen.height * dpiScale);
const r_max = Math.max(w, h);
const glyph_size = Math.ceil(0.0267 * r_max);
const num_glyphs_in_col = Math.ceil(r_max / glyph_size * 2);
const num_glyphs_in_row = Math.ceil(r_max / glyph_size * 2);
mazeContainer.style.fontSize = glyph_size + 'px';

console.log(dpiScale);
console.log(num_glyphs_in_col, num_glyphs_in_row, glyph_size, w, h);

const buf = [];
drawMazeToBuf(buf, num_glyphs_in_col, num_glyphs_in_row);
blit(buf, mazeContainer);
setInterval(() => tweak_n_blit(buf, mazeContainer), 113);
