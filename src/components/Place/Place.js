import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import withErrorBoundry from "../hocs/withErrorBoundry";
import basket from "./delete-icon.svg";
import {
  capitalize,
  timeConverter,
  mapPngToIcon,
  addPlusOrMinus
} from "../../utils/utils";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    background: "#44beba",
    fontFamily: "'Rubik', Arial, sans-serif",
    borderRadius: "4px",
    color: "rgb(31, 31, 31)",
    position: "relative",
    overflow: "hidden",
    height: "346px",
    padding: "20px",
    boxShadow: "0px 0px 10px #509f9c",
    transition: "transform 0.4s ease, background 0.4s ease",
    "&:hover": {
      transform: "scale(1.02)",
      background: "#67C6BB"
    }
  },
  deleteButton: {
    minWidth: "28px",
    height: "18px",
    background: `transparent url(${basket}) center no-repeat`,
    backgroundSize: "18px 18px",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "18px",
    right: "15px",
    padding: "0",
    margin: "0",
    transition: "0.3s",
    zIndex: "5"
  },
  title: {
    fontSize: "22px",
    marginBottom: "5px"
  },
  subtitle: {
    lineHeight: "21px"
  },
  iconBox: {
    display: "flex",
    width: "100%",
    height: "28%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
    zIndex: "10",
    fontSize: "inherit",
    position: "relative",
    marginTop: "26px"
  },
  icon: {
    marginLeft: "18%",
    fontSize: "80px"
  },
  temp: {
    fontSize: "75px",
    position: "absolute",
    right: "0%",
    bottom: "-55px"
  },
  state: {
    marginTop: "auto",
    fontSize: "23px"
  },
  condition: {
    lineHeight: "26px",
    fontSize: "18px"
  }
});

const Place = ({ card, onBasketClick, onCardClick }) => {
  const classes = useStyles();
  const handleBasketClick = e => {
    e.stopPropagation();
    onBasketClick();
  };
  return (
    <Card onClick={onCardClick} className={classes.card}>
      <Button
        onClick={handleBasketClick}
        className={classes.deleteButton}
        image="./delete-icon.svg"
      ></Button>
      <Typography className={classes.title}>{card.name}</Typography>
      <Typography className={classes.subtitle}>{card.description}</Typography>
      <Typography className={classes.subtitle}>
        {timeConverter(card.current.dt, card.timezone_offset)}
      </Typography>
      <Box className={classes.iconBox}>
        <Box
          component="i"
          className={`wi ${mapPngToIcon(card.current.icon)} ${classes.icon}`}
        ></Box>
        <Typography className={classes.temp}>
          {addPlusOrMinus(card.current.temp)}
        </Typography>
      </Box>
      <Typography className={classes.state}>
        {capitalize(card.current.description)}
      </Typography>
      <Typography className={classes.condition}>
        {`Ощущается как: ${addPlusOrMinus(card.current.feels_like)}`}
      </Typography>
    </Card>
  );
};

export default withErrorBoundry(Place);
