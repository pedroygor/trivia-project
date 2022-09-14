import styled from 'styled-components';
import bg from '../../images/background.svg';

export const LoginContainer = styled.section`
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

  input:focus {
    outline: 1px solid ${(props) => props.theme['green-300']};
  }

  img {
    width: 14.375rem;
  }
  
  input {
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.white};
    width: 520px;
    border-radius: 0px
  }

  button {
    width: 520px;
    padding: 12px 16px;
    border: 0;
    background: ${(props) => props.theme['green-300']};
    color: #fff;
    font-family: 'Epilogue', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    transition: all 0.3ms;

  }

  button:active {
    background: ${(props) => props.theme['green-700']};
  }
`;

export const FormLogin = styled.form`
  width: 38.375rem;
  height: 16.625rem;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  padding-top: 2rem;
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
  
`;
