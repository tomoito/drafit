import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  FlterResult, addFilter, FlterResultSoubi,
} from 'feature/DraqWalkSlice';
import { AppDispatch } from 'app/store';
import { useDispatch } from 'react-redux';
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

const EffectSection:React.FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();

  const handleChangeBase = async(e:any) => {// eslint-disable-line

    await dispatch(addFilter(e));

    await dispatch(FlterResult());
    await dispatch(FlterResultSoubi());
  };
  return (
    <div>
      <Typography className={classes.colorText}>ダメージアップ</Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('スキル斬撃・体技')} dispShow="スキル斬撃・体技">aiueo</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('スキル斬撃')} dispShow="スキル斬撃">aiueo</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('スキル体技')} dispShow="スキル体技">aiueo</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('メラ属性')} dispShow="メラ">メラ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ヒャド属性')} dispShow="ヒャド">ヒャド</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ディン属性')} dispShow="ディン">ディン</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ドルマ属性')} dispShow="ドルマ">ドルマ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('バギ属性')} dispShow="バギ">バギ</CustomButtonEffect>
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ジバリア属性')} dispShow="ジバリア" />
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('ギラ属性')} dispShow="ギラ" />
        </Grid>
        <Grid item xs={4}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase('イオ属性')} dispShow="イオ">バギ</CustomButtonEffect>
        </Grid>
      </Grid>
      {' '}

    </div>
  );
};

export default EffectSection;
