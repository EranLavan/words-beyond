import React from 'react'

function AaApiTestOne() {

  const translate = require('google-translate-api');

  // Example: Translate text from English to Spanish
  const example = () => {
  translate('Hello world', { to: 'es' })
    .then((response) => {
      console.log(response.text); // Translated text
    })
    .catch((error) => {
      console.error('Translation error:', error);
    });
  }
  

  return (
    <div>
      {example}
    </div>
  )
}

export default AaApiTestOne


