import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "40%",
    padding: "50px",
    margin: "10px",
    backgroundColor: "#ffff",
    borderRadius: "5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 45,
  },
  section: {
    marginTop: 12, 
  }
});

export default function OutlinedCard({ eventProp }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper className={classes.root} variant="outlined" elevation={15}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {eventProp.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {eventProp.artist}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {eventProp.venue}
        </Typography>
        <Typography variant="body2" component="p">
          {eventProp.description} 
          <br /> 
          <br /> 
          <Typography variant="body2" component="p">
          {eventProp.date}
          </Typography>
          <br /> 
          <br /> 
         Submitted by {eventProp.user}
        </Typography>
      </CardContent>
    </Paper>
  );
}
