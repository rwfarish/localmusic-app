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
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "65%",
    padding: "50px",
    margin: "10px",
  borderRadius: "5px"
  },
});

export default function ArtistCard({artistProp}) {
  const classes = useStyles();
  return (
          <Card className={classes.root}>
           <CardActionArea>
           <div classname="artistPhoto">
             <img src={artistProp.photo} height="175px"/> 
           </div>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {artistProp.artistname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {artistProp.genre} 
            </Typography>
            </CardContent>
            </CardActionArea>
            {/* <CardActions> */}
        <div classname="artistIcons">        
        <IconButton>
        <a
                href={artistProp.streaming}
                target="_blank"
                rel="noopener noreferrer"
              >
           <MusicNoteIcon fontSize="large" color="primary"/> 
           </a>
        </IconButton>
        <IconButton>  
        <a
                href={artistProp.social}
                target="_blank"
                rel="noopener noreferrer"
              >      
          <InstagramIcon fontSize="large" color="primary" />
          </a>
        </IconButton>
        </div>
        {/* </CardActions> */}
    </Card>
      );
}


       
          
          
          
          
           
          
       
      
    
 