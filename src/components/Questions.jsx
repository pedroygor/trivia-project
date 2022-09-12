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
    const { questions, showNext } = this.props;
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
            onClick={ test ? window.location.replace('/feedback') : this.clickState }
          >
            NEXT
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
  questions: state.game.questions.results,
});

export default connect(mapStateToProps)(Questions);
