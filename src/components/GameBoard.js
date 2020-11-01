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
        //let s = this.startGame();
        window.addEventListener('keydown', function(e) {
            switch (e.key) {
                case ' ':
                  
                  break;
                case 'ArrowLeft':
                    break;
                case 'ArrowUp':
                    break;
                case 'ArrowRight':
                    break;
                case 'ArrowDown':
                    break;
            }
          });
    }
    
    startGame = () =>{
        let x = this.getRandomIndex();
        let y = this.getRandomIndex();
        let b  = [...this.state.board];
        console.log('boardCopy? ', b);
        b[x][y] = 2;
        this.setState({board: b});
        console.log('afterChange state? ', this.state.board);
    }

    getRandomIndex = () =>{
        return Math.floor(Math.random() * 4);
    }

    render(){
        const {boardState} = this.props;
        return(
            <div onClick={this.startGame} className="game-board">
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
        );
    }

}

export default GameBoard;