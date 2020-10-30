import React, {Component} from 'react';


class GameBoardItem extends Component{
    render(){
        return(
            <div className="game-piece">
                <h1>{this.props.state}</h1>
            </div>
        )
    }
}

export default GameBoardItem;