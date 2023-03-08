import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButtonsContainer, FeedbackButton } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtonsContainer>
      {options.map((option, key) => (
        <FeedbackButton
          type="button"        
          data-option={option}
          onClick={onLeaveFeedback}
          key={option}>{option}</FeedbackButton>
      ))}     
    </FeedbackButtonsContainer>
  );
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;