import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MultipleChoicesQuestion from './MultipleChoicesQuestion';
import TrueOrFalseQuestion from './TrueOrFalseQuestion ';

class Questions extends Component {
  state = {
    index: 0,
  };

  clickState = () => {
    const { index } = this.state;
    this.setState({
      index: index + 1,
    });
  };

  render() {
    const { questions } = this.props;
    console.log(questions);
    const { index } = this.state;
    return (
      <main>
        { questions && questions.length > 0
          && (
            <div>
              { questions[index].type === 'multiple'
                ? <MultipleChoicesQuestion question={ questions[index] } />
                : <TrueOrFalseQuestion question={ questions[index] } />}
            </div>
          ) }
        <button
          data-testid="btn-next"
          type="button"
          onClick={ this.clickState }
        >
          Next
        </button>
      </main>
    );
  }
}
Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
  })).isRequired,
};
const mapStateToProps = (state) => ({
  responseCode: state.game.responseCode,
  questions: state.game.questions.results,
  token: state.token.token,
});

export default connect(mapStateToProps)(Questions);
