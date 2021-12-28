import React from 'react'
import Square from './Square'
import { SquareModel } from '../model/SquareModel'

export default function Grid({ nRows, nCols, snake, food }) {
    const assignSquareModel = (index) => {
        switch(index){
            case snake.body[0]:
                return new SquareModel(index, true, false)
            case food:
                return new SquareModel(index, false, true)
            default:
                return new SquareModel(index, false, false)               
        }
    }

    const initializeGrid = (nRows, nCols) =>
        Array.from({ length: nCols * nRows }, (_value, index) => index + 1)
            .map(index => <Square key={index} squareModel={assignSquareModel(index)} />)

    return (initializeGrid(nRows, nCols))

}
