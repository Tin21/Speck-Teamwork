import styled from 'styled-components';
import { colors } from '../../../utils/styles/theme';

export const HeaderEntriesWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 8px;
  align-items: center;
`;

export const HeaderEntriesText = styled.div`
  font-size: 12;
  font-weight: 400;
  color: ${colors.textPrimaryGrey};
`;

export const HeaderSelect = styled.select`
  padding: 15px 12px;
  background-color: ${colors.white};
  border: solid 1px ${colors.avatarBorder};
  border-radius: 8px;
`;
