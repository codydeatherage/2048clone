import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GameBoard from './components/GameBoard';
import GameInfoPanel from './components/GameInfoPanel';
import GameBoardItem from './components/GameBoardItem';
import reportWebVitals from './reportWebVitals';

//ewrwarasdf
/* let boardState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]; */


console.log('gb',GameBoard.state);
document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;

  if (e.key === 'ArrowUp') {
      // up arrow
  }
  else if (e.key === 'ArrowDown') {
      // down arrow
  }
  else if (e.key === 'ArrowLeft') {
     // left arrow
  }
  else if (e.key === 'ArrowRight') {
     // right arrow
  }

}

/* document.addEventListener('keydown', function(e) {
  switch (e.key) {
      case ' ':

         console.log('space bar'); 
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
}); */

ReactDOM.render(
  <React.StrictMode>
    <div className = "App">
      <GameInfoPanel></GameInfoPanel>
      <br></br>
      <GameBoard></GameBoard>
      <div className="bot-pad"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
