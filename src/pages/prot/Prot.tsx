import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Box, Grid, Paper } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper: {
    height: 200,
    width: 200,
    backgroundColor: 'pink',
  },
  paper2: {
    height: 140,
    width: 100,
    backgroundColor: 'blue',
  },
  paper3: {
    height: 140,
    width: 100,
    backgroundColor: 'green',
  },
  paper4: {
    height: 140,
    width: 100,
    backgroundColor: 'black',
  },
  paper5: {
    height: 40,
    width: 50,
    backgroundColor: 'black',
  },
}));

const Prot:React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={8} direction="column">
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  <Grid item>
                    <Paper className={classes.paper} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper} />
                  </Grid>
                </Grid>
              </Grid>
              <Hidden mdDown>
                {/* <Grid xs={4}> */}
                <Grid item>
                  <Paper className={classes.paper5} />
                </Grid>
                {/* </Grid> */}
              </Hidden>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  <Grid item>
                    <Paper className={classes.paper} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper2} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paper3} />
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper3} />
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper3} />
              </Grid>
            </Grid>
          </Grid>

        </Grid>

      </main>
    </div>
  );
};

export default Prot;
