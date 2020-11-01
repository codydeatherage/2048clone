import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GameBoard from './components/GameBoard';
import GameInfoPanel from './components/GameInfoPanel';
import GameBoardItem from './components/GameBoardItem';
import reportWebVitals from './reportWebVitals';

//ewrwarasdf
let boardState = [
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 4, 0, 0],
  [0, 0, 5, 0]
];
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

document.addEventListener('keydown', function(e) {
  switch (e.key) {
      case 'ArrowLeft':
          console.log('left');
          break;
      case 'ArrowUp':
        console.log('up');
          break;
      case 'ArrowRight':
        console.log('right');
          break;
      case 'ArrowDown':
        console.log('down');
          break;
  }
});
ReactDOM.render(
  <React.StrictMode>
    <div className = "App">
      <GameInfoPanel></GameInfoPanel>
      <br></br>
      <GameBoard
        boardState = {boardState}
      ></GameBoard>
      <div className="bot-pad"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
