import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  dateConverter,
  mapPngToIcon,
  capitalize,
  windDirection,
  shortDateConverter,
  addPlusOrMinus
} from "../../utils/utils";


const useStyles = makeStyles({
  contentBox: {
    display: "flex",
    flexDirection: "column",
    background: "#67C6BB"
  },
  detailsBox: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Rubik', Arial, sans-serif",
    borderRadius: "4px",
    position: "relative",
    overflow: "hidden",
    height: "346px",
    alignItems: "center",
    background: "#67C6BB"
  },
  title: {
    fontSize: "1.8em",
    marginBottom: "5px"
  },
  subtitle: {
    lineHeight: "21px",
    fontSize: "1em",
    width: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textAlign: "center",
    display: "inline-table"
  },
  iconBox: {
    display: "flex",

    height: "28%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
    zIndex: "10",
    fontSize: "inherit",
    position: "relative",

    marginTop: "10px",

    justifyContent: "space-evenly",
    width: "80%"
  },
  icon: {
    fontSize: "5em",
    margin: "auto 0"
  },
  temp: {
    fontSize: "5em"
  },
  state: {
    fontSize: "1.5em",
    marginTop: "15px"
  },
  condition: {
    lineHeight: "26px",
    fontSize: "1em"
  },
  border: {
    borderColor: "rgb(44 44 44 / 0%)",
    width: "60%",
    backgroundColor: "rgb(44 44 44 / 83%)"
  },
  forecast: {
    display: "grid",
    gridTemplateColumns: "repeat( 3, minmax(10px, 1fr) )",
    gridTemplateRows: "1fr 1fr"
  },
  day: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px"
  },
  dayDetail: {
    fontSize: "1em",
    whiteSpace: "nowrap"
  },
  dayIcon: {
    margin: "7px 0px",
    fontSize: "2.2em"
  }
});

const Details = ({ card, onClose, open }) => {
  const classes = useStyles();
  return card ? (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent className={classes.contentBox}>
        <Box className={classes.detailsBox}>
          <Typography className={classes.title}>{card.name}</Typography>
          <Typography className={classes.subtitle}>
            {card.description}
          </Typography>
          <Typography className={classes.subtitle}>
            {dateConverter(card.current.dt, card.timezone_offset)}
          </Typography>
          <Box className={classes.iconBox}>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.current.icon)} ${
                classes.icon
              }`}
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
          <Typography className={classes.condition}>
            {`Ветер: ${windDirection(card.current.wind_deg)}, ${
              card.current.wind_speed
            } м/сек`}
          </Typography>
          <Typography className={classes.condition}>
            {`Влажность: ${card.current.humidity}%`}
          </Typography>
          <Typography className={classes.condition}>
            {`Давление: ${card.current.pressure} мм рт.ст.`}
          </Typography>
        </Box>
        <Box component="hr" className={classes.border} />
        <Box className={classes.forecast}>
          <Box className={classes.day}>
            <Typography className={classes.dayDetail}>
              {shortDateConverter(card.daily[1].dt, card.timezone_offset)}
            </Typography>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.daily[1].icon)} ${
                classes.dayIcon
              }`}
            ></Box>
            <Typography className={classes.dayDetail}>
              {`${addPlusOrMinus(card.daily[1].temp.min)}${addPlusOrMinus(
                card.daily[1].temp.max
              )}`}
            </Typography>
          </Box>
          <Box className={classes.day}>
            <Typography className={classes.dayDetail}>
              {shortDateConverter(card.daily[2].dt, card.timezone_offset)}
            </Typography>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.daily[2].icon)} ${
                classes.dayIcon
              }`}
            ></Box>
            <Typography className={classes.dayDetail}>
              {`${addPlusOrMinus(card.daily[2].temp.min)}${addPlusOrMinus(
                card.daily[2].temp.max
              )}`}
            </Typography>
          </Box>
          <Box className={classes.day}>
            <Typography className={classes.dayDetail}>
              {shortDateConverter(card.daily[3].dt, card.timezone_offset)}
            </Typography>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.daily[3].icon)} ${
                classes.dayIcon
              }`}
            ></Box>
            <Typography className={classes.dayDetail}>
              {`${addPlusOrMinus(card.daily[3].temp.min)}${addPlusOrMinus(
                card.daily[3].temp.max
              )}`}
            </Typography>
          </Box>
          <Box className={classes.day}>
            <Typography className={classes.dayDetail}>
              {shortDateConverter(card.daily[4].dt, card.timezone_offset)}
            </Typography>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.daily[4].icon)} ${
                classes.dayIcon
              }`}
            ></Box>
            <Typography className={classes.dayDetail}>
              {`${addPlusOrMinus(card.daily[4].temp.min)}${addPlusOrMinus(
                card.daily[4].temp.max
              )}`}
            </Typography>
          </Box>
          <Box className={classes.day}>
            <Typography className={classes.dayDetail}>
              {shortDateConverter(card.daily[5].dt, card.timezone_offset)}
            </Typography>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.daily[5].icon)} ${
                classes.dayIcon
              }`}
            ></Box>
            <Typography className={classes.dayDetail}>
              {`${addPlusOrMinus(card.daily[5].temp.min)}${addPlusOrMinus(
                card.daily[5].temp.max
              )}`}
            </Typography>
          </Box>
          <Box className={classes.day}>
            <Typography className={classes.dayDetail}>
              {shortDateConverter(card.daily[6].dt, card.timezone_offset)}
            </Typography>
            <Box
              component="i"
              className={`wi ${mapPngToIcon(card.daily[6].icon)} ${
                classes.dayIcon
              }`}
            ></Box>
            <Typography className={classes.dayDetail}>
              {`${addPlusOrMinus(card.daily[6].temp.min)}${addPlusOrMinus(
                card.daily[6].temp.max
              )}`}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  ) : (
    ""
  );
};

export default Details;
