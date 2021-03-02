import React, {useState} from 'react'; 
import CalculatorButton from './Button';
import { 
  Box,
  Typography,
  Container,
  TextField
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const AnswerTextField = withStyles({
  root: {
    "& .MuiInputBase-root.Mui-disabled": {
      color: "black" // (default alpha is 0.38)
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textField: {
    fontSize: '20px',
    width: '400px', 
    color: 'black !important'
  },
  title: {
    width: '400px', 
    padding: '10px 10px', 
    margin: '0 auto', 
    marginTop: '20px', 
    marginBottom: '20px', 
    borderRadius: '2px',
    border: '2px solid black',
    color: 'green'
  },
}));

//Logic from //Code from https://www.geeksforgeeks.org/reactjs-calculator-app-adding-functionality/
export default function MaterialUICalculator() { 
  const classes = useStyles();

  const[question, setQuestion] = useState('');
  const[answer, setAnswer] = useState('');

  console.log("Question Value: " + question);
  console.log("Answer Value: " + answer);

// our method to handle all click events from our buttons 
function handleClick(value) {

  switch (value) { 
    case '=': { 
 
      // if it's an equal sign, use the eval module 
      // to evaluate the question ,convert the answer 
      // (in number) to String 
      if (question !=='') { 
        var ans=''; 
          try { 
            ans = eval(question); 
            if (ans===undefined) {
              setAnswer("Math Error");
            } else {
              setAnswer(ans);
              setQuestion("");
            }
          } catch(err) { 
            setAnswer("Math Error"); 
          } 
        }
        break; 
    } 

    case 'Clear': { 
      // if it's the clears sign, just clean our question and answer in the state 
      setQuestion("");
      setAnswer("");
      break; 
    } 
 
    case 'Delete': { 
      setQuestion(question.substr(0, question.length-1));
      break; 
    } 
 
    default: { 
        // for every other command, update the answer in the state 
        setQuestion(question + value) 
        break; 
      } 
    } 
  } 

  const title = 'Calculator with Material-UI Components';

  return ( 
    <Container className={classes.container}> 
      <Box className={classes.title}> 
        <Typography variant="h5" >
          {title}
        </Typography>
      </Box> 

      <Box>
        <Box>
          <TextField 
            variant="filled" 
            className={classes.textField}
            inputProps={{ style: {textAlign: 'right', fontSize: 40} }}
            id="question-text-field"
            value={question} 
            onChange={(event)=> setQuestion(event.target.value)}
          > 
          </TextField>
        </Box>
        <Box>
          <AnswerTextField 
            disabled 
            className={classes.textField}
            inputProps={{ style: {textAlign: 'right', fontSize: 40} }}
            id="answer-text-field"
            variant="filled"
            value={answer} 
            onChange={(event) => setAnswer(event.target.value)}> 
          </AnswerTextField>
        </Box>
      </Box >
     
      <Box>
        <CalculatorButton 
          value="Clear" 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="Delete" 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="." 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="/" 
          onClick={handleClick}
        />  
      </Box>

      <Box> 
        <CalculatorButton             
          value="7" 
          onClick={handleClick}
        />  
        <CalculatorButton             
          value="8" 
          onClick={handleClick}
        />  
        <CalculatorButton             
          value="9" 
          onClick={handleClick}
        />  
        <CalculatorButton             
          value="*" 
          onClick={handleClick}
        />  
      </Box> 

      <Box> 
        <CalculatorButton             
          value="4" 
          onClick={handleClick}
        />  
        <CalculatorButton             
          value="5" 
          onClick={handleClick}
        />  
        <CalculatorButton            
          value="6" 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="-" 
          onClick={handleClick}
        />  
      </Box> 

      <Box> 
        <CalculatorButton 
          value="1" 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="2" 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="3" 
          onClick={handleClick}
        />  
        <CalculatorButton 
          value="+" 
          onClick={handleClick}
        />  
      </Box> 

      <Box> 
        <CalculatorButton             
          value="0" 
          onClick={handleClick}
        />  
        <CalculatorButton             
          value="=" 
          onClick={handleClick}
        />  
      </Box> 
    </Container> 
  ); 
} 
