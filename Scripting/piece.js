class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.color = 'blue';
        this.shape = [
            [2,0,0],
            [2,2,2],
            [0,0,0]
        ];
        this.x = 3;
        this.y = 0;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
    move(p) {
        this.x = p.x;
        this.y = p.y;
        this.shape = p.shape;
    }
}

let board = new Board();
function handleKeyPress(event) {
    event.preventDefault();
    if (moves[event.keyCode]) {
        let p = moves[event.keyCode](board.piece);
        if (event.keyCode === KEY.SPACE) {
            while (board.isValid(p)) {
                board.piece.move(p);
                p = moves[KEY.SPACE](board.piece);
            }
        }
       if(board.isValid(p)){ 
           board.piece.move(p);
       }
    }
}