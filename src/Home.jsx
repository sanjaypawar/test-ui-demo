import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import StepperImageOne from './img/items/1.jpg';
import StepperImageTwo from './img/items/11.jpg';
import StepperImageThree from './img/items/4.jpg';
import StepperImageFour from './img/items/5.jpg';
import StepperImageFive from './img/items/6.jpg';
import StepperImageSix from './img/items/10.jpg';
import StepperImageSeven from './img/items/28.jpg';
import StepperImageEight from './img/items/12.jpg';
import StepperImageNine from './img/items/16.jpg';
import backgroundImage from './img/background.jpg';

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
        mybackground: {
            backgroundImage: `url(${backgroundImage})`,
            height: 500,
            backgroundSize: 'cover',
            marginTop: 60,
        },
    });
});
const StyledIcon = withStyles({
  root: {
      width: '8em',
      height: '1.2em',
  },
})(Icon);
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
      label: 'Marky Restaurant',
      imgPath: StepperImageOne,
    },
    {
      label: 'Naskar Racing',
      imgPath: StepperImageTwo,
    },
    {
      label: 'Food Festival',
      imgPath: StepperImageThree,
    },
    {
      label: 'Cosmopolit',
      imgPath: StepperImageFour,
    },
    {
      label: 'Stand Up Show',
      imgPath: StepperImageFive,
    },
    {
      label: 'City Tour',
      imgPath: StepperImageSix,
    },
    {
      label: 'Buityful Luxury Villa',
      imgPath: StepperImageSeven,
    },
    {
      label: 'Fiesta Bar',
      imgPath: StepperImageEight,
    },
    {
      label: 'Senior C# developer',
      imgPath: StepperImageNine,
    },
    
  ];

const Home =() =>{
const classes = useStyles();
const [open, setOpen] = React.useState(false);
const handleClickOpen = () =>{
    setOpen(true);
};
const handleClose = () =>{
    setOpen(false);
};
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /* const handleStepChange = (step) => {
    setActiveStep(step);
  }; */
  return (
      <>
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
    <div className={classes.mybackground}>
      Image Description
    </div>
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        /* onChangeIndex={handleStepChange} */
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
    </div>
    </>
  );
};
export default Home;