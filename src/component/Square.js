import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const squareStyle = {
    background: '#fff',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

export default function Square({ squareModel }) {
    return (
        <div style={squareStyle}>{squareModel.id}</div>
    )
}
