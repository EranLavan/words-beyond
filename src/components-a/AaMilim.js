import React, {useState, useRef, useEffect} from 'react';
//import './Milim.css';
import words from '../data/words.js'

let alreadyUsedWords = [];
let incorrectAnswers = [];

let randomNumber = (Math.ceil(Math.random()*(words.length - 1)));

function getRandomUniqueNumber() {
  do {
    randomNumber = (Math.ceil(Math.random()*(words.length - 1)));
  } while (alreadyUsedWords.includes(randomNumber));
  return randomNumber;
}

const randomUniqueNumber = getRandomUniqueNumber();

alreadyUsedWords.push(randomUniqueNumber);

function AaMilim() {

const [inputValue, setInputValue] = useState('');
const [language, setLanguage] = useState('english');
const [score, setScore] = useState(0);
const [word, setWord] = useState(randomUniqueNumber - 1);
const [counter, setCounter] = useState(1);
const [message, setMessage] = useState('');
const [showPronunciation, setShowPronunciation] = useState(false);
const [showFinalResults, setShowFinalResults] = useState(false);
const buttonRef = useRef(null);
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);

const changeLanguage = () => {
  language === 'english' ?
  setLanguage('russian') :
  setLanguage('english')
}

const correctAnswerEng = `Correct! '${words[word].english}' is <span id='orange'>${words[word].hebrew}</span>.
<span id='pronunciation'>Show pronunciation</span>`;

const correctAnswerRus = `Верно! '${words[word].russian}' это <span id='orange'>${words[word].hebrew}</span>.
<span id='pronunciation'>Показать произношение</span>`;

const incorrectAnswerEng = `<span id='orange'>${inputValue}</span> was incorrect. 
Correct answer: <span id='orange'>${words[word].hebrew}</span>. <br>Try next word.`;

const incorrectAnswerRus = `<span id='orange'>${inputValue}</span> - это неправильный ответ. 
Правильный ответ: <span id='orange'>${words[word].hebrew}</span>. <br>Попробуйте следующее слово.`



  return (
    <>
      
    </>
  )
}

export default AaMilim
