const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');


//calculate canvas size using above parameters
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
//scales blocks to canvas
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}
Object.freeze(KEY);
moves = {
    [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1}),
    [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1})
};