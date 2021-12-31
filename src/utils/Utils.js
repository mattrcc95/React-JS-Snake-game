export const nRows = 10
export const nCols = 10
export const upperBoundary = Array.from({ length: nCols }, (_value, index) => (index + 1))
export const bottomBoundary = upperBoundary.map(value => value + nCols * (nRows - 1))
export const rightBoundary = Array.from({ length: nRows }, (_value, index) => (index + 1) * nCols)
export const leftBoundary = rightBoundary.map(value => value - nCols + 1)
export const SCORE_KEY = 'SCORE_KEY'

export const getRandomInt = (max, excluded) => {
    var result = 0
    while (true) {
        result = 1 + Math.floor(Math.random() * max)
        if (!excluded.includes(result)) {
            break
        }
    }
    return result
}
