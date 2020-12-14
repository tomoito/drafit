import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  setKirikae,
} from 'feature/DraqWalkSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/store';
import { Button } from '@material-ui/core';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const TabKind:React.FC = () => {
  const classes = useStyles();

  const dispatch: AppDispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  const handleChange = async (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
    await dispatch(setKirikae(newValue));
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.root}>
        <Tab label="こころ( ﾟДﾟ)" className={classes.root} />
        <Tab label="装備( ﾟДﾟ)" className={classes.root} />
        <Tab label="心珠" className={classes.root} />
      </Tabs>

    </div>
  );
};

export default TabKind;
