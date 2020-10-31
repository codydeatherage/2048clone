import React, {Component} from 'react';
import GameBoardItem from './GameBoardItem';


class GameBoard extends Component{
    render(){
        const {boardState} = this.props;
        return(
            <div className="game-board">
                {/* <h1>Game Board</h1> */}
                {boardState.map((state, index) =>{
                    if(state > 0){
                        return(<GameBoardItem id="#active-tile" state ={state} key ={index}/>);
                    }else{
                        return(<GameBoardItem id="empty-tile" state={state} key={index}/>);
                    }
                })}
            </div>
        );
    }

}

export default GameBoard;