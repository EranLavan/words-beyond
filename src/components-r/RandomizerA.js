import React, { useState } from 'react';
import './styles/RndAStyleC.css';

function RandomizerA() {

  const randomize = () => {
    const randomNumber = Math.ceil((Math.random()*10));
    console.log(`Random Number = ${randomNumber}`);
  }

  const [result, setResult] = useState('');




  return (
    <div>
      <div className='main'>
        Random number from 
        <input className='input'></input> to 
        <input className='input'></input>
      </div>

      <button className='button' onClick={() => randomize()}>Generate!</button>

      <div className='result'>
        <h1>Result: {result}</h1>
      </div>
    </div>
  )
}

export default RandomizerA
