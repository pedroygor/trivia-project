import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  resultFeedback = () => {
    const { answersMultiple, answersTrueOrFalse } = this.props;
    console.log(answersMultiple, answersTrueOrFalse);
    const result = answersMultiple + answersTrueOrFalse;
    const beBetter = 3;
    console.log(result);
    if (result === beBetter || result > beBetter) {
      return 'Well Done!';
    }
    if (result < beBetter) {
      return 'Could be better...';
    }
  };

  render() {
    const { score, assertions } = this.props;
    console.log(assertions);
    const resultFeedback = this.resultFeedback();
    return (
      <div>
        <Header />
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-text">{resultFeedback}</p>
        <h1 data-testid="feedback-total-question">{assertions}</h1>
      </div>
    );
  }
}

Feedback.propTypes = {
  answersMultiple: PropTypes.number.isRequired,
  answersTrueOrFalse: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  answersMultiple: state.player.answers,
  assertions: state.player.assertions,
  score: state.player.score,
  answersTrueOrFalse: state.player.trueAnswers,
});

export default connect(mapStateToProps)(Feedback);
