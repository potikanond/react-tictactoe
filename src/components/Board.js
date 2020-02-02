import React from 'react';
import Square from './Square';
import '../index.css';

export class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true // 1st turn is 'X'
  //   };
  // }
  
  // Move to Game component
  // handleClick(i) {
  //   // const squares = this.state.squares.slice(); // create a copy
  //   const squares = this.props.squares.slice(); // use squares from props
  //   if (findWinner(squares) || squares[i]) {
  //     return;
  //   } 

  //   squares[i] = this.state.xIsNext ? 'X':'O';
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext
  //   });
  //   console.log(squares);
  // }

  renderSquare(i) {
    return <Square 
      // value={this.state.squares[i]}
      // onClick={() => this.handleClick(i)} // passing function to Squre component
      value={this.props.squares[i]}       // use props from Game
      onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    // Move this responsibility to Game component
    // const winner = findWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: '+winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X':'O');
    // } 

    return (
      <div>
        {/* <div className="status">{status}</div> */} 
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board