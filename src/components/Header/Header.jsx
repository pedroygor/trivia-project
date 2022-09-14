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
    const { score, name } = this.props;
    return (
      <header>
        <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${hash}` } alt="avatar" />
        <div>
          Nome da Pessoa
          <p data-testid="header-player-name">
            { name }
          </p>
          <p data-testid="header-score">
            { score }
          </p>

        </div>
      </header>
    );
  }
}

Header.propTypes = {
  score: PropTypes.number,
  user: PropTypes.shape(PropTypes.object.isRequired),
  name: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  user: state.player,
  name: state.player.name,
});

export default connect(mapStateToProps)(Header);
