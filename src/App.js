import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Container } from "reactstrap";
import Grid from "./component/Grid";

const nRows = 10
const nCols = 10
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
  const [head, setHead] = useState(getRandomInt(100))
  const [food, setFood] = useState(getRandomInt(100, head))

  const moveHead = (event) => {
    console.log(event.key)
    switch (event.key) {
      case 'ArrowLeft':
        setHead(head - 1)
        break
      case 'ArrowRight':
        setHead(head + 1)
        break
      case 'ArrowUp':
        setHead(head - 10)
        break
      case 'ArrowDown':
        setHead(head + 10)
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', moveHead)
    if(food === head){
      setFood(getRandomInt(100, head))
    }
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
