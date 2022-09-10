import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrueOrFalseQuestion extends Component {
  state = {
    timer: 30,
  };

  shuffleAnswers = (array) => {
    const number = 0.5;
    array.sort(() => number - Math.random());
  };

  render() {
    const { timer } = this.state;
    const { question } = this.props;
    const arrayAnswers = [question.correct_answer, ...question.incorrect_answers];
    this.shuffleAnswers(arrayAnswers);
    return (
      question && (
        <fieldset>
          <div>
            Tempo restante:
            { timer }
          </div>
          <div data-testid="question-category">
            Categoria:
            {' '}
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
            {arrayAnswers.map((element, index) => {
              if (element === question.correct_answer) {
                return (
                  <button
                    key="correct-answer"
                    className="correct-answer"
                    data-testid="correct-answer"
                    type="button"
                    onClick={ this.submitAnswer }
                  >
                    {element}
                  </button>
                );
              }
              return (
                <button
                  key="wrong-answer"
                  className="wrong-answer"
                  data-testid={ `wrong-answer-${index}` }
                  type="button"
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
  question: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
  })).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
