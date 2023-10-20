import React from 'react'
import Square from './Square'

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    boxShadow: '5px 10px 5px grey',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    width: '40vw',
    height: '80vh',
    margin: 'auto'
}

const Board = () => {
    return (
        <>
            <div style={style}>
                <Square value="1" onClick={() => onClick('dummy value')} />
                <Square value="2" onClick={() => onClick('dummy value')} />
                <Square value="3" onClick={() => onClick('dummy value')} />
                <Square value="4" onClick={() => onClick('dummy value')} />
                <Square value="5" onClick={() => onClick('dummy value')} />
                <Square value="6" onClick={() => onClick('dummy value')} />
                <Square value="7" onClick={() => onClick('dummy value')} />
                <Square value="8" onClick={() => onClick('dummy value')} />
                <Square value="9" onClick={() => onClick('dummy value')} />
            </div>
        </>
    )
}
export default Board
