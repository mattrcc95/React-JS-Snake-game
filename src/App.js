import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";
import * as constants from './utils/Constants.js'
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
  const [snake, setSnake] = useState({ body: [getRandomInt(constants.nRows * constants.nCols, [])], nextToAdd: null })
  const [food, setFood] = useState(getRandomInt(constants.nRows * constants.nCols, snake.body))

  const controlSnake = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (constants.leftBoundary.includes(snake.body[0])) {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value + (constants.nCols - 1)
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value - 1
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      case 'ArrowRight':
        if (constants.rightBoundary.includes(snake.body[0])) {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value - (constants.nCols - 1)
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value + 1
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      case 'ArrowUp':
        if (constants.upperBoundary.includes(snake.body[0])) {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value + (constants.nCols * (constants.nRows - 1))
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value - constants.nRows
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      case 'ArrowDown':
        if (constants.bottomBoundary.includes(snake.body[0])) {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value - (constants.nCols * (constants.nRows - 1))
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (value, index) {
                if (index === 0) {
                  return value + constants.nRows
                } else {
                  return snake.body[index - 1]
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', controlSnake)
    return () => { window.removeEventListener('keydown', controlSnake) }
  }, [snake])

  useEffect(() => {
    console.log(snake.body)
    if (food === snake.body[0]) {
      snake.body.push(snake.nextToAdd)
      setFood(getRandomInt(constants.nCols * constants.nRows, snake.body))
    }
  }, [snake])

  return (
    <Container style={style.containerGrid}>
      <Grid nRows={constants.nRows} nCols={constants.nCols} snake={snake} food={food} />
    </Container>
  )

}

export default App;
