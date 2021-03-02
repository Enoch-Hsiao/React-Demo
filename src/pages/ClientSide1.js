import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Button
} from '@material-ui/core';
import Copyright from '../components/Copyright';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

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
      <Typography variant="h3" align="center" className={classes.title}>Page 1 of Client Side Rendering</Typography>
      
      {/*App will not reload*/}
      <Button
          className={classes.button}
          component={Link}
          to={'/clientside2'}
          variant="contained"
          color="primary"
      >
          <Typography variant="h5" display="block" noWrap>
              Click Here to access page 2
          </Typography>
      </Button>

      <Box className={classes.copyright}>
          <Copyright />
      </Box>
    </div>
  )
};