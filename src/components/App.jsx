import PropTypes from 'prop-types';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  render() {
    return (
      <div className="FeedbackContainer">
        <h2 className="FeedbackContainerTitle">Please leave feedback</h2>
        <div className="FeedbackButtons">
          <button type="button" className="FeedbackButtonGood" onClick={() => {}}>Good</button>
          <button type="button" className="FeedbackButtonNeutral" onClick={this.props.decrement}>Neutral</button>
          <button type="button" className="FeedbackButtonBad" onClick={this.props.decrement}>Bad</button>
        </div>
        <h3 className="StatisticsTitle">Statistics</h3>
        <p className="StatisticsData">Good:</p>
        <p className="StatisticsData">Neutral:</p>
        <p className="StatisticsData">Bad:</p>
        <p className="StatisticsData">Total:</p>
        <p className="StatisticsData">Positive feedback: %</p>

      </div>
    );
  }
}

// export default App;