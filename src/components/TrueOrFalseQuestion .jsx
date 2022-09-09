import React, { Component } from 'react';

export default class TrueOrFalseQuestion extends Component {
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
        <div>
          Categoria:
        </div>
        <div>
          Dificuldade:
        </div>
        <div>
          Pergunta:
        </div>
        <div data-testid="answer-options">
          <button
            className="correct-answer"
            data-testid="correct-answer"
            type="button"
            onClick={ this.submitAnswer }
          >
            1.Alternativa
          </button>
          <button
            className="wrong-answer"
            data-testid={ `wrong-answer-${0}` }
            type="button"
            onClick={ this.submitAnswer }
          >
            2.Alternativa
          </button>
        </div>
      </fieldset>
    );
  }
}
