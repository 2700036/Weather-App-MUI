import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'transparent',
    minHeight: '120px',
    fontFamily: 'Rubik',
    color: 'rgb(31, 31, 31)',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    justifyContent: 'center',
  },
  toolbar: {
    width: '100%',
    maxWidth: '868px',
    alignItems: 'center',
    color: 'initial',
    justifyContent: 'space-between',
    padding: '32px',
    "boxSizing": "border-box"
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '30px',
    fontFamily: 'Rubik',
    paddingRight: '50px'
  },
  button: {
    width: '150px',
    height: '50px',
    background: '#44beba',
    fontSize: '32px',
    transition: '0.3s',
    cursor: 'pointer',
    marginLeft: 'auto',
    borderRadius: '2px',
  },
});

const Header = ({ onAddPlace }) => {
  const classes = useStyles();
  return (
    <AppBar position='relative' className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h1" component="h3" className={classes.logo}>
          °Синоптик
        </Typography>
        <Button variant='contained' onClick={onAddPlace} className={classes.button}>
          +
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
