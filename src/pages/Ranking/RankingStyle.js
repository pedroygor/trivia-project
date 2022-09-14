import styled from 'styled-components';
import bg from '../../images/background.jpg';
import { ButtonPlay } from '../Login/LoginStyle';

export const RankingConatiner = styled.section`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    font-family: 'Epilogue', sans-serif;
`;

export const RankingContent = styled.div`
  width: 489px;
  height: 488px;
  background-color: ${(props) => props.theme['white-100']};
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  gap: 13px;
  position: relative;

  h1 {
    color: ${(props) => props.theme['purple-700']};
    font-weight: 700;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: 0.12em;
    font-style: normal;
    text-transform: uppercase;
    margin-top: 124px;
  }  
  
`;

export const PlayerStyle = styled.div`
  width: 386px;
  height: 55px;
  background: ${(props) => props.theme['white-200']};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13px;

  p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const ButtonBackHome = styled(ButtonPlay)`
  width: 386px;
  height: 45px;
  text-transform: uppercase;
  margin-top: 23px;
  border-radius: 5px;
`;

export const LogoStyle = styled.img`
  width: 178px;
  height: 200px;
  position: absolute;
  top: calc(100px - 200px);
`;

export const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  height: 55px;
`;

export const ImageProfileStyle = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const StarStyle = styled.img`
    width: 28px;
    height: 28px;
`;

export const ScoreStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    height: 100%;
    width: 184px;
    background: ${(props) => props.theme['white-100']};
    border-radius: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   padding-left: 10px;

    span{
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.12em;
    }

    span:first-of-type {
      font-weight: 700;
    }
    
`;

export const PlayersConatiner = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  ::-webkit-scrollbar {
  width: 10px;
  }

  ::-webkit-scrollbar-track {
  background: ${(props) => props.theme['white-200']};
  }

  ::-webkit-scrollbar-thumb {
  background-color:  ${(props) => props.theme['green-300']};
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme['green-300']};
}

  scrollbar-width: thin;
  scrollbar-color: red;
`;
