import React, { useState } from 'react';
import './App.css';

function App() {
  //properties
  const [showfinalresults, setfinalresults] = useState(false);
  const [score, setscore] = useState(0);
  const [currentquestion, setcurrentquestion] = useState(0);
 
    
  
  const question = [
    {
      text: "what",
      options: [
        { id: 0, text: 'a', iscorrect: false },
        { id: 1, text: 'b', iscorrect: false },
        { id: 2, text: 'c', iscorrect: false },
        { id: 3, text: 'd', iscorrect: true },

      ],
    },
    {
      text: "why",
      options: [
        { id: 0, text: 'p', iscorrect: false },
        { id: 1, text: 'q', iscorrect: false },
        { id: 2, text: 'r', iscorrect: false },
        { id: 3, text: 's', iscorrect: true },

      ],
    },

    {
      text: "how",
      options: [
        { id: 0, text: 'u', iscorrect: false },
        { id: 1, text: 'd', iscorrect: false },
        { id: 2, text: 'w', iscorrect: false },
        { id: 3, text: 'h', iscorrect: true },

      ],
    },
    
    <last onClick={()=>setfinalresults(true)} final></last>
  ];
  const optionclicked = (iscorrect) => {
    if (iscorrect) {
       
        setscore(score + 1);
      
    }
    
    if (currentquestion + 1 < question.length) {
      setcurrentquestion(currentquestion + 1);
    }
      
    
  }

  const restartgame = () => {
    setscore(0);
    setcurrentquestion(0);
    setfinalresults(false);
  }
  return (
    <div className="App">
      {/* 1. Header */}
      <h1> quiz</h1>

      {/* 2.current score */}
      <div className='score'>
      <h2> current score : {score}</h2>
      </div>
      {showfinalresults ? (

        /* 4.final results */
        < div className='final-results'>
          <h1> welcome</h1>
          <h2>  {question.length} questions are there </h2>

          <buttons onClick={() => restartgame()}>start </buttons>
        </div>

      ) : (


        /* 3.question card */

        <div className='question-card'>
          <h2>question {currentquestion + 1} out of {question.length} </h2>
          <h3 classname="question-text"> {question[currentquestion].text}</h3>

          <ul>
            {question[currentquestion].options.map((option) => {
              return (
                <li onClick={() => optionclicked(option.iscorrect)} key={option.id}>{option.text}</li>
              );
            })}
          </ul>

        </div>

      )}




    </div >
  );
}

export default App;
