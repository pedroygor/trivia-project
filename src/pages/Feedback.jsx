import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  resultFeedback = () => {
    const value = 3;
    const beBetter = 3;
    if (value <= beBetter) {
      return 'Could be better...';
    }
    return 'Well Done!';
  };

  render() {
    const result = this.resultFeedback();
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{result}</p>
      </div>
    );
  }
}

export default Feedback;
