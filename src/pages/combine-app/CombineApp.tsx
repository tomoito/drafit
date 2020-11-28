import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import FilteredKokoro from '../filtered-kokoro/FilteredKokoro';
import FitKokoro from '../fit-kokoro/FitKokoro';
import Header from '../header/Header';
import KokoroFilter from '../kokoro-filter/KokoroFilter';
import ResultStatus from '../result-status/ResultStatus';

const style = {
  height: '100%',
  // lineHeight: '32px',
  // borderRadius: 4,
  // border: 'none',
  // padding: '0 16px',
  // color: '#fff',
  minwidth: '300px',
  background: '#639',
};

const style2 = {
  height: '100%',
  width: '100%',
  minWidth: '500px',
  minHeight: '300px',
  background: '#0F0',
};

const style3 = {
  height: '100%',
  width: '100%',
  background: '#99CCCC',
};

const CombineApp:React.FC = () => (
  <div>
    <Grid container>
      <Grid container direction="column" justify="flex-start">
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <KokoroFilter />
      </Grid>
      <Grid
        item
        xs={7}
        // container
        // direction="column"
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
      <Grid item xs={2}>
        <div style={style3}>
          <ResultStatus />
        </div>
      </Grid>
    </Grid>

  </div>
);

export default CombineApp;
