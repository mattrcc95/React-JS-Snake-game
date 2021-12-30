import 'bootstrap/dist/css/bootstrap.css';

export const scoreGrid = {
    maxWidth: '30vw',
    minHeight: '10vh',
    display: 'grid',
    paddingTop: '5vh',
    margin: 'auto',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',
    columnGap: '10%'
}

export const scoreSquare = {
    background: '#F0F8FF',
    display: 'grid',
    boxSizing: 'border-box',
    border: '3px solid #F0F8FF ',
    textAlign: 'center',
    borderRadius: '15px',
}

export const containerGrid = {
    maxWidth: '30vw',
    minHeight: '75vh',
    display: 'grid',
    paddingTop: '10vh',
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
