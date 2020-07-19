/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ButtonNumber from './ButtonNumber';
import ButtonOperator from './ButtonOperator';
import './Calculator.css';

const Calculator = () => {
  // const [memNumber, setMenNumber] = useState(null);
  const [output, setOutput] = useState('0');
  const [maxDigits, setMaxDigits] = useState(8);

  const addNumber = (text: string) => {
    if (output.length < maxDigits) {
      if (output === '0') {
        setOutput(text);
      } else {
        setOutput(output + text);
      }
    }
  };

  const addPoint = (text: string) => {
    if (output.length < maxDigits && !output.includes('.')) {
      setOutput(output + text);
      setMaxDigits(maxDigits + 1);
    }
  };

  const resetOutput = () => {
    setOutput('0');
    setMaxDigits(8);
  };

  const handleSign = () => {
    if (output === '0') {
      return;
    }
    const minus = '-';
    if (output.includes(minus)) {
      setOutput(output.replace(minus, ''));
      setMaxDigits(maxDigits - 1);
    } else {
      setOutput(minus + output);
      setMaxDigits(maxDigits + 1);
    }
  };

  const percentNumber = () => {
    const number = parseFloat(output) / 100;
    if (Math.abs(number) < 0.000001) {
      setOutput('0');
      return;
    }
    setOutput(number.toString().slice(0, maxDigits));
  };

  const handleOperation = (operator: string) => {
    window.alert(operator);
  };

  return (
    <div className="container calc-container">
      <div className="row calc-output">
        <span className="calc-text">{output}</span>
      </div>
      <div className="row">
        <button type="button" className="btn btn-light btn-one" onClick={resetOutput}>AC</button>
        <button type="button" className="btn btn-light btn-one" onClick={handleSign}>+/-</button>
        <button type="button" className="btn btn-light btn-one" onClick={percentNumber}>%</button>
        <ButtonOperator operator="/" handleOperation={handleOperation} />
      </div>
      <div className="row">
        <ButtonNumber number="7" addOutput={addNumber} />
        <ButtonNumber number="8" addOutput={addNumber} />
        <ButtonNumber number="9" addOutput={addNumber} />
        <ButtonOperator operator="*" handleOperation={handleOperation} />
      </div>
      <div className="row">
        <ButtonNumber number="4" addOutput={addNumber} />
        <ButtonNumber number="5" addOutput={addNumber} />
        <ButtonNumber number="6" addOutput={addNumber} />
        <ButtonOperator operator="-" handleOperation={handleOperation} />
      </div>
      <div className="row">
        <ButtonNumber number="1" addOutput={addNumber} />
        <ButtonNumber number="2" addOutput={addNumber} />
        <ButtonNumber number="3" addOutput={addNumber} />
        <ButtonOperator operator="+" handleOperation={handleOperation} />
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
