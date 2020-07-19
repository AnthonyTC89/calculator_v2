import React from 'react';
import PropTypes from 'prop-types';
import './ButtonNumber.css';

const ButtonNumber = ({ number, addOutput, doubleSpace }) => (
  <button
    type="button"
    onClick={() => addOutput(number)}
    className={doubleSpace ? 'btn btn-dark btn-two' : 'btn btn-dark btn-one'}
  >
    {number}
  </button>
);

ButtonNumber.propTypes = {
  number: PropTypes.string.isRequired,
  addOutput: PropTypes.func.isRequired,
  doubleSpace: PropTypes.bool,
};

ButtonNumber.defaultProps = {
  doubleSpace: false,
};

export default ButtonNumber;
