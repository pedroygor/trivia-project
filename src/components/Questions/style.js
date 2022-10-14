import styled from 'styled-components';
import bg from '../../images/bgQuestion.jpg';
import { ButtonPlay } from '../../pages/Login/style';

export const MainContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 150px;
`;

export const ContainerQuestion = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const Footer = styled.footer`
  background: ${(props) => props.theme['purple-700']};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageTrybe = styled.img`
  width: 37px;
  height: 42px;
  margin: auto;
  grid-column: 1 / 2;
`;

export const ButtonFooter = styled(ButtonPlay)`
  width: 450px;
  border-radius: 5px;
  height: 45px;
  margin: 20px auto;
  grid-column: 2 / 3;
`;

export const LogoStyleQuestion = styled.img`
  width: 200px;
  height: 222px;
  position: absolute;
  top: -111px;
 left: 250px;
`;
