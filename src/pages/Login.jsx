import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchTokenAPI, requestUser } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handClickApi = (event) => {
    event.preventDefault();
    const { tokenPlayer, userRequest, history } = this.props;
    const { username, email } = this.state;
    tokenPlayer();
    userRequest(username, email);
    history.push('/game');
  };

  render() {
    const { username, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              data-testid="input-player-name"
              onChange={ this.handleChange }
              value={ username }
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              data-testid="input-gravatar-email"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ !username || !email }
            onClick={ this.handClickApi }
          >
            Play
          </button>
          <Link to="/config">
            <button
              type="button"
              data-testid="btn-settings"
            >
              Settings
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  userRequest: PropTypes.func.isRequired,
  tokenPlayer: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  tokenPlayer: () => dispatch(fetchTokenAPI()),
  userRequest: (username, email) => dispatch(requestUser(username, email)),
});

export default connect(null, mapDispatchToProps)(Login);
