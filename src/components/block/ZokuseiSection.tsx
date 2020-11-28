import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomButtonEffect from '../atom/CustomButtonEffect';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  colorText: {
    textAlign: 'left',
    fontSize: '20px',
  },
}));

const ZokuseiSection:React.FC = () => {
  const classes = useStyles();
    const handleChangeBase = (e:any) => {// eslint-disable-line
    // alert(e);
  };
  return (
    <div>
      <Typography className={classes.colorText}>属性</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="全属性">aiueo</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="属性">メラ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="HP回復">ギラ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">ヒャド</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">バギ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">ディン</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">ジバリア</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">イオ</CustomButtonEffect>
        </Grid>
        <Grid item xs={6}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">ドルマ</CustomButtonEffect>
        </Grid>
      </Grid>
      {' '}
    </div>
  );
};

export default ZokuseiSection;
