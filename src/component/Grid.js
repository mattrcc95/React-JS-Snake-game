import React from 'react'
import Square from './Square'
import { SquareModel } from '../model/SquareModel'

export default function Grid({ nRows, nCols }) {

    const initializeGrid = (nRows, nCols) =>
        Array.from({ length: nCols * nRows }, (_value, index) => index + 1)
            .map(index => <Square key={index} squareModel={new SquareModel(index, false)} />)

    return (initializeGrid(nRows, nCols))

}
