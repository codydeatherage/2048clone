export default class Board{
    constructor(){

        this.state = {board: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]}
    }
    startGame = () =>{
        let x = this.getRandomIndex();
        let y = this.getRandomIndex();
        this.state.board[x][y] = 2;
        
    }

    getRandomIndex = () =>{
        return Math.floor(Math.random() * 4);
    }
}
