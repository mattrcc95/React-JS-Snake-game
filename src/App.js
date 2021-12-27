import React from "react";
import { Container } from "reactstrap";
import Grid from "./component/Grid";

const snakeGrid = {
  maxWidth: '30vw',
  minHeight: '75vh',
  display: 'grid',
  paddingTop: '20vh',
  margin: 'auto',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)'
}

function App() {
  return (
    <Container style={snakeGrid}>
      <Grid nRows={10} nCols={10} />
    </Container>
  )

}

export default App;
