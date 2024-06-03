import React, { useState } from 'react';
import './RandomizerA.css';

function RandomizerA() {

  const randomize = () => {
    const randomNumber = Math.ceil((Math.random()*10));
    console.log(`Random Number = ${randomNumber}`);
  }

  const [result, setResult] = useState('');




  return (
    <>
      <div>Random number from 
        <input></input> to 
        <input></input>
      </div>

      <button onClick={() => randomize()}>Randomize</button>

      <div className='result'>
      <h1></h1>
      </div>
    </>
  )
}

export default RandomizerA
