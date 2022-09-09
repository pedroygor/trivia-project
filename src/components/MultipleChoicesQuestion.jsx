import React, { Component } from 'react';

export default class MultipleChoicesQuestion extends Component {
  state = {
    timer: 30,
  };

  render() {
    const { timer } = this.state;
    return (
      <fieldset>
        <div>
          Tempo restante:
          { timer }
        </div>
        <div data-testid="question-category">
          Categoria:
        </div>
        <div>
          Dificuldade:
        </div>
        <div data-testid="question-text">
          Pergunta:
        </div>
        <div data-testid="answer-options">
          <button
            className="correct-answer"
            data-testid="correct-answer"
            type="button"
            onClick={ this.submitAnswer }
          >
            A.Resposta
          </button>
          <button
            className="wrong-answer"
            data-testid={ `wrong-answer-${0}` }
            type="button"
            onClick={ this.submitAnswer }
          >
            A.Resposta
          </button>
          <button
            className="wrong-answer"
            data-testid={ `wrong-answer-${1}` }
            type="button"
            onClick={ this.submitAnswer }
          >
            A.Resposta
          </button>
          <button
            className="wrong-answer"
            data-testid={ `wrong-answer-${2}` }
            type="button"
            onClick={ this.submitAnswer }
          >
            A.Resposta
          </button>
        </div>
      </fieldset>
    );
  }
}
