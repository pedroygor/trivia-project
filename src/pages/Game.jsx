import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Questions from '../components/Questions/Questions';

const GameContainer = styled.div`
  display: grid;
  grid-template-rows: 110px 1fr;
  height: 100vh;
`;

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
