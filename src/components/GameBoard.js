import React, {Component} from 'react';
import GameBoardItem from './GameBoardItem';


class GameBoard extends Component{
    constructor(){
        super();
        this.state = {
            board: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        };
        this.onKeyDown = (e) =>{
            console.log('asdfadf', e);
        }

    }
    
    spawnNewBlock = (e) =>{
            let x = this.getRandomIndex(), y = this.getRandomIndex();
            let b  = [...this.state.board];
            while(b[x][y] !== 0){  
                x = this.getRandomIndex();
                y = this.getRandomIndex();
            }
            
            console.log('boardCopy? ', b);
            b[x][y] = 2;
            this.setState({board: b});
            console.log('afterChange state? ', this.state.board);
    }

    getRandomIndex = () =>{
        return Math.floor(Math.random() * 4);
    }
    moveBoardUp = () =>{
        let b = [...this.state.board];
        for(let i = 1; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(b[i - 1][j] === 0){
                    let temp = b[i][j];
                    b[i - 1][j] = temp;
                    b[i][j] = 0;
                }
                else if(b[i -1][j] === b[i][j]){
                    let temp = b[i][j];
                    b[i - 1][j] = 2 * temp;
                    b[i][j] = 0
                }
            }
        }
        this.setState({board:b});
        this.spawnNewBlock();
    }
    resetGame = () =>{
        let b = [...this.state.board];
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                b[i][j] = 0;
            } 
        }
        this.setState({board: b});
    }

    onKeyPress = (e) =>{
        console.log(e.key);
        switch(e.key){
            case 'Enter': this.spawnNewBlock(); break;
            case 'ArrowUp': this.moveBoardUp(); break;
            case 'r': this.resetGame(); break;
        } 
        
    }
    render(){
        const {boardState} = this.props;
        return(
            <div tabIndex="-1" onKeyDown={(e) => this.onKeyPress(e)} className="bg">
                <div className="game-board">
                    {/* <h1>Game Board</h1> */}
                    {this.state.board.map((state) => {
                        return state.map((s) =>{
                            if(s > 0){
                                return(<GameBoardItem id="#active-tile" state ={s}/*  key ={index} *//>);
                            }else{
                                return(<GameBoardItem id="empty-tile" state={s} /* key={index} *//>);
                            }
                        })
                    
                    })}
                </div>
            </div>
        );
    }

}

export default GameBoard;