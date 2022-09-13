import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchTokenAPI, requestUser, resetGame } from '../redux/actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetGame());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handClickApi = () => {
    const { dispatch, history } = this.props;
    dispatch(fetchTokenAPI());
    dispatch(requestUser(this.state));
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
            type="button"
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
