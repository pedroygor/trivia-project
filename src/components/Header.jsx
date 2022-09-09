import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  state = {
    hash: '',
  };

  componentDidMount() {
    const { user: email } = this.props;
    this.setState({ hash: md5(email).toString() });
  }

  render() {
    const { hash } = this.state;
    const { game: score, user: name } = this.props;
    return (
      <header>
        <div data-testid="header-profile-picture">
          <img src={ `https://www.gravatar.com/avatar/${hash}` } alt="avatar" />
        </div>
        <div data-testid="header-player-name">
          Nome:
          { name }
        </div>
        <div data-testid="header-score">
          Pontuação:
          { score }
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game.data,
  user: state.token,
});

export default connect(mapStateToProps)(Header);
