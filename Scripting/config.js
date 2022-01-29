//this file contains constants which govern basic behavior

//constants to control game board dimensions and block size
const Columns = 10;
const Rows = 20;
const BlockSize = 30;

const canvas = document.getElementById('grid');
const ctx = canvas.getContext('2d');

//uses previously declared constants to size canvas. Blocks Scale according to these dimensions.
ctx.canvas.width = Columns * BlockSize;
ctx.canvas.height = Rows * BlockSize;

ctx.scale(BlockSize, BlockSize)