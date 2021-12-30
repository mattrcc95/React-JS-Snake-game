import React from 'react'
import * as style from '../style.js'

export default function Score({ score }) {
    return (
        <>
            <div style={style.scoreSquare}>
                SCORE
                <br></br>
                {score.current}
            </div>
            <div style={style.scoreSquare}>
                BEST
                <br></br>
                {score.best}
            </div>
        </>
    )
}
