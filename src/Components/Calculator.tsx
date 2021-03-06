import React, { useState } from 'react';
import ButtonNumber from './ButtonNumber';
import ButtonOperator from './ButtonOperator';
import './Calculator.css';

const Calculator = () => {
  const [memNumber, setMemNumber] = useState('');
  const [output, setOutput] = useState('0');
  const [maxDigits, setMaxDigits] = useState(8);
  const [operator, setOperator] = useState('');

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

  const resetCalculator = () => {
    setOutput('0');
    setMaxDigits(8);
    setOperator('');
    setMemNumber('');
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

  const handleOperation = (op: string) => {
    setOperator(op);
    setMemNumber(output);
    setOutput('0');
    setMaxDigits(8);
  };

  const handleEqual = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(memNumber) + parseFloat(output);
        break;
      case '-':
        result = parseFloat(memNumber) - parseFloat(output);
        break;
      case '*':
        result = parseFloat(memNumber) * parseFloat(output);
        break;
      case '/':
        if (parseFloat(output) === 0) {
          result = 0;
        } else {
          result = parseFloat(memNumber) / parseFloat(output);
        }
        break;
      default:
        break;
    }
    resetCalculator();
    if (result > 99999999) {
      setOutput('99999999');
    } else if (result < -99999999) {
      setOutput('-99999999');
    } else {
      setOutput(result.toString().slice(0, maxDigits));
    }
  };

  return (
    <div className="container calc-container">
      <div className="row calc-output">
        <small className="calc-memory">{`${memNumber} ${operator}`}</small>
        <span className="calc-text">{output}</span>
      </div>
      <div className="row">
        <button type="button" className="btn btn-light btn-one" onClick={resetCalculator}>AC</button>
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
        <button type="button" className="btn btn-success btn-one" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
