import React from 'react'
import * as style from '../style.js'

export default function Square({ squareModel }) {
<<<<<<< HEAD
    if (squareModel.isHead) {
        return <div style={style.headSquare}>{squareModel.id}</div>
    } else if (squareModel.isbody) {
        return <div style={style.bodySquare}>{squareModel.id}</div>
    } else if (squareModel.isFood) {
        return <div style={style.foodSquare}>{squareModel.id}</div>
=======
    if (squareModel.isSnake) {
        return <div style={style.snakeSquare}></div>
    } else if (squareModel.isHead) {
        return <div style={style.headSquare}></div>
    } else if (squareModel.isFood) {
        return <div style={style.foodSquare}></div>
>>>>>>> scheduled-movement
    } else {
        return <div style={style.regularSquare}></div>
    }
}
