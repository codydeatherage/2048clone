import React, {Component} from 'react';


class GameBoardItem extends Component{
   
    keyDown = (e) =>{
        
        console.log(e.charCode); 
        console.log(e.keyCode); 
        console.log(e.code);
    }
    setBGColor = () =>{
        let color = '';
        switch(this.props.value){
            case 2: color = 'rgb(246, 242, 222)';break;
            case 4: color = '#ffeaa7';break;
            case 8: color = '#fdcb6e';break;
        }

        return color;
    }
    
    render(){
        let id = this.props.id;
        if(this.props.value > 0){
            return(
                <div onKeyDown={this.keyDown} className={`game-piece tile-${this.props.value}`} id={id}>
                   {this.props.value}
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