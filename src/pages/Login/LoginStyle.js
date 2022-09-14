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
    border: 1px solid ${(props) => props.theme['white-200']};
    width: 520px;
    border-radius: 0px;
  }

  button:active {
    background: ${(props) => props.theme['green-700']};
  }
`;

export const FormLogin = styled.form`
  width: 38.375rem;
  height: 18.625rem;
  background: ${(props) => props.theme['white-100']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  padding-top: 2rem;
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
`;
export const ButtonPlay = styled.button`
  width: 520px;
  padding: 12px 16px;
  border: 0;
  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['white-100']};
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  transition: all 0.3ms;
`;

export const LinksContainer = styled.div`
  width: 520px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonLink = styled(ButtonPlay)`
  width: 250px;
  background: ${(props) => props.theme['green-700']};
`;
