import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const FixedColumnLayout = withStyles(styles)(({ classes, width }) => (
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
    </Grid>
  </div>
));

export default FixedColumnLayout; 
