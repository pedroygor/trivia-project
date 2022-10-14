import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import { savePlayers } from '../../redux/actions';
import logo from '../../images/logo.svg';
import {
  ContainerFeedback,
  LogoFeedback,
  MainFeedBack,
  ImgProfileFeedback,
  ContentFeedback,
  ButtonRankingFeedback,
  ButtonPlayAgain,
} from './style';

class Feedback extends Component {
  state = {
    hash: '',
  };

  componentDidMount() {
    const { dispatch, assertions, email, name, score } = this.props;
    const hash = md5(email).toString();
    const player = { assertions, name, score, hash };
    dispatch(savePlayers(player));
    this.setState({ hash });
  }

  resultFeedback = () => {
    const { answersMultiple, answersTrueOrFalse } = this.props;
    const result = answersMultiple + answersTrueOrFalse;
    const beBetter = 3;
    if (result >= beBetter) {
      return 'MANDOU BEM!';
    }
    if (result < beBetter) {
      return 'PODIA SER MELHOR...';
    }
  };

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { hash } = this.state;
    const { score, assertions } = this.props;
    const resultFeedback = this.resultFeedback();
    return (
      <ContainerFeedback>
        <MainFeedBack>
          <LogoFeedback src={ logo } alt="logo" />
          <ContentFeedback
            assertions={ assertions }
          >
            <div>
              <ImgProfileFeedback
                src={ `https://www.gravatar.com/avatar/${hash}` }
                alt="avatar"
                assertions={ assertions }
              />
              <h1 data-testid="feedback-text">{resultFeedback}</h1>
              <p data-testid="feedback-total-score">
                Você acertou
                {' '}
                {assertions}
                {' '}
                {assertions > 1 ? 'questões' : 'questão'}
              </p>
              <p data-testid="feedback-total-question">
                Um total de
                {' '}
                {score}
                {' '}
                {score > 1 ? 'pontos' : 'ponto'}
              </p>
            </div>
          </ContentFeedback>
        </MainFeedBack>
        <footer>
          <Link to="/ranking">
            <ButtonRankingFeedback
              type="button"
              data-testid="btn-ranking"
            >
              Ranking

            </ButtonRankingFeedback>
          </Link>
          <ButtonPlayAgain
            type="button"
            data-testid="btn-play-again"
            onClick={ this.handleClick }
          >
            Jogar Novamente
          </ButtonPlayAgain>
        </footer>
      </ContainerFeedback>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  answersMultiple: PropTypes.number,
  answersTrueOrFalse: PropTypes.number,
  score: PropTypes.number,
  assertions: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => {
  console.log(state.player);
  return {
    answersMultiple: state.player.answers,
    assertions: state.player.assertions,
    score: state.player.score,
    answersTrueOrFalse: state.player.trueAnswers,
    name: state.player.name,
    email: state.player.email,
  };
};

export default connect(mapStateToProps)(Feedback);
