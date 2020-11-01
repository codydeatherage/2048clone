import React, {Component} from 'react';
import GameBoardItem from './GameBoardItem';


class GameBoard extends Component{
    render(){
        const {boardState} = this.props;
        return(
            <div className="game-board">
                {/* <h1>Game Board</h1> */}
                {boardState.map((state) =>{
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