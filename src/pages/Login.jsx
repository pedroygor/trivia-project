import React, { Component } from 'react';

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
              data-testid="input-player-name"
              onChange={ this.handleChange }
              value={ username }
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              data-testid="input-gravatar-email"
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
          >
            Play

          </button>
        </form>
      </div>
    );
  }
}

export default Login;
