import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Search from "./Search";
import git from "./github.png"
// const git = require("./github.png")



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }, menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  icon: {
    width: 40,

  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img src={git} className={classes.icon} />

          <Typography className={classes.title} variant="h6" noWrap>
            GitHub
          </Typography>
          <Search />




        </Toolbar>
      </AppBar>
    </div>
  );
}