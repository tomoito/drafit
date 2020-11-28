import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styles from './ResultStatus.module.css';

const useStyles = makeStyles(() => createStyles({
  txtfiedl: {
    padding: 6,
  },
}));

const ResultStatus:React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={styles.box1}>
        <p>特殊効果</p>
      </div>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
          <Typography key={e} variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
            さいだいHP +50
          </Typography>
        ))
      }

    </div>
  );
};

export default ResultStatus;
