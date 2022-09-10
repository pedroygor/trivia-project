import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';

export default class Game extends Component {
  componentDidMount() {
    const tokenVerify = JSON.parse(localStorage.getItem('token'));
    const objVerify = {
      response_code: 3,
      results: [],
    };
    if (tokenVerify && tokenVerify === objVerify) {
      const { history } = this.props;
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
};
