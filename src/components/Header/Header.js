import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className='resort'>
            RESORT
          </div>
          <div className='header'>
          <Link style={{textDecoration:'none',textDecorationColor:'white'}} to='/'><div className = 'Headerbtn'>HOME</div></Link>
          <Link style={{textDecoration:'none',textDecorationColor:'white'}} to='/login'><div className = 'Headerbtn'>LOGIN</div></Link>
          <Link style={{textDecoration:'none',textDecorationColor:'white'}} to='/rooms'><div className = 'Headerbtn'>ROOMS</div></Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}