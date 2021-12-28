import React from 'react'
import * as style from '../style.js'

export default function Square({ squareModel }) {
    if (squareModel.isSnake === true && squareModel.isFood === false) {
        return <div style={style.snakeSquare}>{squareModel.id}</div>
    } else if (squareModel.isFood === true && squareModel.isSnake === false) {
        return <div style={style.foodSquare}>{squareModel.id}</div>
    } else {
        return <div style={style.regularSquare}>{squareModel.id}</div>
    }
}
