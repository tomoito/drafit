import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import {
  Divider, Typography,
} from '@material-ui/core';
import ColorSection from '../../components/block/ColorSection';
import OrderSection from '../../components/block/OrderSection';
import EffectSection from '../../components/block/EffectSection';
import ZokuseiSection from '../../components/block/ZokuseiSection';

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
    // pointerEvents: 'none',
    // cursor: 'not-allowed',
    // hover: 'hidden',
    // disableTouchRipple: 'true',
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

const KokoroFilter:React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <Divider />
          <ColorSection />
          <br />
          <Divider variant="middle" />
        </div>
        <br />
        <Typography className={classes.colorText}>Order</Typography>
        <OrderSection />
        <Divider variant="middle" />
        <br />

        <EffectSection />

        <br />
        <Divider variant="middle" />
        <ZokuseiSection />
        <Divider variant="middle" />
        <br />

      </Drawer>
    </div>
  );
};

export default KokoroFilter;
