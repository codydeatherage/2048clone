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
    }

    getRandomIndex = () =>{
        return Math.floor(Math.random() * 4);
    }

    moveTiles = (direction) => {
        let b = [...this.state.board];
        let section = [];
        for(let i = 0; i < 4; i++){
            switch(direction){
                case 'down':
                case 'up' : section = [b[0][i], b[1][i], b[2][i], b[3][i]]; break;
                case 'right': 
                case 'left': section = [b[i][0], b[i][1], b[i][2], b[i][3]]; break;
            }
            let newSection = [];

            //push all non-zero digits to newColumn
            for(let j = 0; j < 4; j++){
                if(section[j] !== 0){
                    newSection.push(section[j]);
                }
            }
            
            //check for doubles to be resolved
            if(direction === 'left' || direction === 'up'){
                for(let j = 0; j < newSection.length - 1; j++){
                    if(newSection[j] === newSection[j + 1]){
                        newSection[j] *= 2;
                        newSection[j + 1] = 0;
                    }
                }
            }else{
                for(let j = 0 ; j < newSection.length - 1; j++){
                    if(newSection[j] === newSection[j + 1]){
                        newSection[j + 1] *= 2;
                        newSection[j] = 0;
                    }
                }               
            }

            //remove any middle zeros, i.e. removing gaps
            for(let j = 0; j < newSection.length - 1; j++){
                if(newSection[j] === 0){
                    newSection.splice(j, 1);
                    console.log('0 cut');
                }
            }

            //pad newColumn with 0s to the correct length
            while(newSection.length < 4){
                if(direction === 'right' || direction === 'down'){
                    newSection.unshift(0);
                }else{
                    newSection.push(0);
                }

            }

            //move our changes to the actual board
            for(let j = 0; j < 4;j++){
                if(direction === 'up' || direction === 'down'){
                    b[j][i] = newSection[j];
                }
                else if(direction === 'left' || direction === 'right'){
                    b[i][j] = newSection[j];
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
            case 'ArrowUp': this.moveTiles('up'); break;
            case 'ArrowLeft': this.moveTiles('left'); break;
            case 'ArrowDown': this.moveTiles('down'); break;
            case 'ArrowRight': this.moveTiles('right'); break;
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
        return(
            <div tabIndex="-1" onKeyDown={(e) => this.onKeyPress(e)} className="bg">
                <div className="game-board">
                    {this.state.board.map((value) => {
                        return value.map((s) =>{
                            if(s > 0){
                                return(<GameBoardItem id="#active-tile" value={s}/*  key ={index} *//>);
                            }else{
                                return(<GameBoardItem id="empty-tile" value={s} /* key={index} *//>);
                            }
                        })   
                    })}
                </div>
            </div>
        );
    }

}

export default GameBoard;