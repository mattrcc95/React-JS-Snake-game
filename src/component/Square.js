import React from 'react'
import * as style from '../style.js'

export default function Square({ squareModel }) {
    if (squareModel.isSnake) {
        return <div style={style.snakeSquare}></div>
    } else if (squareModel.isHead) {
        return <div style={style.headSquare}></div>
    } else if (squareModel.isFood) {
        return <div style={style.foodSquare}></div>
    } else {
        return <div style={style.regularSquare}></div>
    }
}
