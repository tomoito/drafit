import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppDispatch } from 'app/store';
import { useDispatch } from 'react-redux';
import { addFilter, FlterResult } from 'feature/DraqWalkSlice';
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
  const dispatch: AppDispatch = useDispatch();
  const classes = useStyles();

  const handleChangeBase = async (e:any) => {
    await dispatch(addFilter(e));
    await dispatch(FlterResult());
  };
  return (
    <div>
      <Typography className={classes.colorText}>耐性</Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('全属性')} dispShow="全属性">aiueo</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('メラ耐性')} dispShow="メラ">メラ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ヒャド耐性')} dispShow="ヒャド">ヒャド</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ディン耐性')} dispShow="ディン">ディン</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ドルマ耐性')} dispShow="ドルマ">ドルマ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('バギ耐性')} dispShow="バギ">バギ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ジバリア耐性')} dispShow="ジバリア" />
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ギラ耐性')} dispShow="ギラ" />
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('イオ耐性')} dispShow="イオ">バギ</CustomButtonEffect>
        </Grid>
      </Grid>
      {' '}
    </div>
  );
};

export default ZokuseiSection;
