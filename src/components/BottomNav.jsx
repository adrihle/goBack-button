import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'blue',
    textDecoration: 'none',
    boxShadow: '0px -7px 4px 0px rgba(0,0,0,0.3)',
    MozBoxShadow: '0px -7px 4px 0px rgba(0,0,0,0.3)',
    WebkitBoxShadow: '0px -7px 4px 0px rgba(0,0,0,0.3)'
  },
  selected:{
    color: 'white'
  },
});

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[300] }, // Purple and green play nicely together.
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        to='/'
        //Con esta mierda ya no sale el underline producido por el link
        style={{ textDecoration: 'none' }}
        component={Link} 
        className={classes.selected} 
        label="Main page" 
        value="Main page" 
        icon={<RestoreIcon />} 
      />
      
    </BottomNavigation>
    </ThemeProvider>
  );
}