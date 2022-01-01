import React from 'react'
import Square from './Square'
import { SquareModel } from '../model/SquareModel'

export default function Grid({ nRows, nCols, body, food }) {
    const [first, ...rest] = body
    const assignSquareModel = (index) => {
        if (rest.includes(index)) {
            return new SquareModel(index, false, true, false)
        } else {
            switch (index) {
                case first:
                    return new SquareModel(index, true, false, false)  
                case food:
                    return new SquareModel(index, false, false, true)
                default:
                    return new SquareModel(index, false, false, false)
            }
        }
    }

    const initializeGrid = () =>
        Array.from({ length: nCols * nRows }, (_value, index) => index + 1)
            .map(index => <Square key={index} squareModel={assignSquareModel(index)} />)

    return (initializeGrid())

}
