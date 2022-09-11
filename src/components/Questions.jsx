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
    const { questions, showNext } = this.props;
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
        { showNext && (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ this.clickState }
          >
            Next
          </button>
        ) }
      </main>
    );
  }
}
Questions.propTypes = {
  showNext: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
const mapStateToProps = (state) => ({
  showNext: state.game.showNext,
  responseCode: state.game.responseCode,
  questions: state.game.questions.results,
  token: state.token.token,
});

export default connect(mapStateToProps)(Questions);
