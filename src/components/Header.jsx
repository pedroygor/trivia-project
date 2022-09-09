import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    hash: '',
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({ hash: md5(user.email).toString() });
  }

  render() {
    const { hash } = this.state;
    const { score, user } = this.props;
    return (
      <header>
        <div>
          <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${hash}` } alt="avatar" />
        </div>
        Nome:
        <div data-testid="header-player-name">
          { user.name }
        </div>
        Score:
        <div data-testid="header-score">
          { score }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  score: state.game.score,
  user: state.token,
});

export default connect(mapStateToProps)(Header);
