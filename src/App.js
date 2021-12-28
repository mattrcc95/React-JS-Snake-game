import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";

const nRows = 10
const nCols = 10
const upperBoundary = Array.from({ length: nCols }, (_value, index) => (index + 1))
const bottomBoundary = upperBoundary.map(value => value + nCols * (nRows - 1))
const rightBoundary = Array.from({ length: nRows }, (_value, index) => (index + 1) * nCols)
const leftBoundary = rightBoundary.map(value => value - nCols + 1)

const containerGrid = {
  maxWidth: '30vw',
  minHeight: '75vh',
  display: 'grid',
  paddingTop: '20vh',
  margin: 'auto',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)'
}

const getRandomInt = (max, excluded = 0) => {
  const value = 1 + Math.floor(Math.random() * max)
  if (value !== excluded) {
    return value
  } else {
    return getRandomInt(max, excluded)
  }
}


function App() {
  const [head, setHead] = useState({ value: getRandomInt(100), impulse: null })
  const [food, setFood] = useState(getRandomInt(100, head.value))

  const moveHead = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (leftBoundary.includes(head.value)) {
          setHead({ value: head.value + (nCols - 1), impulse: 'ArrowLeft' })
        } else {
          setHead({ value: head.value - 1, impulse: 'ArrowLeft' })
        }
        break
      case 'ArrowRight':
        if (rightBoundary.includes(head.value)) {
          setHead({ value: head.value - (nCols - 1), impulse: 'ArrowRight' })
        } else {
          setHead({ value: head.value + 1, impulse: 'ArrowRight' })
        }
        break
      case 'ArrowUp':
        if (upperBoundary.includes(head.value)) {
          setHead({ value: head.value + (nCols * (nRows - 1)), impulse: 'ArrowUp' })
        } else {
          setHead({ value: head.value - nRows, impulse: 'ArrowUp' })
        }
        break
      case 'ArrowDown':
        if (bottomBoundary.includes(head.value)) {
          setHead({ value: head.value - (nCols * (nRows - 1)), impulse: 'ArrowDown' })
        } else {
          setHead({ value: head.value + nRows, impulse: 'ArrowDown' })
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (food === head.value) {
      setFood(getRandomInt(100, head.value))
    }
    window.addEventListener('keydown', moveHead)
    return () => { window.removeEventListener('keydown', moveHead) }
  }, [head])

  return (
    <Container
      autoFocus='autofocus'
      style={containerGrid}
      tabIndex='1'>
      <Grid nRows={nRows} nCols={nCols} head={head} food={food} />
    </Container>
  )

}

export default App;
