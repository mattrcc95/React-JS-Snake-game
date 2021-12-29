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
  const [snake, setSnake] =
    useState(
      {
        body: [{ value: getRandomInt(constants.nRows * constants.nCols, []), nextToVisit: null }],
        nextToAdd: null
      }
    )
  const [food, setFood] = useState(getRandomInt(constants.nRows * constants.nCols, snake.body.map(obj => { return obj.value })))

  const controlSnake = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (constants.leftBoundary.includes(snake.body[0].value)) {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value + (constants.nCols - 1), nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value - 1, nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      case 'ArrowRight':
        if (constants.rightBoundary.includes(snake.body[0].value)) {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value - (constants.nCols - 1), nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value + 1, nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      case 'ArrowUp':
        if (constants.upperBoundary.includes(snake.body[0].value)) {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value + (constants.nCols * (constants.nRows - 1)), nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value - constants.nRows, nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        }
        break
      case 'ArrowDown':
        if (constants.bottomBoundary.includes(snake.body[0].value)) {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value - (constants.nCols * (constants.nRows - 1)), nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
                }
              }),
              nextToAdd: snake.body[snake.body.length - 1]
            })
        } else {
          setSnake
            ({
              body: snake.body.map(function (obj, index) {
                if (index === 0) {
                  return { value: obj.value + constants.nRows, nextToVisit: null }
                } else {
                  return { value: snake.body[index - 1].value, nextToVisit: null }
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
    if (food === snake.body[0].value) {
      snake.body.push(snake.nextToAdd)
      setFood(getRandomInt(constants.nCols * constants.nRows, snake.body.map(obj => obj.value )))
    }
    window.addEventListener('keydown', controlSnake)
    console.log(snake)
    return () => { window.removeEventListener('keydown', controlSnake) }
  }, [snake])

  return (
    <Container style={style.containerGrid}>
      <Grid nRows={constants.nRows} nCols={constants.nCols} snake={snake} food={food} />
    </Container>
  )

}

export default App;
