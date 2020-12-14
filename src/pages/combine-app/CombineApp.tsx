import {
  CssBaseline, Grid,
} from '@material-ui/core';
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import FilterFither from 'components/block/FilterFither';
import TabKind from 'pages/fit-kokoro/TabKind';
import FilteredKokoro from '../filtered-kokoro/FilteredKokoro';
import FitKokoro from '../fit-kokoro/FitKokoro';
import Header from '../header/Header';
import KokoroFilter from '../kokoro-filter/KokoroFilter';
import ResultStatus from '../result-status/ResultStatus';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper: {
    height: 200,
    width: 200,
    backgroundColor: 'pink',
  },
  paper2: {
    height: 140,
    width: 100,
    backgroundColor: 'blue',
  },
  paper3: {
    height: 140,
    width: 100,
    backgroundColor: 'green',
  },
}));

const CombineApp:React.FC = () => {
  const classes = useStyles();

  return (

    // <div className={classes.root}>
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <KokoroFilter />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={8} direction="column">
            <Grid container spacing={1} justify="center">
              <Grid item xs={12}>
                <FilterFither />
              </Grid>
              <Grid item xs={12}>
                <TabKind />
              </Grid>

              <FitKokoro />
            </Grid>
            <br />
            <Grid container spacing={5}>
              <FilteredKokoro />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <ResultStatus />
            </Grid>
          </Grid>
        </Grid>
      </main>

      {/* <Grid container>
        <Grid
          item
          xs={2}
        >
          <KokoroFilter />
        </Grid>
        <Grid
          item

          md={7}
          lg={7}
          justify="center"
          alignItems="center"
        >
          <Grid container direction="column" justify="center">

            <Grid item xs={12} justify="center">
              <div style={style2}>
                <FitKokoro />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={style}>
                <p>FilteredKokoro下</p>
                <FilteredKokoro />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          md={2}
          lg={2}
        >
          <div style={style3}>
            <ResultStatus />
          </div>
        </Grid>
      </Grid> */}

    </div>
  );
};

export default CombineApp;
