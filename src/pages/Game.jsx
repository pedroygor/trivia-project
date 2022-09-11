import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveAsks } from '../redux/actions';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Game extends Component {
  componentDidUpdate() {
    const { history, token } = this.props;
    const objVerify = {
      response_code: 3,
      results: [],
    };
    if (token.response_code === objVerify.response_code) {
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  token: PropTypes.arrayOf(PropTypes.shape({
    response_code: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.game.questions,
});

const mapDispatchToProps = (dispatch) => ({
  asksDid: (value) => dispatch(saveAsks(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
