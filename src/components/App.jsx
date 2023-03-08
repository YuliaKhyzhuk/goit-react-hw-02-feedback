import PropTypes from 'prop-types';
import React from 'react';

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
      <div className="FeedbackContainer">
        <h2 className="FeedbackContainerTitle">Please leave feedback</h2>
        <div className="FeedbackButtons">
          <button
            type="button"
            className="FeedbackButtonGood"
            data-option="good"
            onClick={this.handleFeedback}
          >
            Good
          </button>
          <button
            type="button"
            className="FeedbackButtonNeutral"
            data-option="neutral"
            onClick={this.handleFeedback}
          >
            Neutral
          </button>
          <button
            type="button"
            className="FeedbackButtonBad"
            data-option="bad"
            onClick={this.handleFeedback}
          >
            Bad
          </button>
        </div>
        <h3 className="StatisticsTitle">Statistics</h3>
        <p className="StatisticsData">Good: {this.state.good}</p>
        <p className="StatisticsData">Neutral: {this.state.neutral}</p>
        <p className="StatisticsData">Bad: {this.state.bad}</p>
        <p className="StatisticsData">Total: {this.countTotalFeedback()}</p>
        <p className="StatisticsData">
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}
