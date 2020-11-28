import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Icon from '../../app/img/draquefit.png';
import Icon2 from '../../app/img/metaru.jpg';
import Kokoro from '../../components/atom/Kokoro';
import KokoroDummy from '../../components/atom/KokoroDummy';

// import classes from './Fitkokoro.module.css';

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
const FitKokoro:React.FC = () => {
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

        </Grid>
      </Grid>
    </Grid>
  );
};

export default FitKokoro;
