const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

let board = null;
//calculate canvas size using above parameters
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
//scales blocks to canvas
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);