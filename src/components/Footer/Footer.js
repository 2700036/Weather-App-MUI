import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  footer: {   
    "padding": "30px 0 60px",
    "display": "flex"
  },
  copyright: {
    "margin": "auto",
    "color": "#545454",   
  }
})

const Footer = (props) => {
  const classes = useStyles();  
    return (
      <Box component='footer' className={classes.footer}>
    <Typography className={classes.copyright}>
      © 2020 Бирюков Сергей
    </Typography>
  </Box>
    );  
}

export default Footer;