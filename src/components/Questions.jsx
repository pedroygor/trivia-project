import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MultipleChoicesQuestion from './MultipleChoicesQuestion';
import TrueOrFalseQuestion from './TrueOrFalseQuestion ';
import { requestShowBtnNext, requestScore, correctAnswers } from '../redux/actions';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      test: false,
      disable: false,
      endTime: false,
      timer: 30,
      border: false,
      respostaCorreta: 1,
    };
  }

  shuffleAnswers = (questao) => {
    const number = 0.5;
    const func = () => number - Math.random();
    return [questao.correct_answer,
      ...questao.incorrect_answers].sort(func);
  };

  clickState = () => {
    const MAX = 4;
    const { index } = this.state;
    if (index === MAX) {
      return this.setState({ test: true });
    }
    this.setState({
      index: index + 1,
      test: false,
      disable: false,
      endTime: false,
      timer: 30,
      border: false,
      changeAnswers: true,
    }, () => { this.setState({ changeAnswers: false }); });
  };

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

  submitAnswer = ({ target }) => {
    const { value } = target;
    const { dispatch, questions } = this.props;
    const { timer, index, respostaCorreta } = this.state;
    if (value === questions[index].correct_answer) {
      const baseValue = 10;
      let valueDifficult = 0;
      dispatch(correctAnswers(respostaCorreta));
      this.setState({ respostaCorreta: respostaCorreta + 1 });
      if (questions[index].difficulty === 'hard') {
        valueDifficult = '3';
      }
      if (questions[index].difficulty === 'medium') {
        valueDifficult = '2';
      }
      if (questions[index].difficulty === 'easy') {
        valueDifficult = '1';
      }
      const score = baseValue + (timer * Number(valueDifficult));
      dispatch(requestScore(score));
    }
    this.setState({ border: true });
    dispatch(requestShowBtnNext(true));
  };

  render() {
    const { questions, showNext, history } = this.props;
    const { index, test, timer, disable, endTime, border, changeAnswers } = this.state;
    return (
      <main>
        { questions && questions.length > 0
          && (
            <div>
              { questions[index].type === 'multiple'
                ? (
                  <MultipleChoicesQuestion
                    question={ questions[index] }
                    disable={ disable }
                    endTime={ endTime }
                    timer={ timer }
                    border={ border }
                    submitAnswer={ this.submitAnswer }
                    setTimer={ this.setTimer }
                    shuffleAnswers={ this.shuffleAnswers }
                    changeAnswers={ changeAnswers }
                  />
                ) : (
                  <TrueOrFalseQuestion
                    question={ questions[index] }
                    disable={ disable }
                    endTime={ endTime }
                    timer={ timer }
                    border={ border }
                    submitAnswer={ this.submitAnswer }
                    setTimer={ this.setTimer }
                    shuffleAnswers={ this.shuffleAnswers }
                    changeAnswers={ changeAnswers }
                  />
                )}
            </div>
          ) }
        { showNext && (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ test ? history.push('/feedback') : this.clickState }
          >
            NEXT
          </button>
        ) }
      </main>
    );
  }
}

Questions.propTypes = {
  showNext: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.shape(PropTypes.object.isRequired),
    incorrect_answers: PropTypes.shape(PropTypes.object.isRequired),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  showNext: state.player.showNext,
  questions: state.player.questions.results,
});

export default connect(mapStateToProps)(Questions);
