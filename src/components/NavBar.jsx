import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Arrow } from 'react-burgers'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});



export default function SimpleAppBar(props) {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <Arrow active={props.active} onClick={props.goback} />
          <Typography variant="h6" color="inherit">
            navBar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}