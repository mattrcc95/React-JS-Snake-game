import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const regularSquare = {
    background: '#fff',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

const snakeSquare = {
    background: '#FF0000',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

const foodSquare = {
    background: '#00FF00',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

export default function Square({ squareModel }) {
    if (squareModel.isSnake === true && squareModel.isFood === false) {
        return <div style={snakeSquare}>{squareModel.id}</div>
    } else if (squareModel.isFood === true && squareModel.isSnake === false) {
        return <div style={foodSquare}>{squareModel.id}</div>
    } else {
        return <div style={regularSquare}>{squareModel.id}</div>
    }
}
