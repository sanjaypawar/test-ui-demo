import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import StepperImageOne from './img/items/1.jpg';
import StepperImageTwo from './img/items/11.jpg';
import StepperImageThree from './img/items/4.jpg';
import StepperImageFour from './img/items/5.png';
import StepperImageFive from './img/items/6.jpg';
import StepperImageSix from './img/items/10.jpg';
import StepperImageSeven from './img/items/28.jpg';
import StepperImageEight from './img/items/12.jpg';
import StepperImageNine from './img/items/16.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(() => {
  return ({
    img: {
      display: 'block',
      overflow: 'hidden',
      height: '250px',
      width: '250px',
    },
    header: {
      display: 'flex',
      paddingTop: "30px"
    },
    mylabel:{
      position: 'absolute', 
      color: 'white',
      left: '40%', 
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: 30,
    },
    mydescription:{
      position: 'absolute', 
      color: 'white',
      left: '40%', 
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    },
    h1: {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      color: 'white',
      fontSize: 40,
    },
    mybutton:{
      borderRadius: '25px',
      fontSize: 'small',
      border: '3px solid white',
      color: 'white',
    },
    myarrow:{
      marginLeft: '5px',
      color: 'white',
      borderRadius: '50px',
      border: '3px solid white',
      fontSize: 30,
    },
    events: {
      marginTop: 50,
      backgroundColor:"blue",
    },
    mypadding: {
      padding: 50,
      marginLeft: 100,
    },
    mydiv: {
      backgroundImage: `url(${StepperImageOne})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      height: '250px',
      width: '250px'
   },
  });
});

const StyledButton = withStyles({
  root: {
    minWidth: 'unset',
    padding: 'unset',
  },
})(Button);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
  {
    label: 'Marky Restaurant',
    imgPath: StepperImageOne,
    description: '63 Birch Street',
  },
  {
    label: 'Naskar Racing',
    imgPath: StepperImageTwo,
    description: 'London Airport',
  },
  {
    label: 'Food Festival',
    imgPath: StepperImageThree,
    description: '63 Birch Street',
  },
  {
    label: 'Cosmopolit',
    imgPath: StepperImageFour,
    description: '4696 Jim Rosa Lane',
  },
  {
    label: 'Stand Up Show',
    imgPath: StepperImageFive,
    description: '63 Birch Street',
  },
  {
    label: 'rootCity Tour',
    imgPath: StepperImageSix,
    description: '63 Birch Street',
  },
  {
    label: 'Buityful Luxury Villa',
    imgPath: StepperImageSeven,
    description: '59 Water Street',
  },
  {
    label: 'Fiesta Bar',
    imgPath: StepperImageEight,
    description: '3524 bryan Avenue',
  },
  {
    label: 'Senior C# developer',
    imgPath: StepperImageNine,
    description: 'ERF Solutions',
  },
];

export default function PromotedEvents (){
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return(
    <div className={classes.events}>
      <Grid className={classes.mypadding} container spacing={0}>
          <Grid  item xs={6}>
            <span className={classes.h1} >Promoted Events</span>
          </Grid>
          <Grid tem xs={6}>
            <Button size='small' className={classes.mybutton} >PRAMOTE YOURS</Button>
            <StyledButton onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight className={classes.myarrow}/>
              : <KeyboardArrowLeft className={classes.myarrow}/>}
            </StyledButton>
            <StyledButton onClick={handleNext} disabled={activeStep === 8}> 
              {theme.direction === 'rtl' ? <KeyboardArrowLeft className={classes.myarrow}/>
              : <KeyboardArrowRight className={classes.myarrow}/>}
            </StyledButton>
          </Grid>
      </Grid>
      <div className={classes.header}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        enableMouseEvents
      >  
        {tutorialSteps.map((step, index) => (
          <div className={classes.img}>
            <div key={step.label}>
            {Math.abs(activeStep - index) <= 9 ? (
              <div style={{backgroundImage: `url(${step.imgPath})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '250px', width: '250px'}}>
                {step.label}
              </div>
            ) : null}
              <span >{step.label}</span>
              <span >{step.description}</span>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
    <MobileStepper
      variant="dots"
      steps={9}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      />
    </div>
  );
}