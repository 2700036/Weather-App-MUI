import React from 'react';
import Place from '../Place/Place';

import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,282px)',
    justifyContent: 'center',
    gridGap: '10px',
    listStyleType: 'none',    
    width: '100%',
    maxWidth: '882px',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: '50px 0 36px',
    flexGrow: '1',
  },
});

const CardsList = ({ cards, onBasketClick, onCardClick }) => {
  const classes = useStyles();
  const cardsElems = cards.map((card) => {
    return <Place 
    key={card._id} 
    card={card} 
    onBasketClick={() => onBasketClick(card)}
    onCardClick={()=>onCardClick(card)} 
    />;
  });
  return <Container className={classes.container}>
    {cardsElems}
    </Container>;
};

export default CardsList;
