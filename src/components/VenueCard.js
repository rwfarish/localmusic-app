import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "65%",
    padding: "50px",
    margin: "10px",
  borderRadius: "5px"
  },
});

export default function VenueCard({venueProp}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
     <CardActionArea>
     <div classname="venuePhoto">
       <img src={venueProp.venuepic} height="175px"/> 
     </div>
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    {venueProp.place}
    </Typography>
    <Typography variant="h6" color="textSecondary" component="h4">
      {venueProp.neighborhood}
      </Typography>
      <Typography variant="body2" component="p">
          {venueProp.address} 
          </Typography>
      </CardContent>
      </CardActionArea>
</Card>
);
}