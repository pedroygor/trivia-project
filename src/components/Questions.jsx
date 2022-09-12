import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MultipleChoicesQuestion from './MultipleChoicesQuestion';
import TrueOrFalseQuestion from './TrueOrFalseQuestion ';

class Questions extends Component {
  state = {
    index: 0,
    test: false,
  };

  clickState = () => {
    const MAX = 4;
    const { index } = this.state;
    if (index === MAX) {
      return this.setState({ test: true });
    }
    this.setState({
      index: index + 1,
    });
  };

  render() {
    const { questions, showNext, history } = this.props;
    const { index, test } = this.state;
    console.log(test, index);
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
            onClick={ test ? history.push('/feedback') : this.clickState }
          >
            NEXT
          </button>
        ) }
      </main>
    );
  }
}

Questions.propTypes = {
  showNext: PropTypes.bool,
  questions: PropTypes.arrayOf(PropTypes.object.isRequired),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  showNext: state.player.showNext,
  questions: state.player.questions.results,
});

export default connect(mapStateToProps)(Questions);
