import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StepperImageOne from './img/items/1.jpg';
import StepperImageTwo from './img/items/11.jpg';
import StepperImageThree from './img/items/4.jpg';
import StepperImageFour from './img/items/5.jpg';
import StepperImageFive from './img/items/6.jpg';
import StepperImageSix from './img/items/10.jpg';
import StepperImageSeven from './img/items/28.jpg';
import StepperImageEight from './img/items/12.jpg';
import StepperImageNine from './img/items/16.jpg';
const useStyles = makeStyles((theme) => {
  return ({
      TypographyStyles: {
          flex: 1
      },
      img: {
          height: 255,
          display: 'block',
          maxWidth: 400,
          overflow: 'hidden',
          width: '100%',
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        paddingTop: "100px"
    },
  });
});


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
      label: 'rootCity Tour',
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

  /* const handleStepChange = (step) => {
    setActiveStep(step);
  }; */
   return(
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
      steps={9}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 8}>
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
   );
}