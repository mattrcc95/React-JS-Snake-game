import React from 'react'
import Square from './Square'
import { SquareModel } from '../model/SquareModel'
import { useEffect } from 'react/cjs/react.development'

export default function Grid({ nRows, nCols, head, food }) {

    const assignSquareModel = (index) => {
/*         if (snake.body.map(obj => obj.node).includes(index)) {
            return new SquareModel(index, true, false)
        } else { */
            switch (index) {
                case head:
                    return new SquareModel(index, true, false)
                case food:
                    return new SquareModel(index, false, true)
                default:
                    return new SquareModel(index, false, false)
            }
/*         } */
    }

    const initializeGrid = () =>
        Array.from({ length: nCols * nRows }, (_value, index) => index + 1)
            .map(index => <Square key={index} squareModel={assignSquareModel(index)} />)

    return (initializeGrid())

}
