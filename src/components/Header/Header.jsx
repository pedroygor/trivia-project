import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { Gear } from 'phosphor-react';
import star from '../../images/star.svg';
import {
  ImageProfileStyle,
  StarStyle,
} from '../../pages/Ranking/RankingStyle';
import { HeaderStyle, ContainerProfile } from './HeaderStyle';

class Header extends Component {
  state = {
    hash: '',
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({ hash: md5(user.email).toString() });
  }

  render() {
    const { hash } = this.state;
    const { score, name } = this.props;
    return (
      <HeaderStyle>
        <ContainerProfile>
          <ImageProfileStyle data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${hash}` } alt="avatar" />
          <p data-testid="header-player-name">
            { name }
          </p>
        </ContainerProfile>

        <ContainerProfile>
          <StarStyle src={ star } alt="Estrela" />
          <span>Pontos:</span>
          <span data-testid="header-score">
            { score }
          </span>

        </ContainerProfile>
        <Gear
          color="#B5B5B5"
          size={ 32 }
          weight="fill"
        />

      </HeaderStyle>
    );
  }
}

Header.propTypes = {
  score: PropTypes.number,
  user: PropTypes.shape(PropTypes.object.isRequired),
  name: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  user: state.player,
  name: state.player.name,
});

export default connect(mapStateToProps)(Header);
