/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ButtonNumber from './ButtonNumber';
import './Calculator.css';

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
    <div className="container calc-container">
      <div className="row calc-output">
        <span>{output}</span>
      </div>
      <div className="row">
        <button type="button" className="btn btn-light btn-one">AC</button>
        <button type="button" className="btn btn-light btn-one">+/-</button>
        <button type="button" className="btn btn-light btn-one">%</button>
        <button type="button" className="btn btn-primary btn-one">/</button>
      </div>
      <div className="row">
        <ButtonNumber number="7" addOutput={addOutput} />
        <ButtonNumber number="8" addOutput={addOutput} />
        <ButtonNumber number="9" addOutput={addOutput} />
        <button type="button" className="btn btn-primary btn-one">*</button>
      </div>
      <div className="row">
        <ButtonNumber number="4" addOutput={addOutput} />
        <ButtonNumber number="5" addOutput={addOutput} />
        <ButtonNumber number="6" addOutput={addOutput} />
        <button type="button" className="btn btn-primary btn-one">-</button>
      </div>
      <div className="row">
        <ButtonNumber number="1" addOutput={addOutput} />
        <ButtonNumber number="2" addOutput={addOutput} />
        <ButtonNumber number="3" addOutput={addOutput} />
        <button type="button" className="btn btn-primary btn-one">+</button>
      </div>
      <div className="row">
        <ButtonNumber number="0" addOutput={addOutput} doubleSpace />
        <button
          type="button"
          onClick={() => addOutput('.')}
          className="btn btn-dark btn-one"
        >
          .
        </button>
        <button type="button" className="btn btn-success btn-one">=</button>
      </div>
    </div>
  );
};

export default Calculator;
