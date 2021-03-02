import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Button,
} from '@material-ui/core';
import Copyright from '../components/Copyright';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  "@keyframes color-change": {
      "0%": {
          backgroundColor: "#45a3e5"
      },
      "30%": {
          backgroundColor: "#66bf39"
      },
      "40%": {
          backgroundColor: "#eb670f"
      },
      "60%": {
          backgroundColor: "#f35"
      },
      "90%": {
          backgroundColor: "#864cbf"
      },
      "100%": {
          backgroundColor: "#45a3e5"
      }
  },
  container: {
      height: '100%',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      animation: '10000ms ease-in-out infinite $color-change !important'
  },
  textField: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginTop: theme.spacing(4),
    fontFamily: 'Algerian'
  },
  button: {
    marginTop: theme.spacing(5),
    width: '350px',
    textTransform: 'unset',
    borderStyle: 'solid',
    borderColor: 'white',
    border: 2,
},
  margin: {
      margin: theme.spacing(3),
  },
  copyright: {
      color: 'white',
      paddingBottom: theme.spacing(2),
      '@media (min-height:500px)': {
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

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center" className={classes.title}>React Demo</Typography>

      <Button
          className={classes.button}
          component={Link}
          to={'/serverside1'}
          variant="contained"
          color="primary"
      >
          <Typography variant="h5" display="block" noWrap>
              Server Side Rendering
          </Typography>
      </Button>

      <Button
          className={classes.button}
          component={Link}
          to={'/clientside1'}
          variant="contained"
          color="primary"
      >
          <Typography variant="h5" display="block" noWrap>
              Client Side Rendering
          </Typography>
      </Button>

      <Button
          className={classes.button}
          component={Link}
          to={'/demo'}
          variant="contained"
          color="primary"
      >
          <Typography variant="h5" display="block" noWrap>
              Demo App
          </Typography>
      </Button>

      <Box className={classes.copyright}>
          <Copyright />
      </Box>
    </div>
  )
};