import React, { useState, useEffect, useRef } from 'react';
import './styles/RndAStyleA.css';

function RandomizerA() {

  const [inputOne, setInputOne] = useState('');
  //Look at ^^ this useState carefully, maybe it shouldn't be '', sondern 0 or smth else
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const randomize = () => {
    const randomNumber = Math.ceil((Math.random()*10));
    setResult(randomNumber);
  }





  return (
    <div>
      <div className='main'>
        Random number from 
        <input 
          ref={inputRef}
          className='input'
          type='number'
          placeholder='x'
          // onKeyDown={handleKeyDown}
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        >
        </input> to 

        <input className='input'>
        </input>
      </div>

      <button className='button' onClick={() => randomize()}>Generate!</button>

      <div className='result'>
        <h1>{result}</h1>
      </div>
    </div>
  )
}

export default RandomizerA
