import React, {useState} from 'react'; 
import './HTMLCalculator.css';

//Code from https://www.geeksforgeeks.org/reactjs-calculator-app-adding-functionality/
export default function HTMLCalculator() { 
  const[question, setQuestion] = useState('');
  const[answer, setAnswer] = useState('');

// our method to handle all click events from our buttons 
function handleClick(event) { 
  // get the value from the target element (button) 
  const value = event.target.value; 
 
  switch (value) { 
    case '=': { 
 
      // if it's an equal sign, use the eval module 
      // to evaluate the question ,convert the answer 
      // (in number) to String 
      if (question !=='') { 
        var ans=''; 
          try { 
            ans = eval(question); 
          } catch(err) { 
            setAnswer("Math Error"); 
          } 
          
          if (ans===undefined) {
            setAnswer("Math Error");
          } else {
            setAnswer(ans);
            setQuestion("");
          }
          break; 
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
      setQuestion(question.substr(0,question.length-1));
      break; 
    } 
 
    default: { 
        // for every other command, update the answer in the state 
        setQuestion(question + value) 
        break; 
      } 
    } 
  } 

  return ( 
    <div className="frame"> 
    <div className="calculator-title"> 
      Calculator through HTML only
    </div> 
      <div className="mainCalc"> 
        <div className="screen">
          <div className="screen-row"> 
            <input type="text" readOnly value={question}/> 
          </div> 
          <div className="screen-row"> 
            <input type="text" readOnly value={answer}/> 
          </div> 
        </div>
        <div className="button-row"> 
          <input 
            type="button"
            value="Clear" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="Delete" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="." 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="/" 
            onClick={handleClick}
          />  
        </div> 
        <div className="button-row"> 
          <input 
            type="button"
            value="7" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="8" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="9" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="*" 
            onClick={handleClick}
          />  
        </div> 
        <div className="button-row"> 
        <input 
            type="button"
            value="4" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="5" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="6" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="-" 
            onClick={handleClick}
          />  
        </div> 
        <div className="button-row"> 
          <input 
            type="button"
            value="1" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="2" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="3" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="+" 
            onClick={handleClick}
          />  
        </div> 
        <div className="button-row"> 
         <input 
            type="button"
            value="0" 
            onClick={handleClick}
          />  
          <input 
            type="button"
            value="=" 
            onClick={handleClick}
          />  
        </div> 
      </div> 
    </div> 
  ); 
} 
