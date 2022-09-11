import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestShowBtnNext } from '../redux/actions/game';

class MultipleChoicesQuestion extends Component {
  state = {
    timer: 30,
    endTime: false,
    disable: false,
    shuffleArray: [],
  };

  componentDidMount() {
    this.shuffleAnswers();
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

  shuffleAnswers = () => {
    const { question } = this.props;
    const arrayAnswers = [question.correct_answer, ...question.incorrect_answers];
    const number = 0.5;
    this.setState({ shuffleArray: arrayAnswers.sort(() => number - Math.random()) });
  };

  submitAnswer = () => {
    const { dispatch } = this.props;
    dispatch(requestShowBtnNext(true));
  };

  render() {
    const { timer, disable, shuffleArray } = this.state;
    const { question } = this.props;
    return (
      <div>
        Tempo para responder:
        { timer }
        segundos
        { question && (
          <div>
            <fieldset>
              <div data-testid="question-category">
                Categoria:
                {question.category}
              </div>
              <div>
                Dificuldade:
                {' '}
                {question.difficulty}
              </div>
              <div data-testid="question-text">
                Pergunta:
                {' '}
                {question.question}
              </div>
              <div data-testid="answer-options">
                {shuffleArray.map((element, index) => {
                  if (element === question.correct_answer) {
                    return (
                      <button
                        key={ element }
                        className="correct-answer"
                        data-testid="correct-answer"
                        type="button"
                        disabled={ disable }
                        onClick={ this.submitAnswer }
                      >
                        {element}
                      </button>
                    );
                  }
                  return (
                    <button
                      key={ element }
                      className="wrong-answer"
                      data-testid={ `wrong-answer-${index}` }
                      type="button"
                      disabled={ disable }
                      onClick={ this.submitAnswer }
                    >
                      {element}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>
        ) }
      </div>
    );
  }
}

MultipleChoicesQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
  })).isRequired,
};

export default connect()(MultipleChoicesQuestion);
