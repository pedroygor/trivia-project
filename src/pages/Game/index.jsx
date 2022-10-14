import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/index';
import Questions from '../../components/Questions/index';
import GameContainer from './style';

class Game extends Component {
  componentDidUpdate() {
    const { history, questions } = this.props;
    const objVerify = {
      response_code: 3,
      results: [],
    };
    if (questions.response_code === objVerify.response_code) {
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  render() {
    const { history } = this.props;
    return (
      <GameContainer>
        <Header />
        <Questions history={ history } />
      </GameContainer>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.player.questions,
});

export default connect(mapStateToProps)(Game);
