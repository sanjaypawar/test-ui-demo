import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';

import LogoImage from './img/logo.png';
const useStyles = makeStyles((theme) => {
  return ({
    TypographyStyles: {
      flex: 1
    },
    button: {
      backgroundColor: '#0000ff',
      margin: theme.spacing(1),
      borderRadius: '50px',
      color: 'white',
    },
    root: {
      maxWidth: 'auto',
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
      paddingTop: "100px"
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
  });
});
const StyledIcon = withStyles({
  root: {
    width: '8em',
    height: '1.2em',
  },
})(Icon);

const Navbar =() =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () =>{
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false);
  };
  return(
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography className= {classes.TypographyStyles}>
          <IconButton edge="start" aria-label="menu">
            <StyledIcon>
              <img src={LogoImage} alt="logo" width="100%" height="100%"/>
            </StyledIcon>
          </IconButton>
        </Typography>
        <TextField placeholder="Search Events"/>
        <Search/>
        <Button>Sign In</Button>
        <Button size="small" className= {classes.button} onClick={handleClickOpen}>+ Register</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            <h1>Register</h1>
          </DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Last Name"
              type="text"
              fullWidth
              />
            </Grid>
          </Grid>
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email"
          type="email"
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Password"
          type="password"
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Confirm Password"
          type="password"
          fullWidth
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <Button fullWidth='false' variant="contained" color="primary">
            Register Now
          </Button>
        </DialogActions>
      </Dialog>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;