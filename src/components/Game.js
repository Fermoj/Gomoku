import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const styleMenu={
   display: "flex",
   justifyContent: "space-evenly",
   margin: "15px",
}
const stylePlayer ={
border: "4px solid #9098b4",
padding: "8px",
borderRadius: "5px",

}
const styleButton={
   margin: "15px",
   background: '#9098b4',
   padding: "8px",
   borderRadius: "5px",
   boxShadow: '5px 3px 10px grey',
   color: "#FFFFFF",
   cursor: "pointer"
}

const Game = () => {
    //array with 9 elements filled with null to start with
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardCopy = [...board]
        if (winner || boardCopy[i]) return
        //mutate the boardcopy array with a new value, index tells where user has clicked.
        boardCopy[i] = xIsNext ? 'X' : 'O'

        //sets the board to its new value
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }
    console.log(handleClick)

    const jumpTo = () => {}

    const renderMoves = () => {
        return (
        <div >
        <button style= {styleButton} onClick={() => setBoard(Array(9).fill(null))}>
        Restart Game
        </button>
        </div>
        )
    }
    console.log (renderMoves)

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styleMenu}>
            <p style={stylePlayer}> {winner? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')} </p>
            {renderMoves()}
            </div>
        </>
    )
}
export default Game
