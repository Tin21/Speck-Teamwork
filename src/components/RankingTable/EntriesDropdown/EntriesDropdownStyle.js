import styled from 'styled-components';
import { colors, breakpoints } from '../../../utils/styles/theme';

export const HeaderEntriesWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 8px;
  align-items: center;
`;

export const HeaderEntriesText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.textPrimaryGrey};

  ${(props) =>
    props.isEntries &&
    `
    display: none;

    @media screen and (${breakpoints.tabletSmall}) {
    display: block;
    }
  `}
`;

export const HeaderSelect = styled.select`
  padding: 12px 12px;
  background-color: ${colors.white};
  border: solid 1px ${colors.avatarBorder};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  margin-right: 6px;
`;
