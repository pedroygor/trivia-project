import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';

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
    return (
      <div>
        <Header />
        <Questions />
      </div>
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
  questions: state.game.questions,
});

export default connect(mapStateToProps)(Game);
