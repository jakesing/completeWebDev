//https://reactjs.org/tutorial/tutorial.html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 1. DONE! Display the location for each move in the format (col, row) in the move history list.
// 2. DONE! Bold the currently selected item in the move list.
// 3. DONE! Didn't understand 100% because of syntax..Rewrite Board to use two loops to make the squares instead of hardcoding them.
// 4. DONE! Add a toggle button that lets you sort the moves in either ascending or descending order. Thanks Flexbox!
// 5. DONE! When someone wins, highlight the three squares that caused the win.
// 6. DONE! When no one wins, display a message about the result being a draw.


function Square(props) {
  //logic to determine if there's a winning line - if yes, add 'highlight' to the style list for the squares in the winning line. 
  let style = props.winningLine ? (props.winningLine.includes(props.location) ? "square highlight" : "square") : "square"
  return (
    <button className = {style} //sets the style of Square
            onClick = {props.onClick} //brings down the function 'onClick' from the call inside of Board
    >
      {props.value} {/*brings down the value for the button from the call*/}
    </button>
  )
}

class Board extends React.Component {
  //function for rendering squares - passes down value and the onClick function.
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
        key = {i}
        location = {i}
        winningLine = {this.props.winningLine}
      />
    );
  }

  render() {
      let boardSize = 3;
      let squares = []
      for (let i = 0; i < boardSize; i++){
        let row = [];
        for (let j = 0; j < boardSize; j++){
          row.push(this.renderSquare(i * boardSize + j));
        }
        squares.push(<div key={i} className="board-row">{row}</div>)
      }

      return(
          <div>{squares}</div>
        )
    ;
  }
}

class Game extends React.Component {
  //sets up the blank board, with an array of null values. 
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      lastMoveHistory: [],
      movesAsc: true, 
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(current.squares) ? calculateWinner(current.squares).winner : null;

    //don't do anything to click if (1) there's a winner already or (2) ?.
    if (winner || squares[i]){
      return;
    }

    //sets the square that was clicked to either X or O depending on the 'xIsNext' value
    squares[i] = this.state.xIsNext? 'X': 'O';
    
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      lastMoveHistory: this.state.lastMoveHistory.concat(i),
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2 === 0),
    })
  }

  flipSortOrder(){
    this.setState({
      movesAsc: !this.state.movesAsc,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares) ? calculateWinner(current.squares).winner : null;
    const winningLine = calculateWinner(current.squares) ? calculateWinner(current.squares).winningLine : null;
    const lastMoveHistory = this.state.lastMoveHistory;
    const isDraw = !current.squares.includes(null)


    //defines the moves that appear
    const moves = history.map((step, move) => {
      let whichSquare = lastMoveHistory[move - 1];
      let whichRow = (
          whichSquare < 3 ? 1 : 
          whichSquare < 6 ? 2 : 
          3
        );
      let whichCol = (
          whichSquare === 0 || whichSquare === 3 || whichSquare === 6 ? 1 : 
          whichSquare === 1 || whichSquare === 4 || whichSquare === 7 ? 2 : 
          3
        );
      const shouldBold = this.state.stepNumber === move ? 'bold-text' : ''

      const desc = move ? 
        `Go to move # ${move}: (${whichCol}, ${whichRow})`: 
        'Go to game start';
      return (
        <li key={move} className = {shouldBold}>
          <button onClick={() => this.jumpTo(move)} className = {shouldBold}>{desc}</button>
        </li>
      )
    })

    let status;
    if(winner){
      status = `Winner: ${winner}`;
    } else if(!isDraw){
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    } else {
      status = 'Stalemate. Please Try Again'
    }

    const descending = <ol className='reversed'>{moves}</ol>
    const ascending = <ol>{moves}</ol>
    
    //render the board and game-info. Passes in the current squares, the handleclick function, status and moves.
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            winningLine = {winningLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          {/*<ol>{moves}</ol>*/}
          {this.state.movesAsc ? ascending : descending}
          <button onClick={() => this.flipSortOrder()}>{`Sort ${this.state.movesAsc ? 'descending' : 'ascending'}`}</button>
        </div>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winningLine = [];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winningLine = lines[i];
      return {winner: squares[a], winningLine: winningLine};
    }
  }
  return null;
}
