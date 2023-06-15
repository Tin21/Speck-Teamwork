import styled from 'styled-components';
import { colors } from '../../../utils/styles/theme';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${colors.avatarBorder};
  background-color: ${colors.white};
  width: 250px;
  padding: 0 10px;
`;

export const SearchBarInput = styled.input`
  padding: 12.5px 8px;
  font-size: 15px;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
