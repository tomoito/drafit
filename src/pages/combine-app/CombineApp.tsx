import { Grid } from '@material-ui/core';
import React from 'react';
import FilteredKokoro from '../filtered-kokoro/FilteredKokoro';
import FitKokoro from '../fit-kokoro/FitKokoro';
import Header from '../header/Header';
import KokoroFilter from '../kokoro-filter/KokoroFilter';
import ResultStatus from '../result-status/ResultStatus';

const CombineApp:React.FC = () => (
  <div>
    <Grid container>
      <Grid item container xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <KokoroFilter />
      </Grid>
      <Grid
        item
        xs={6}
        container
        direction="column"
      >
        <Grid item>
          <FitKokoro />
        </Grid>
        <Grid item>
          <FilteredKokoro />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <ResultStatus />
      </Grid>
    </Grid>

  </div>
);

export default CombineApp;
