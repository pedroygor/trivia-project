import React, { Component } from 'react';
import Header from '../components/Header';
import Questions from '../components/Questions';

export default class Game extends Component {
  componentDidMount() {
    const { history } = this.props;
    const tokenVerify = JSON.parse(localStorage.getItem('token'));
    const lengthVerify = 64;
    if (tokenVerify.length !== lengthVerify) {
      localStorage.setItem('token', '');
      return history.push('/');
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
