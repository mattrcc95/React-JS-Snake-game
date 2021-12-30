import 'bootstrap/dist/css/bootstrap.css';

export const containerGrid = {
    maxWidth: '30vw',
    minHeight: '75vh',
    display: 'grid',
    paddingTop: '20vh',
    margin: 'auto',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)'
  }

  export const regularSquare = {
    background: '#fff',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

export const snakeSquare = {
    background: '#FF8C00',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

export const headSquare = {
    background: '#FF0000',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}

export const foodSquare = {
    background: '#00FF00',
    display: 'grid',
    boxSizing: 'border-box',
    border: '2px solid #000000 ',
    textAlign: 'center'
}
