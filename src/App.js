import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";
import * as utils from './utils/Utils.js'
import * as style from './style.js'
import Score from "./component/Score";

var timeoutId

function App() {
  const [snake, setSnake] = useState({ body: [utils.getRandomInt(utils.nRows * utils.nCols, [])], nextToAdd: null })
  const [food, setFood] = useState(utils.getRandomInt(utils.nRows * utils.nCols, snake.body))
  const [score, setScore] = useState({ current: 0, best: 0 })
  const [activeKey, setActiveKey] = useState(null)

  const resetAll = () => {
    storeBestScoreAndReset();
    setSnake({ body: [utils.getRandomInt(utils.nCols * utils.nRows, [])], nextToAdd: null });
    setFood(utils.getRandomInt(utils.nCols * utils.nRows, snake.body));
    setActiveKey(null);
  }

  const updateScore = () => {
    const scoreComputed = utils.scoreCalculator(snake.body)
    if (score.current >= score.best) {
      setScore({ current: score.current + scoreComputed, best: score.current + scoreComputed })
    } else {
      setScore({ current: score.current + scoreComputed, best: score.best })
    }
  }

  const storeBestScoreAndReset = () => {
    if (score.current >= score.best) {
      setScore({ current: 0, best: score.current })
      sessionStorage.setItem(utils.SCORE_KEY, JSON.stringify(score.current))
    } else {
      setScore({ current: 0, best: score.best })
    }
  }

  const getShiftedBody = (shift) =>
    snake.body.map(function (value, index) {
      if (index === 0) {
        return value + shift
      } else {
        return snake.body[index - 1]
      }
    })

  const moveSnake = (boundary, defaultShift, PBCshift) => {
    if (boundary.includes(snake.body[0])) {
      setSnake({
        body: getShiftedBody(PBCshift),
        nextToAdd: snake.body[snake.body.length - 1]
      });
    } else {
      setSnake({
        body: getShiftedBody(defaultShift),
        nextToAdd: snake.body[snake.body.length - 1]
      });
    }
  }


  const controlSnake = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        moveSnake(utils.leftBoundary, - 1, (utils.nCols - 1))
        break
      case 'ArrowRight':
        moveSnake(utils.rightBoundary, + 1, - (utils.nCols - 1))
        break
      case 'ArrowUp':
        moveSnake(utils.upperBoundary, - utils.nRows, (utils.nCols * (utils.nRows - 1)))
        break
      case 'ArrowDown':
        moveSnake(utils.bottomBoundary, utils.nRows, - (utils.nCols * (utils.nRows - 1)))
        break
      default:
        break
    }
  }

  const eventHandler = (event) => {
    if (event.key !== activeKey) {
      setActiveKey(event.key)
      controlSnake(event)
    }
  }

  useEffect(() => {
    const retrieved = sessionStorage.getItem(utils.SCORE_KEY)
    if (retrieved) {
      setScore({ current: 0, best: JSON.parse(retrieved) })
    }
  }, [])

  useEffect(() => {
    const [first, ...rest] = snake.body
    if (timeoutId) { clearTimeout(timeoutId) }
    if (rest.includes(first)) { resetAll() }

    window.addEventListener('keydown', eventHandler)

    if (activeKey !== null) {
      timeoutId = setTimeout(function () {
        controlSnake(new KeyboardEvent('keydown', { 'key': activeKey }))
      }, utils.speed(snake.body))
    }

    if (food === first) {
      updateScore()
      snake.body.push(snake.nextToAdd)
      setFood(utils.getRandomInt(utils.nCols * utils.nRows, snake.body))
    }

    return () => { window.removeEventListener('keydown', eventHandler)}

  }, [snake])

  return (
    <>
      <Container style={style.scoreGrid}>
        <Score score={score}></Score>
      </Container>
      <Container style={style.containerGrid}>
        <Grid nRows={utils.nRows} nCols={utils.nCols} body={snake.body} food={food} />
      </Container>
    </>
  )
}

export default App;
