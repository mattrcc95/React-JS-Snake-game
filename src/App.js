import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";
import * as utils from './utils/Utils.js'
import * as style from './style.js'


function App() {
  const [head, setHead] = useState(utils.getRandomInt(utils.nRows * utils.nCols, []))
  const [snake, setSnake] = useState([])
  const [food, setFood] = useState(utils.getRandomInt(utils.nRows * utils.nCols, [head].concat(snake.body)))

  const moveHead = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (utils.leftBoundary.includes(head)) {
          setHead(head + utils.pbcLeftRight)
        } else {
          setHead(head - utils.defaultLeftRight)
        }
        break
      case 'ArrowRight':
        if (utils.rightBoundary.includes(head)) {
          setHead(head - utils.pbcLeftRight)
        } else {
          setHead(head + utils.defaultLeftRight)
        }
        break
      case 'ArrowUp':
        if (utils.upperBoundary.includes(head)) {
          setHead(head + utils.pbcUpDown)
        } else {
          setHead(head - utils.defaultUpDown)
        }
        break
      case 'ArrowDown':
        if (utils.bottomBoundary.includes(head)) {
          setHead(head - utils.pbcUpDown)
        } else {
          setHead(head + utils.defaultUpDown)
        }
        break
      default:
        break
    }
  }

  const moveSnake = (event) => {
    moveHead(event)
    snake.map(function (obj, index) {
      if (index === 0) {
        return { node: head }
      } else {
        return { node: obj[index].nextToVisit, nextToVisit: obj[index - 1].node }
      }
    })
  }

  useEffect(() => {
    window.addEventListener('keydown', moveSnake)
    if (food === head) {
      snake.push({node: food, nextToVisit: food})
      setFood(utils.getRandomInt(utils.nCols * utils.nRows, [head].concat(snake.body)))
    }
    return () => { window.removeEventListener('keydown', moveSnake) }
  }, [head])

  return (
    <Container style={style.containerGrid}>
      <Grid nRows={utils.nRows} nCols={utils.nCols} head={head} snake={snake} food={food} />
    </Container>
  )

}

export default App;
