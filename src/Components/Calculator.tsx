/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ButtonNumber from './ButtonNumber';
import './Calculator.css';

const Calculator = () => {
  const [output, setOutput] = useState('0');

  const addNumber = (text: string) => {
    if (output.length < 8) {
      if (output === '0') {
        setOutput(text);
      } else {
        setOutput(output + text);
      }
    }
  };

  const addPoint = (text: string) => {
    if (output.length < 8 && !output.includes('.')) {
      setOutput(output + text);
    }
  };

  const resetOutput = () => {
    setOutput('0');
  };

  return (
    <div className="container calc-container">
      <div className="row calc-output">
        <span>{output}</span>
      </div>
      <div className="row">
        <button type="button" className="btn btn-light btn-one" onClick={resetOutput}>AC</button>
        <button type="button" className="btn btn-light btn-one">+/-</button>
        <button type="button" className="btn btn-light btn-one">%</button>
        <button type="button" className="btn btn-primary btn-one">/</button>
      </div>
      <div className="row">
        <ButtonNumber number="7" addOutput={addNumber} />
        <ButtonNumber number="8" addOutput={addNumber} />
        <ButtonNumber number="9" addOutput={addNumber} />
        <button type="button" className="btn btn-primary btn-one">*</button>
      </div>
      <div className="row">
        <ButtonNumber number="4" addOutput={addNumber} />
        <ButtonNumber number="5" addOutput={addNumber} />
        <ButtonNumber number="6" addOutput={addNumber} />
        <button type="button" className="btn btn-primary btn-one">-</button>
      </div>
      <div className="row">
        <ButtonNumber number="1" addOutput={addNumber} />
        <ButtonNumber number="2" addOutput={addNumber} />
        <ButtonNumber number="3" addOutput={addNumber} />
        <button type="button" className="btn btn-primary btn-one">+</button>
      </div>
      <div className="row">
        <ButtonNumber number="0" addOutput={addNumber} doubleSpace />
        <ButtonNumber number="." addOutput={addPoint} />
        <button type="button" className="btn btn-success btn-one">=</button>
      </div>
    </div>
  );
};

export default Calculator;
