import React from 'react';
import { useForm } from 'react-hook-form';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  addPlaceBox: {
    display: "flex",
    background: "#67C6BB",
    color: "rgb(44, 44, 44)",
    position: "relative",
    padding: "34px 26px"
  },
  form: {
    width: "400px"
  },
  button: {
    marginTop: "33px",
    width: "100%",
    background: "rgb(31, 31, 31)",
    color: '#fff'
  },
  input: {
    "width": "100%",
    "border": "0",
    "borderBottom": "1px solid rgba(0, 0, 0, .2)",
    "borderRadius": "2px",  
    "boxSizing": "border-box",
    "padding": "8px",
    "transition": "border-bottom 0.3s",
    "outline": "none",
    "background": "#c2fff9",
    '&:focus': {
      "background": "#eafffd"
    }
  },
  inputError: {
    "borderBottom": "1px solid #FF0000"
  },
  error: {
    "fontSize": "12px",
    "color": "#FF0000",
    "position": "absolute",
    "top": "calc(100% + 5px)",
    "left": "0",
    "transition": "opacity 0.3s"
  },
  errorVisible: {
    "opacity": "1"
  }

});

const AddPlacePopup = ({ onAddCardSubmit, open, onClose }) => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange',
  });
  const handleData = (data) => {    
    onAddCardSubmit(data);
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} >
    <DialogTitle id="add-place" style={{background: "#67C6BB", fontSize: '24px'}}>Новое место</DialogTitle>
    <DialogContent className={classes.addPlaceBox}>
    <form onSubmit={handleSubmit(handleData)} className={classes.form} noValidate>
      <label style={{position: 'relative', display: 'block'}}>
        <input
          name='name'
          ref={register({
            required: 'Без адреса прогноз не сделать...',
            minLength: {
              value: 3,
              message: 'Не стесняйся, я найду и точный адрес!',
            },
            maxLength: {
              value: 50,
              message: 'Покороче, пожалуйста',
            },
          })}
          type='text'
          id='place-name'
          className={`${classes.input} ${errors.name ? classes.inputError : ''}`}
          placeholder='По какому адресу нужен прогноз?'
          autoComplete="off"
        />         
          <span className={`${classes.error} ${errors.name ? classes.errorVisible:''}`} 
          id='place-name-error'>
            {errors.name && errors.name.message}
          </span>        
      </label>
      <Button variant="contained" type='submit'
        className={`${classes.button} ${errors.link || errors.name ? 'popup__button_disabled' : 0}`}>
      Добавить
    </Button>
    </form>
    </DialogContent>
    </Dialog>
  );
};

export default AddPlacePopup;
