import React from 'react'
import Square from './Square'

const style = {
    border: '4px solid #3a4260',
    borderRadius: '10px',
    boxShadow: '5px 10px 5px grey',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    width: '40vw',
    height: '80vh',
    margin: 'auto'
}

const Board = ({squares, onClick}) => {
    return (
        <>
            <div style={style}>
                {squares.map((square, i )=>{
                return(
                <Square key={i} value={square} onClick={() => onClick(i)} />
                 )}
                 )}
            </div>
        </>
    )
}
export default Board
