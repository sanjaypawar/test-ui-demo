import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './img/background-00.jpg';
import Products from './Products';

const useStyles = makeStyles(() => {
  return ({
  mybackground: {
    backgroundImage: `url(${backgroundImage})`,
    height: 500,
    backgroundSize: 'cover',
    marginTop: 60,
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