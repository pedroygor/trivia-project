import styled from 'styled-components';
import bg from '../../images/background.jpg';

const MIN_ASSERTIONS = 3;
export const ContainerFeedback = styled.div`
  display: grid;
  grid-template-rows: 1fr 250px;
  height: 100vh;

  footer {
    background: ${(props) => props.theme['purple-800']};
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 130px;
    }
  }
`;

export const MainFeedBack = styled.main`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  `;

export const ContentFeedback = styled.div`
  width: 439px;
  height: 278px;
  background: ${(props) => props.theme['white-100']};
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 auto;
  position: absolute;
  bottom: -130px;

  div {
    position: relative;
    width: 439px;
    height: 278px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    gap: 13px;

    h1 {
      margin-top: 80px;
      font-weight: 700;
      font-size: 30px;
      line-height: 150%;
      color: ${(props) => (props.assertions < MIN_ASSERTIONS
    ? props.theme.red : props.theme['green-300'])}
    }

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: #B5B5B5;
    }
  }
`;

export const LogoFeedback = styled.img`
  width: 136px;
  height: 155px;
`;

export const ImgProfileFeedback = styled.img`
  width: 214px;
  height: 214px;
  border: 4px solid;
  border-color: ${(props) => (props.assertions < MIN_ASSERTIONS
    ? props.theme.red : props.theme['green-300'])};;
  border-radius: 50%;
  position: absolute;
  top: -107px;
`;

const GenericButton = styled.button`
  width: 212.5px;
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  color:  ${(props) => props.theme['white-100']};
  text-transform: uppercase;
`;

export const ButtonRankingFeedback = styled(GenericButton)`
  background: #00D5E2;
`;

export const ButtonPlayAgain = styled(GenericButton)`
  background: ${(props) => props.theme['green-300']};
  margin-left: 13px;
`;
