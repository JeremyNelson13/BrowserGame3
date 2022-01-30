function play() {
    board = new Board(ctx);
    draw();
}

function draw() {
    const {width, height} = ctx.canvas;
    ctx.clearRect(0,0, width, height);
    board.piece.draw();
}