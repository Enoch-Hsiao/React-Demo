import React from 'react';
import { Button } from '@material-ui/core';

export default function CalculatorButton(props) {
    //console.log(props);
    
    return (
        <Button onClick={() => props.onClick(props.value)} variant="outlined" color="primary">
            {props.value}
        </Button>
    );
}
