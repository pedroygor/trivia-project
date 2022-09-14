import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  RankingConatiner,
  RankingContent,
  PlayerStyle,
  ButtonBackHome,
  LogoStyle,
} from './RankingStyle';
import star from '../../images/star.svg';
import logo from '../../images/logo.svg';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    const { players } = this.props;
    const n = -1;
    players.sort((a, b) => {
      if (a.score > b.score) return n;
      if (a.score < b.score) return 1;
      return 0;
    });
    this.setState({ players });
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { players } = this.state;
    return (
      <RankingConatiner>
        <RankingContent>
          <LogoStyle src={ logo } alt="logotipo" />
          <h1 data-testid="ranking-title">Ranking</h1>
          { players.map((player, index) => (
            <PlayerStyle key={ player.hash }>
              <div>
                <img src={ `https://www.gravatar.com/avatar/${player.hash}` } alt="avatar" />

                <p
                  data-testid={ `player-name-${index}` }
                >
                  { player.name }
                </p>
              </div>

              {/* <span>
                    Acertos:
                    {' '}
                    { player.assertions }
                  </span> */}
              <div>
                <img src={ star } alt="Estrela" />
                <span
                  data-testid={ `player-score-${index}` }
                >
                  { player.score }
                </span>
                <span>pontos</span>
              </div>

            </PlayerStyle>
          ))}
          <ButtonBackHome
            type="button"
            data-testid="btn-go-home"
            onClick={ this.handleClick }
          >
            Voltar Novamente
          </ButtonBackHome>
        </RankingContent>
      </RankingConatiner>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  players: PropTypes.arrayOf,
}.isRequired;

const mapStateToProps = (state) => ({
  players: state.game.players,
});

export default connect(mapStateToProps)(Ranking);
