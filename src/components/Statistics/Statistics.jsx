import React from "react";
import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsData } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <StatisticsContainer>
             <StatisticsData>Good: {good}</StatisticsData>
          <StatisticsData>Neutral: {neutral}</StatisticsData>
          <StatisticsData>Bad: {bad}</StatisticsData>
          <StatisticsData>Total: {total}</StatisticsData>
          <StatisticsData>
            Positive feedback: {positivePercentage}%
          </StatisticsData>
        </StatisticsContainer>        
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
