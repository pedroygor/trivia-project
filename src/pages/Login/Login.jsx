import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { fetchTokenAPI, requestUser, resetGame } from '../../redux/actions';
import { FormLogin, LoginContainer } from './LoginStyle';

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
      <LoginContainer>
        <img src={ logo } alt="logotipo" />
        <FormLogin>
          <label htmlFor="email">
            <input
              data-testid="input-gravatar-email"
              placeholder="Qual é o seu e-mail do gravatar?"
              type="email"
              name="email"
              id="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>

          <label htmlFor="username">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Qual é o seu nome?"
              data-testid="input-player-name"
              onChange={ this.handleChange }
              value={ username }
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
          {/* <Link to="/config">
            <button
              type="button"
              data-testid="btn-settings"
            >
              Settings
            </button>
          </Link>
          <Link to="/ranking">
            <button
              type="button"
              data-testid="btn-ranking"
            >
              Ranking
            </button>
          </Link> */}
        </FormLogin>
      </LoginContainer>
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
