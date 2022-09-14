import styled, { css } from 'styled-components';

export const ContainerChoice = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  font-family: 'Epilogue', sans-serif;
  position: relative;
`;

export const ContentChoice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 50px;
`;

export const ContainerAsnwer = styled.div`
  width: 439px;
  height: 300px;
  background: ${(props) => props.theme['white-100']};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  bottom: -38px;
  left: 100px;
`;

export const CategoryAnswer = styled.div`
  width: 380px;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  background: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
  color: ${(props) => props.theme['white-100']};
`;

export const CategoryTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
`;

export const TextQuestion = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

export const TimerQuestion = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.red};
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AnswerStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  grid-column: 2 / 3;
 
`;

export const ButtonAnswer = styled.button`
  width: 450px;
  height: 64px;
  background: ${(props) => props.theme['white-100']};
  border: 1px solid ${(props) => props.theme['white-100']};
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  ${(props) => {
    if (props.isPaintBorder && props.isCorrectAnswer) {
      return css`
        filter: drop-shadow(0px -1px 16px #2FC18C);
      `;
    }
    if (props.isPaintBorder && !props.isCorrectAnswer) {
      return css`
        filter: drop-shadow(0px 0px 22px #B83B3B);
      `;
    }
  }}

  &:active {
    background:  ${(props) => props.theme['white-300']};
  }

  div {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme['white-300']};
    margin-left: 10px;
    color: ${(props) => props.theme['white-100']};
  }

  p {
    color: ${(props) => props.theme.black};
  }
`;
