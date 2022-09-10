import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveAsks } from '../redux/actions';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Game extends Component {
  // async componentDidMount() {
  //   const { history, asksDid } = this.props;
  //   const tokens = localStorage.getItem('token');
  //   const returnQuestions = await getAsksApi(tokens);
  //   asksDid(returnQuestions.results);
  //   if (returnQuestions.response_code !== 0) {
  //     localStorage.removeItem('token');
  //     history.push('/');
  //   }
  // }

  componentDidUpdate() {
    const { history, token } = this.props;
    console.log(token);
    const objVerify = {
      response_code: 3,
      results: [],
    };
    if (token.response_code === objVerify.response_code) {
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
  token: PropTypes.arrayOf(PropTypes.shape({
    response_code: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.game.questions,
});

const mapDispatchToProps = (dispatch) => ({
  asksDid: (value) => dispatch(saveAsks(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
