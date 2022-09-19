import styled from 'styled-components';

export const FormConfig = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  
`;

export const SelectConfig = styled.select`
  padding: 12px 16px;
  width: 387px;
  height: 45px;
  background: ${(props) => props.theme['white-100']};
  border: 1px solid ${(props) => props.theme['white-200']};
  border-radius: 0px;
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #6B7588;
  position: relative;

`;
