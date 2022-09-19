import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonBackHome,
  LogoStyle,
  RankingConatiner,
  RankingContent,
} from '../Ranking/RankingStyle';
import logo from '../../images/logo.svg';
import { FormConfig, SelectConfig } from './Config';

class Config extends Component {
  render() {
    const { history } = this.props;
    return (
      <RankingConatiner>
        <RankingContent>
          <LogoStyle src={ logo } alt="logotipo" />
          <h1 data-testid="ranking-title">Congigurações</h1>
          <FormConfig>
            <SelectConfig name="trivia_category">
              <option value="any">Categoria</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
              <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </SelectConfig>

            <SelectConfig name="trivia_difficulty">
              <option value="any">Dificuldade</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </SelectConfig>

            <SelectConfig name="trivia_type">
              <option value="any">Tipo</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </SelectConfig>

            <ButtonBackHome
              onClick={ () => history.push('/') }
            >
              Jogar

            </ButtonBackHome>
          </FormConfig>
        </RankingContent>
      </RankingConatiner>
    );
  }
}

export default Config;

Config.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
