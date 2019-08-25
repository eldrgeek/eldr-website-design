import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const TextArea = (line, classes) => {
  // if (typeof props === "text") {
  //   let {t,f} = props;
  //   text = t
  // }
  if (typeof line === "string") line = { t: line };
  console.log(line, classes);
  let { t = "none", width = 12, variant = "h3" } = line;
  return (
    <Grid item xs={width}>
      <Paper className={classes.paper}>
        <Typography variant={variant}>this is {t}</Typography>
      </Paper>
    </Grid>
  );
};

export default function CenteredGrid({ text }) {
  console.log("values", Object.values(text));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <React.Fragment>
          {Object.values(text).map(line => TextArea(line, classes))}{" "}
        </React.Fragment>

        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
