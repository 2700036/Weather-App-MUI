import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    notFound: {
        display: "flex",
    background: "#67C6BB",
    color: "rgb(44, 44, 44)",
    position: "relative",
    padding: "34px 26px"
    }
  });

const NotFoundPopup = ({ open, onClose }) => {
    const classes = useStyles();
    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} >
        <DialogTitle id="add-place" style={{background: "#67C6BB", fontSize: '24px'}}>Не найдено</DialogTitle>
        <DialogContent className={classes.notFound}>
        <Typography  style={{fontFamily: "\"Rubik\",Arial,sans-serif"}}>
        Адрес не найден, попробуйте повторить попытку
        </Typography>        
        </DialogContent>
    </Dialog>
    )
}

export default NotFoundPopup;