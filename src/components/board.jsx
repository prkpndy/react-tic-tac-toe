import React from "react";
import Square from "./square";

// TODO: Add a line to tell whose chance is it and to declare the winner
// TODO: Add CSS to make it look beautiful
// TODO: Think about an efficient algorithm to find the winner
// TODO: Think if we can better structure our project (in terms of React)

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boardSize: 3,
            squares: Array(3),
            player: 'X',
        }

        for(let i=0 ; i<this.state.boardSize ; ++i) {
            this.state.squares[i] = Array(this.state.boardSize);
            for(let j=0 ; j<this.state.boardSize ; ++j) {
                this.state.squares[i][j] = ' ';
            }
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.makeRowOfButtons = this.makeRowOfButtons.bind(this);
    }

    handleButtonClick(posX, posY) {
        let newSquares = this.state.squares.slice();  // We use slice() to create a copy of the array
        newSquares[posY][posX] = this.state.player;
        this.setState({
            squares: newSquares,
            player: this.state.player === 'X' ? 'O' : 'X',
        });
    }

    makeRowOfButtons(row, rowIndex) {
        return (
            <div>
                {row.map((val, colIndex) =>
                    <Square
                        key = {String(rowIndex) + String(colIndex)}
                        displayText={val}
                        handleClick={this.handleButtonClick}
                        posX={colIndex}
                        posY={rowIndex}
                    />)}
            </div>
        );
    }

    render() {
        return this.state.squares.map((val, rowIndex) => this.makeRowOfButtons(val, rowIndex));
    }
}

export default Board;