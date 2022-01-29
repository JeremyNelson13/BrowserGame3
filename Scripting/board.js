//this file governs the behavior of the game field
class Board {
    constructor(ctx) {
        this.ctx = ctx
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard() {
    return Array.from (
        {length: Rows}, ()=> Array(Columns).fill(0)
     );
    }
}

