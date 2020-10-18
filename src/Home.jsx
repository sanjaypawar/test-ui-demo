import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './img/background.jpg';
import Products from './Products';

const useStyles = makeStyles(() => {
  return ({
  mybackground: {
    backgroundImage: `url(${backgroundImage})`,
    height: 500,
    backgroundSize: 'cover',
    marginTop: 60,
   /* backgroundColor: 'rgba(0,0,0,0.5)',
     filter: 'grayscale(90%)', */
  },
  });
});

const Home =() =>{
const classes = useStyles();
  return (
    <div className={classes.mybackground}>
      <Products />
    </div>
  );
};
export default Home;