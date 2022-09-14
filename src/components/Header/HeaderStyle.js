import styled from 'styled-components';
import { Gear } from 'phosphor-react';

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 80px;
  background: ${(props) => props.theme['white-100']};
`;

export const ContainerProfile = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;

  span{
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.12em;
    }

    span:last-of-type {
      font-weight: 700;
    }
`;

export const GearStyle = styled(Gear)`
  color: ${(props) => props.theme.gray};
  width: 32px;
  height: 32px;
`;
