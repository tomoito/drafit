import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../atom/CustomButton';
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
  const handleChangeBase = (e:any) => {// eslint-disable-line
    // alert(e);
  };
  return (
    <div>
      <Typography className={classes.colorText}>効果</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="ダメージアップ">aiueo</CustomButtonEffect>
        </Grid>
        <Grid item xs={6}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="属性">属性</CustomButtonEffect>
        </Grid>
        <Grid item xs={6}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="HP回復">HP回復</CustomButtonEffect>
        </Grid>
        <Grid item xs={6}>
          <CustomButtonEffect themeColor="linear-gradient(45deg, #FFF176 30%, #FFEB3B 90%)" handleChangeBase={handleChangeBase} dispShow="MP回復">MP回復</CustomButtonEffect>
        </Grid>
      </Grid>
      {' '}

    </div>
  );
};

export default EffectSection;
