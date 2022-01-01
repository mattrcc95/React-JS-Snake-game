export const nRows = 15
export const nCols = 15
export const upperBoundary = Array.from({ length: nCols }, (_value, index) => (index + 1))
export const bottomBoundary = upperBoundary.map(value => value + nCols * (nRows - 1))
export const rightBoundary = Array.from({ length: nRows }, (_value, index) => (index + 1) * nCols)
export const leftBoundary = rightBoundary.map(value => value - nCols + 1)
export const pbcLeftRight = (nCols - 1)
export const pbcUpDown = nCols * (nRows - 1)
export const defaultLeftRight = 1
export const defaultUpDown = nRows
export const SCORE_KEY = 'SCORE_KEY'

export const getRandomInt = (max, excluded) => {
    const value = 1 + Math.floor(Math.random() * max)
    if (!excluded.includes(value)) {
      return value
    } else {
      return getRandomInt(max, excluded)
    }
  }

  export const scoreCalculator = (arr) => {
    if(arr.length < 10){
        return 1
      } else if(arr.length < 20){
        return 2
      } else if (arr.length < 25){
          return 3
      } else if (arr.length < 30) {
          return 4
      } else {
          return 5
      }
  }

  export const speed = (arr) => {
      if(arr.length < 10){
        return 200
      } else if(arr.length < 20){
        return 180
      } else if (arr.length < 25){
          return 150
      } else if (arr.length < 30) {
          return 100
      } else {
          return 80
      }
  }
