import React from "react";
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <div className="StatisticsContainer">
             <p className="StatisticsData">Good: {good}</p>
          <p className="StatisticsData">Neutral: {neutral}</p>
          <p className="StatisticsData">Bad: {bad}</p>
          <p className="StatisticsData">Total: {total}</p>
          <p className="StatisticsData">
            Positive feedback: {positivePercentage}%
          </p>
        </div>        
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,  
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
