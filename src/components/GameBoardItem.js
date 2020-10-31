import React, {Component} from 'react';


class GameBoardItem extends Component{
    render(){
        let id = this.props.id;
        if(this.props.state > 0){
            return(
                <div className="game-piece" id={id}>
                    <h1>{this.props.state}</h1>
                </div>
            )
        }else{
            return(
                <div className="game-piece" id={id}>
                    <h1></h1>
                </div>
            )
        }
    }
}

export default GameBoardItem;