import React from 'react'; 
import {
  Grid
} from '@material-ui/core';
import HTMLCalculator from '../components/HTMLCalculator/HTMLCalculator';
import MaterialUICalculator from '../components/MaterialUICalculator/MaterialUICalculator';
import NavBar from '../components/NavBar';

export default function Demo() { 
  return ( 
      <Grid container>
        <NavBar />
        <Grid item xs={6} style={{marginTop: '75px'}}>
          <HTMLCalculator />
        </Grid>
        <Grid item xs={6} style={{marginTop: '75px'}}>
          <MaterialUICalculator />
        </Grid>
      </Grid>
  ); 
} 
