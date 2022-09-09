import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MultipleChoicesQuestion from './MultipleChoicesQuestion';
import TrueOrFalseQuestion from './TrueOrFalseQuestion ';
// import { requestSaveQuestions } from '../redux/actions/game';

class Questions extends Component {
  // componentDidMount() {
  //   this.fetchQuestions();
  // }

  // fetchQuestions = async () => {
  //   const { token, dispatch } = this.props;
  //   const URL_API = `https://opentdb.com/api.php?amount=5&token=${token}`;
  //   const response = await fetch(URL_API);
  //   const objeto = await response.json();
  //   dispatch(requestSaveQuestions(objeto.results));
  // };

  render() {
    return (
      <main>
        <MultipleChoicesQuestion />
        <TrueOrFalseQuestion />
      </main>
    );
  }
}

// Questions.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   token: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  token: state.token.token,
  questions: state.game.questions,
});

export default connect(mapStateToProps)(Questions);
