import React, { useState } from 'react';

const Calculator = () => {
  const [output, setOutput] = useState('0');

  const addOutput = (text: string) => {
    if (output.length < 8) {
      if (output === '0') {
        setOutput(text);
      } else {
        setOutput(output + text);
      }
    }
  };

  return (
    <div className="container">
      <div className="row calc-output">
        {output}
      </div>
      <div className="row">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">/</button>
      </div>
      <div className="row">
        <button type="button" onClick={() => addOutput('7')}>7</button>
        <button type="button" onClick={() => addOutput('8')}>8</button>
        <button type="button" onClick={() => addOutput('9')}>9</button>
        <button type="button">*</button>
      </div>
      <div className="row">
        <button type="button" onClick={() => addOutput('4')}>4</button>
        <button type="button" onClick={() => addOutput('5')}>5</button>
        <button type="button" onClick={() => addOutput('6')}>6</button>
        <button type="button">-</button>
      </div>
      <div className="row">
        <button type="button" onClick={() => addOutput('1')}>1</button>
        <button type="button" onClick={() => addOutput('2')}>2</button>
        <button type="button" onClick={() => addOutput('3')}>3</button>
        <button type="button">+</button>
      </div>
    </div>
  )
}

export default Calculator;