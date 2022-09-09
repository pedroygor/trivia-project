import React, { Component } from 'react';
import { getAsks } from '../servicesApi';

class Game extends Component {
  async componentDidMount() {
    const { history } = this.props;
    const tokenVerify = JSON.parse(localStorage.getItem('token'));
    const lengthVerify = 64;
    if (tokenVerify.length !== lengthVerify) {
      localStorage.setItem('token', '');
      return history.push('/');
    }
    const returnResult = await getAsks(tokenVerify);
    console.log(returnResult);
  }

  render() {
    return (
      <div>
        asda
      </div>
    );
  }
}

export default Game;
