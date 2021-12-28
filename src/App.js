import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";
import * as constants from './utils/constants.js'
import * as style from './style.js'

const getRandomInt = (max, excluded = 0) => {
  const value = 1 + Math.floor(Math.random() * max)
  if (value !== excluded) {
    return value
  } else {
    return getRandomInt(max, excluded)
  }
}


function App() {
  const [snake, setSnake] = useState({ body: [getRandomInt(100)], impulse: null })
  const [food, setFood] = useState(getRandomInt(100, snake.body))

  useEffect(() => {
    console.log(snake.body)
  }, [])

  const moveSnake = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (constants.leftBoundary.includes(snake.body[0])) {
          setSnake({ body: snake.body.map(value => value + (constants.nCols - 1)), impulse: 'ArrowLeft' })
        } else {
          setSnake({ body: snake.body.map(value => value - 1), impulse: 'ArrowLeft' })
        }
        break
      case 'ArrowRight':
        if (constants.rightBoundary.includes(snake.body[0])) {
          setSnake({ body: snake.body.map(value => value - (constants.nCols - 1)), impulse: 'ArrowRight' })
        } else {
          setSnake({ body: snake.body.map(value => value + 1), impulse: 'ArrowRight' })
        }
        break
      case 'ArrowUp':
        if (constants.upperBoundary.includes(snake.body[0])) {
          setSnake({ body: snake.body.map(value => value + (constants.nCols * (constants.nRows - 1))), impulse: 'ArrowUp' })
        } else {
          setSnake({ body: snake.body.map(value => value - constants.nRows), impulse: 'ArrowUp' })
        }
        break
      case 'ArrowDown':
        if (constants.bottomBoundary.includes(snake.body[0])) {
          setSnake({ body: snake.body.map(value => value - (constants.nCols * (constants.nRows - 1))), impulse: 'ArrowDown' })
        } else {
          setSnake({ body: snake.body.map(value => value + constants.nRows), impulse: 'ArrowDown' })
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (food === snake.body[0]) {
      setFood(getRandomInt(100, snake.body))
    }
    window.addEventListener('keydown', moveSnake)
    return () => { window.removeEventListener('keydown', moveSnake) }
  }, [snake])

  return (
    <Container
      autoFocus='autofocus'
      style={style.containerGrid}
      tabIndex='1'>
      <Grid nRows={constants.nRows} nCols={constants.nCols} snake={snake} food={food} />
    </Container>
  )

}

export default App;
