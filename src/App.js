import { Container } from "reactstrap";
import Cell from "./Cell";

const snakeGrid = {
  maxWidth: '70vw',
  minHeight: '75vh',
  display: 'grid',
  paddingTop: '10vh',
  paddingBottom: '10vh',
  margin: 'auto'
}

function App() {
  return (
    <Container style = {snakeGrid}>
      <Cell></Cell>
    </Container>
  );
}

export default App;
