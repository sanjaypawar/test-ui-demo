import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ProductImageOne from './img/items/15.jpg';
import ProductImageTwo from './img/items/27.jpg';
import ProductImageThree from './img/items/5.jpg';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles( {
  myproducts: {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
  },
  mybutton:{
    borderRadius: '25px',
    fontSize: 'small',
    border: '3px solid white',
    color: 'white',
  },
  h1: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    color: 'white',
  },
  uipath:{
    backgroundColor: '#337ab7',
    fontWeight: 'bold',
    borderRadius: '15px',
  },
  coupon:{
    paddingTop: 130,
  },
  location: {
    marginLeft: '10px',
  },
  myarrow:{
    marginLeft: '5px',
    color: 'white',
    borderRadius: '50px',
    border: '3px solid white',
    fontSize: 30,
  },
});

const StyledButton = withStyles({
  root: {
    minWidth: 'unset',
    padding: 'unset',
  },
})(Button);
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const productsSteps = [
  {
    label: 'Setting Up Your Buisness for AREP',
    imgPath: ProductImageOne,
    department: 'UI Path',
    location: 'New York',
  },
  {
    label: 'Improve Performance With Employee-led Feedback',
    imgPath: ProductImageTwo,
    department: 'Human Resource',
    location: 'Venila'
  },
  {
    label: 'THE HYPERAUTOMATION',
    imgPath: ProductImageThree,
    department: 'UI Path',
    location: 'London',
  },
];

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

const Products =() =>{
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <>
      <div className={classes.coupon}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          /* onChangeIndex={handleStepChange} */
          enableMouseEvents
        >
        {productsSteps.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 3 ? (
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <div>
                <img className={classes.myproducts} src={step.imgPath} alt={step.label} />
              </div>
            </Grid>
            <Grid item xs={5}>
              <React.Fragment>
                <Container maxWidth="sm" className={classes.h1}>
                  <Typography component="div" />
                  <h1>{step.label}</h1> 
                  <span className={classes.uipath}>{step.department}</span>
                  <Room className={classes.location} fontSize='small'/>
                  <span className={classes.location}>{step.location}</span>
                  <hr/>
                  <div>
                    <Button size='small' className={classes.mybutton} >JOIN NOW</Button>
                  </div>
                </Container>
              </React.Fragment>
            </Grid>
          </Grid> 
          ) : null}
        </div>
        ))}
        </AutoPlaySwipeableViews>
        
      </div>
      <div>
        {allStepsCompleted() ? (
        <div>
          <Typography >
            All steps completed - you&apos;re finished
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
        ) : (
        <div>
          <StyledButton onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight className={classes.myarrow}/>
              : <KeyboardArrowLeft className={classes.myarrow}/>}
            </StyledButton>
            <StyledButton onClick={handleNext} disabled={activeStep === 8}> 
              {theme.direction === 'rtl' ? <KeyboardArrowLeft className={classes.myarrow}/>
              : <KeyboardArrowRight className={classes.myarrow}/>}
            </StyledButton>
        </div>
        )}
      </div>
    </>
  );
};
export default Products;