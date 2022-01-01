export const nRows = 15
export const nCols = 15
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

export const speed = (arr) => {
    if(arr.length < 5){
        return 250
    } else if (arr.length < 10) {
        return 150
    } else if (arr.length < 20) {
        return 100
    } else {
        return 80
    }
}

export const scoreCalculator = (arr) => {
    if(arr.length < 10){
        return 1
    } else if (arr.length < 20){
        return 2
    } else if (arr.length < 40) {
        return 4
    } else {
        return 8
    }
}
