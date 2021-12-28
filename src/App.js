import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";
import * as constants from './utils/constants.js'
import * as style from './style.js'

const getRandomInt = (max, ...excluded) => {
  const value = 1 + Math.floor(Math.random() * max)
  if (!excluded.includes(value)) {
    return value
  } else {
    return getRandomInt(max, ...excluded)
  }
}


function App() {
  const [snake, setSnake] = useState({ body: [getRandomInt(constants.nRows * constants.nCols, [])], impulse: null, lastVisitedByTail: null })
  const [food, setFood] = useState(getRandomInt(constants.nRows * constants.nCols, snake.body))

  const moveSnake = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (constants.leftBoundary.includes(snake.body[0])) {
          setSnake({
            body: snake.body.map(value => value + (constants.nCols - 1)),
            impulse: 'ArrowLeft',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        } else {
          setSnake({
            body: snake.body.map(value => value - 1),
            impulse: 'ArrowLeft',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        }
        break
      case 'ArrowRight':
        if (constants.rightBoundary.includes(snake.body[0])) {
          setSnake({
            body: snake.body.map(value => value - (constants.nCols - 1)),
            impulse: 'ArrowRight',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        } else {
          setSnake({
            body: snake.body.map(value => value + 1),
            impulse: 'ArrowRight',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        }
        break
      case 'ArrowUp':
        if (constants.upperBoundary.includes(snake.body[0])) {
          setSnake({
            body: snake.body.map(value => value + (constants.nCols * (constants.nRows - 1))),
            impulse: 'ArrowUp',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        } else {
          setSnake({
            body: snake.body.map(value => value - constants.nRows),
            impulse: 'ArrowUp',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        }
        break
      case 'ArrowDown':
        if (constants.bottomBoundary.includes(snake.body[0])) {
          setSnake({
            body: snake.body.map(value => value - (constants.nCols * (constants.nRows - 1))),
            impulse: 'ArrowDown',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        } else {
          setSnake({
            body: snake.body.map(value => value + constants.nRows),
            impulse: 'ArrowDown',
            lastVisitedByTail: snake.body[snake.body.length - 1]
          })
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (food === snake.body[0]) {
      setSnake({ body: snake.body.push(snake.lastVisitedByTail), impulse: snake.impulse, lastVisitedByTail: null })
      setFood(getRandomInt(constants.nCols * constants.nRows, snake.body))
    }
    window.addEventListener('keydown', moveSnake)
    console.log(snake)
    return () => { window.removeEventListener('keydown', moveSnake) }
  }, [snake])

  return (
    <Container style={style.containerGrid}>
      <Grid nRows={constants.nRows} nCols={constants.nCols} snake={snake} food={food} />
    </Container>
  )

}

export default App;
