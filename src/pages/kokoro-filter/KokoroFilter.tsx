import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { Button } from '@material-ui/core';
import clsx from 'clsx';

import CustomButton from '../../components/atom/CustomButton';

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
}));

const KokoroFilter:React.FC = () => {
  const classes = useStyles();
  const [color, setColor] = useState('default');
  const handleChange = () => {
    setColor(color === 'default' ? 'blue' : 'default');
  };

  const handleChangeBase = (e:any) => {
    alert(e);
  };

  return (
    <div>
      <p>aiueo</p>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          {/* <Divider /> */}
          <Button
            className={clsx(classes.button, {
              [classes.buttonBlue]: color === 'blue',
            })}
            onClick={handleChange}
          >
            Class name branch
          </Button>
          <CustomButton themeColor="green" handleChangeBase={handleChangeBase}>aiueo</CustomButton>
          <CustomButton themeColor="red" handleChangeBase={handleChangeBase}>aiueo</CustomButton>

        </div>
      </Drawer>
    </div>
  );
};

export default KokoroFilter;
