function addEventListener() {
    document.removeEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleKeyPress);
}

function play() {
    board = new Board(ctx);
    addEventListener();
    // board.reset();
    // let piece = new Piece(ctx);
    // board.piece = piece;
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
    time.start = performance.now();
    animate();
}

function draw() {
    const {width, height} = ctx.canvas;
    ctx.clearRect(0,0, width, height);
    board.piece.draw();
}

let time = { start: 0, elapsed: 0, level: 1000};

function drop() {
    let p = moves[KEY.DOWN](board.piece);
    if (board.isValid(p)) {
        board.piece.move(p);
    }
}
function animate(now = 0) {
    time.elapsed = now - time.start;
    if (time.elapsed > time.level) {
        time.start = now;

        drop();
    }
    draw();
    requestId = requestAnimationFrame(animate);
}