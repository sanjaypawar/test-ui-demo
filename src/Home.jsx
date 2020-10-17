import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import LogoImage from './img/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        backgroundColor: '#fafafa',
    },
    icon: {
        width: 100,
        height: 50,
    },
  }));

const StyledIcon = withStyles({
    root: {
        width: '8em',
        height: '1.2em',
    },
    title: {
        flexGrow: 1,
    },
})(Icon);

export default function Home(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <StyledIcon>
                            <img src={LogoImage} alt="logo" width="100%" height="100%"/>
                        </StyledIcon>
                    </IconButton>
                    <TextField className={classes.title}/>
                    <Button >Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};