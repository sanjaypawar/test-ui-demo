import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from './img/background.jpg';

const useStyles = makeStyles((theme) => {
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
      Image Description
    </div>
  );
};
export default Home;