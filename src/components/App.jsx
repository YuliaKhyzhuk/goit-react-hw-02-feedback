import { buildQueries } from '@testing-library/react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    // console.log("Clicked handleFeedback");
    // console.log(this);
    // console.log(event);

    const { option } = event.target.dataset;
    console.log(event.target.option);

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    let totalPositive = 0;

    if (good !== 0) {
      return Math.round((good * 100) / total);
    } else {
      return 0;
    }
  };

  handleClick() {
    console.log('Clicked separate');
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          // height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
