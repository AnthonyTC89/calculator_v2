import React, { useState } from 'react';
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
        <button
          type="button"
          onClick={() => addOutput('7')}
          className="btn btn-dark btn-one"
        >
          7
        </button>
        <button
          type="button"
          onClick={() => addOutput('8')}
          className="btn btn-dark btn-one"
        >
          8
        </button>
        <button
          type="button"
          onClick={() => addOutput('9')}
          className="btn btn-dark btn-one"
        >
          9
        </button>
        <button type="button" className="btn btn-primary btn-one">*</button>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={() => addOutput('4')}
          className="btn btn-dark btn-one"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => addOutput('5')}
          className="btn btn-dark btn-one"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => addOutput('6')}
          className="btn btn-dark btn-one"
        >
          6
        </button>
        <button type="button" className="btn btn-primary btn-one">-</button>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={() => addOutput('1')}
          className="btn btn-dark btn-one"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => addOutput('2')}
          className="btn btn-dark btn-one"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => addOutput('3')}
          className="btn btn-dark btn-one"
        >
          3
        </button>
        <button type="button" className="btn btn-primary btn-one">+</button>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={() => addOutput('0')}
          className="btn btn-dark btn-two"
        >
          0
        </button>
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
