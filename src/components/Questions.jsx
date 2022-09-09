import React, { Component } from 'react';
import MultipleChoicesQuestion from './MultipleChoicesQuestion';
import TrueOrFalseQuestion from './TrueOrFalseQuestion ';

export default class Questions extends Component {
  render() {
    return (
      <main>
        <MultipleChoicesQuestion />
        <TrueOrFalseQuestion />
      </main>
    );
  }
}
