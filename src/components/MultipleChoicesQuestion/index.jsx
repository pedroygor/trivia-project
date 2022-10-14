import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ClockClockwise } from 'phosphor-react';
import {
  ContainerAsnwer,
  ContainerChoice,
  ContentChoice,
  CategoryAnswer,
  CategoryTitle,
  TextQuestion,
  TimerQuestion,
  AnswerStyle,
  ButtonAnswer,
} from './style';

const OPTIONS = ['A', 'B', 'C', 'D'];

class MultipleChoicesQuestion extends Component {
  constructor(props) {
    super(props);
    const { shuffleAnswers, question } = this.props;
    this.state = { answers: shuffleAnswers(question) };
  }

  componentDidMount() {
    const { setTimer } = this.props;
    const velocidade = 1000;
    setInterval(() => setTimer(), velocidade);
  }

  componentDidUpdate(prevProps) {
    const { changeAnswers, question, shuffleAnswers } = this.props;
    if (changeAnswers !== prevProps.changeAnswers) {
      this.setState({ answers: shuffleAnswers(question) });
    }
  }

  render() {
    const { timer, disable, border, submitAnswer, question } = this.props;
    const { answers } = this.state;
    return (
      <ContainerChoice>
        { question && (
          <ContentChoice>
            <ContainerAsnwer>
              <CategoryAnswer
                data-testid="question-category"
              >
                <CategoryTitle>{question.category}</CategoryTitle>

              </CategoryAnswer>
              <p>{question.difficulty}</p>
              <TextQuestion data-testid="question-text">{question.question}</TextQuestion>
              <TimerQuestion>
                <ClockClockwise
                  size={ 25 }
                />
                <span>Tempo: </span>
                <div>
                  <span>
                    { timer }
                  </span>
                  <span>s</span>
                </div>

              </TimerQuestion>

            </ContainerAsnwer>
            <AnswerStyle data-testid="answer-options">
              {answers.map((element, index) => {
                if (element === question.correct_answer) {
                  return (
                    <ButtonAnswer
                      key="correct-answer"
                      data-testid="correct-answer"
                      type="button"
                      value={ element }
                      disabled={ disable }
                      onClick={ submitAnswer }
                      isPaintBorder={ border }
                      isCorrectAnswer
                    >
                      <div>{OPTIONS[index]}</div>
                      <p>{element}</p>
                    </ButtonAnswer>
                  );
                }
                return (
                  <ButtonAnswer
                    key={ index }
                    className={ border && 'wrong-answer' }
                    data-testid={ `wrong-answer-${index}` }
                    type="button"
                    value={ element }
                    disabled={ disable }
                    onClick={ submitAnswer }
                    isPaintBorder={ border }
                    isCorrectAnswer={ false }
                  >
                    <div>{OPTIONS[index]}</div>
                    <p>{element}</p>
                  </ButtonAnswer>
                );
              })}
            </AnswerStyle>
          </ContentChoice>
        ) }
      </ContainerChoice>
    );
  }
}

MultipleChoicesQuestion.propTypes = {
  changeAnswers: PropTypes.bool.isRequired,
  shuffleAnswers: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  border: PropTypes.bool.isRequired,
  disable: PropTypes.bool.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.shape(PropTypes.object.isRequired),
    incorrect_answers: PropTypes.shape(PropTypes.object.isRequired),
  }).isRequired,
  timer: PropTypes.number.isRequired,
};

export default connect()(MultipleChoicesQuestion);
