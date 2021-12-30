import React from 'react'
import * as style from '../style.js'

export default function Square({ squareModel }) {
    if (squareModel.isSnake) {
        return <div style={style.snakeSquare}>{squareModel.id}</div>
    } else if (squareModel.isHead) {
        return <div style={style.headSquare}>{squareModel.id}</div>
    } else if (squareModel.isFood) {
        return <div style={style.foodSquare}>{squareModel.id}</div>
    } else {
        return <div style={style.regularSquare}>{squareModel.id}</div>
    }
}
