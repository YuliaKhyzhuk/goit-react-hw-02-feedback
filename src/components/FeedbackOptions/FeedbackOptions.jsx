import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="FeedbackButtonsContainer">
      {options.map((option, key) => (
        <button
          type="button"
          className="FeedbackButtonGood"
          data-option={option}
          onClick={onLeaveFeedback}
          key={option}>{option}</button>
      ))}     
    </div>
  );
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;