import React, {Component} from 'react';


class GameBoardItem extends Component{
   
    keyDown = (e) =>{
        
        console.log(e.charCode); 
        console.log(e.keyCode); 
        console.log(e.code);
    }
      
    
    render(){
        let id = this.props.id;
        if(this.props.value > 0){
            return(
                <div onKeyDown={this.keyDown} className="game-piece" id={id}>
                    <h1>{this.props.value}</h1>
                </div>
            )
        }else{
            return(
                <div onKeyDown={this.keyDown} className="game-piece" id={id}>
                    <h1></h1>
                </div>
            )
        }
    }
}

export default GameBoardItem;