import React, {Component} from 'react';

class GameBoardItem extends Component{

    render(){
        let id = this.props.id;
        if(this.props.value > 0){
            return(
                <div className={`game-piece tile-${this.props.value}`} id={id}>
                   {this.props.value}
                </div>
            )
        }else{
            return(
                <div className="game-piece" id={id}></div>
            )
        }
    }
}

export default GameBoardItem;