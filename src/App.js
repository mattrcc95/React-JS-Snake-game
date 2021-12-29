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
  const [head, setHead] = useState(getRandomInt(constants.nRows * constants.nCols, []))
  //const [snake, setSnake] = useState({ body: [], nextFoodNode: null })
  //const [food, setFood] = useState(getRandomInt(constants.nRows * constants.nCols, snake.body))
  const [food, setFood] = useState(getRandomInt(constants.nRows * constants.nCols, [head]))

  const moveHead = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        if (constants.leftBoundary.includes(head)) {
          setHead(head + constants.pbcLeftRight)
        } else {
          setHead(head - constants.defaultLeftRight)
        }
        break
      case 'ArrowRight':
        if (constants.rightBoundary.includes(head)) {
          setHead(head - constants.pbcLeftRight)
        } else {
          setHead(head + constants.defaultLeftRight)
        }
        break
      case 'ArrowUp':
        if (constants.upperBoundary.includes(head)) {
          setHead(head + constants.pbcUpDown)
        } else {
          setHead(head - constants.defaultUpDown)
        }
        break
      case 'ArrowDown':
        if (constants.bottomBoundary.includes(head)) {
          setHead(head - constants.pbcUpDown)
        } else {
          setHead(head + constants.defaultUpDown)
        }
        break
      default:
        break
    }
  }

/*   const moveSnake = (event) => {
    moveHead(event)
     snake.body.map(function (obj, index) {
      if (index === 0) {
        return { node: head }
      } else {
        return { node: obj[index].nextToVisit, nextToVisit: obj[index - 1].node }
      }
    }) 
  }
 */
/*   useEffect(() => {
    console.log(snake.body)
  }) */

  useEffect(() => {
    console.log('head from useEffect', head)
//    console.log(snake)
/*     if (food === head) {
      snake.body.push({ node: snake.nextFoodNode, nextToVisit: snake.body[0].node })
      setSnake({ body: snake.body, impulse: snake.impulse, nextFoodNode: null })
      setFood(getRandomInt(constants.nCols * constants.nRows, snake.body))
    } */
    window.addEventListener('keydown', moveHead)
    return () => { window.removeEventListener('keydown', moveHead) }
  }, [head])

  return (
    <Container style={style.containerGrid}>
      <Grid nRows={constants.nRows} nCols={constants.nCols} head={head} food={food} />
    </Container>
  )

}

export default App;
