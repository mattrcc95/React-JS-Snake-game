export const nRows = 10
export const nCols = 10
export const upperBoundary = Array.from({ length: nCols }, (_value, index) => (index + 1))
export const bottomBoundary = upperBoundary.map(value => value + nCols * (nRows - 1))
export const rightBoundary = Array.from({ length: nRows }, (_value, index) => (index + 1) * nCols)
export const leftBoundary = rightBoundary.map(value => value - nCols + 1)
export const pbcLeftRight = (nCols - 1)
export const pbcUpDown = nCols * (nRows - 1)
export const defaultLeftRight = 1
export const defaultUpDown = nRows 
