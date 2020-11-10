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

            if(!this.boardFull()){
                while(b[x][y] !== 0){  
                    x = this.getRandomIndex();
                    y = this.getRandomIndex();
                }
                console.log('boardCopy? ', b);
                b[x][y] = 2;
                this.setState({board: b});
            }
            console.log('afterChange state? ', this.state.board);
    }

    getRandomIndex = () =>{
        return Math.floor(Math.random() * 4);
    }

    moveBoardUp = () =>{
        let b = [...this.state.board];
       // let columns = [];
        for(let i = 0; i < 4; i++){
            let column = [b[0][i], b[1][i], b[2][i], b[3][i]];
            let newColumn = [];

            //push all non-zero digits to newColumn
            for(let j =0; j < 4; j++){
                if(column[j] !== 0){
                    newColumn.push(column[j]);
                }
            }
            
            //check for doubles to be resolved
            for(let j = 0; j < newColumn.length - 1; j++){
                if(newColumn[j] === newColumn[j + 1]){
                    newColumn[j] *= 2;
                    newColumn[j + 1] = 0;
                }
            }

            //remove any middle zeros, i.e. removing gaps
            for(let j =0; j < 4; j++){
                if(newColumn[j] === 0){
                    newColumn.slice(j, 1);
                }
            }

            //pad newColumn with 0s to the correct length
            while(newColumn.length < 4){
                newColumn.push(0);
            }

            //move our changes to the actual board
            for(let j = 0; j < 4;j++){
                b[j][i] = newColumn[j];
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

    boardFull = () =>{
        let b = [...this.state.board];
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(b[i][j] === 0){
                    return false;
                }
            }
        }
        return true;
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