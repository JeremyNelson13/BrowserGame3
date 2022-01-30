function addEventListener() {
    document.removeEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleKeyPress);
}

function play() {
    board = new Board(ctx);
    draw();
    addEventListener();
}

function draw() {
    const {width, height} = ctx.canvas;
    ctx.clearRect(0,0, width, height);
    board.piece.draw();
}

