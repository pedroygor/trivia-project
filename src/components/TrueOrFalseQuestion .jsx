import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestShowBtnNext, requestScore } from '../redux/actions/game';

class TrueOrFalseQuestion extends Component {
  state = {
    timer: 30,
    endTime: false,
    disable: false,
    border: false,
  };

  componentDidMount() {
    this.setState({ border: false });
    const velocidade = 1000;
    setInterval(() => this.setTimer(), velocidade);
  }

  setTimer = () => {
    const { timer, endTime } = this.state;
    const { dispatch } = this.props;
    if (timer === 1) {
      const velocidade = 1000;
      const interval = setInterval(() => this.setTimer(), velocidade);
      clearInterval(interval);
      this.setState({ disable: true, endTime: true });
      dispatch(requestShowBtnNext(true));
    }
    if (!endTime) this.setState({ timer: timer - 1 });
  };

  shuffleAnswers = (array) => {
    const number = 0.5;
    array.sort(() => number - Math.random());
  };

  submitAnswer = ({ target }) => {
    const { value } = target;
    const { dispatch, question } = this.props;
    const { timer } = this.state;
    if (value === question.correct_answer) {
      const baseValue = 10;
      let valueDifficult = 0;
      if (question.difficulty === 'hard') {
        valueDifficult = '3';
      } if (question.difficulty === 'merdium') {
        valueDifficult = '2';
      } if (question.difficulty === 'easy') {
        valueDifficult = '1';
      }
      const result = baseValue + (timer * Number(valueDifficult));
      dispatch(requestScore(result));
    }
    this.setState({ border: true });
    dispatch(requestShowBtnNext(true));
  };

  render() {
    const { timer, disable, border } = this.state;
    const { question } = this.props;
    const arrayAnswers = [question.correct_answer, ...question.incorrect_answers];
    this.shuffleAnswers(arrayAnswers);
    console.log(arrayAnswers);
    return (
      question && (
        <fieldset>
          <div>
            Tempo para responder:
            { timer }
            segundos
          </div>
          <div data-testid="question-category">
            {question.category}
          </div>
          <div>
            {question.difficulty}
          </div>
          <div data-testid="question-text">
            {question.question}
          </div>
          <div data-testid="answer-options">
            {arrayAnswers.map((element, index) => {
              if (element === question.correct_answer) {
                return (
                  <button
                    key="correct-answer"
                    className={ border && 'correct-answer' }
                    data-testid="correct-answer"
                    type="button"
                    value={ element }
                    disabled={ disable }
                    onClick={ this.submitAnswer }
                  >
                    {element}
                  </button>
                );
              }
              return (
                <button
                  key={ index }
                  className={ border && 'wrong-answer' }
                  data-testid={ `wrong-answer-${index}` }
                  type="button"
                  value={ element }
                  disabled={ disable }
                  onClick={ this.submitAnswer }
                >
                  {element}
                </button>
              );
            })}
          </div>
        </fieldset>
      )
    );
  }
}

TrueOrFalseQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.shape(PropTypes.object.isRequired),
    incorrect_answers: PropTypes.shape(PropTypes.object.isRequired),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(TrueOrFalseQuestion);
