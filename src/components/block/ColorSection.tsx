import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid, Typography,
} from '@material-ui/core';

import CustomButton from '../atom/CustomButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  colorText: {
    textAlign: 'left',
    fontSize: '20px',
  },
}));

const ColorSection:React.FC = () => {
  const classes = useStyles();
  const handleChangeBase = (e:any) => {// eslint-disable-line
    // alert(e);

  };
  return (
    <div>
      <Typography className={classes.colorText}>Color</Typography>
      <Grid container>
        <Grid item xs={3}>
          <CustomButton themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={handleChangeBase} dispShow="○">aiueo</CustomButton>
        </Grid>
        <Grid item xs={3}>
          <CustomButton themeColor="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)" handleChangeBase={handleChangeBase} dispShow="○">aiueo</CustomButton>
        </Grid>
        <Grid item xs={3}>
          <CustomButton themeColor="linear-gradient(45deg, #AED581 30%, #7CB342 90%)" handleChangeBase={handleChangeBase} dispShow="○">aiueo</CustomButton>
        </Grid>
        <Grid item xs={3}>
          <CustomButton themeColor="linear-gradient(45deg, #9575CD 30%, #7E57C2 90%)" handleChangeBase={handleChangeBase} dispShow="○">aiueo</CustomButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default ColorSection;
