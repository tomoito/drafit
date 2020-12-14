import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {
  sumStatus,
} from 'feature/DraqWalkSlice';
import { useSelector } from 'react-redux';
import styles from './ResultStatus.module.css';

const useStyles = makeStyles(() => createStyles({
  txtfiedl: {
    padding: 6,
  },
}));

const ResultStatus:React.FC = () => {
  const classes = useStyles();
  const DoraList = useSelector(sumStatus);

  return (
    <div>
      <div className={styles.box1}>
        <p>特殊効果</p>
      </div>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
          さいだいHP +
          {DoraList.hp}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
          さいだいMP +
          {DoraList.mp}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
          攻撃力 +
          {DoraList.攻撃力}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
          スキル斬撃 +
          {DoraList.スキル斬撃}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
          メラ斬撃アップ +
          {DoraList.メラ斬撃}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="left" className={classes.txtfiedl}>
          メラ耐性アップ +
          {DoraList.メラ耐性}
        </Typography>
      </Grid>

    </div>
  );
};

export default ResultStatus;
