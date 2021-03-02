import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
} from '@material-ui/core';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  container: {
      height: '100%',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'whitesmoke',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
  },
  title: {
    marginTop: theme.spacing(10),
  },
  link: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    width: '400px',
    textTransform: 'unset',
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    border: 2,
},
  copyright: {
      color: 'black',
      paddingBottom: theme.spacing(2),
      '@media (min-height:350px)': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          bottom: '0px',
          width: '100%',
          position: 'absolute',
      },
  },
}));

export default function ServerSide1() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavBar/>
      <Typography variant="h3" align="center" className={classes.title}>Page 2 of Server Side Rendering</Typography>

      {/*App will reload*/}
      <a href="/serverside1" className={classes.link}>Click here to access page 1</a>

      <Box className={classes.copyright}>
          <Copyright />
      </Box>
    </div>
  )
};