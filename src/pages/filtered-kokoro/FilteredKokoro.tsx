import { Avatar, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const FilteredKokoro:React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item>
            <Paper className={classes.paper} />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilteredKokoro;
