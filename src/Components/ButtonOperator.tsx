import React from 'react';
import PropTypes from 'prop-types';
import './ButtonNumber.css';

const ButtonOperator = ({ operator, handleOperation }) => (
  <button
    type="button"
    onClick={() => handleOperation(operator)}
    className="btn btn-primary btn-one"
  >
    {operator}
  </button>
);

ButtonOperator.propTypes = {
  operator: PropTypes.string.isRequired,
  handleOperation: PropTypes.func.isRequired,
};

export default ButtonOperator;
