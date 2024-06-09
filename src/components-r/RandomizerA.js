import React, { useState } from 'react';
import './styles/RndAStyleA.css';

function RandomizerA() {

  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState('');

  const randomize = () => {
    const randomNumber = Math.ceil((Math.random()*10));
    setResult(randomNumber);
    console.log(`Random Number = ${randomNumber}`);
  }





  return (
    <div>
      <div className='main'>
        Random number from 
        <input className='input'></input> to 
        <input className='input'></input>
      </div>

      <button className='button' onClick={() => randomize()}>Generate!</button>

      <div className='result'>
        <h1>{result}</h1>
      </div>
    </div>
  )
}

export default RandomizerA
