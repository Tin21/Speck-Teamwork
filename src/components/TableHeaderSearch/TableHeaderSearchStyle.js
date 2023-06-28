import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as CancelIcon } from '../../assets/images/cancel-icon.svg';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${colors.avatarBorder};
  background-color: ${colors.bgSecondary};
  width: 250px;
  padding: 0 10px;

  ${(props) =>
    props.isTablet &&
    `
      display: none;

      @media screen and (${breakpoints.tabletSmall}) {
        display: flex;
  }
  `}

  ${(props) =>
    props.isMobile &&
    `
      display: flex;

      @media screen and (${breakpoints.tabletSmall}) {
        display: none;
  }
  `}
`;

export const SearchBarInput = styled.input`
  font-weight: 400;
  line-height: 18px;
  padding: 12.5px 8px;
  font-size: 15px;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  ${(props) =>
    props.isMobile &&
    `
      height: 24px;
      width: 24px;

      @media screen and (${breakpoints.tabletSmall}) {
        display: none;
  }
  `}
`;

export const SearchCancelIcon = styled(CancelIcon)`
  min-height: 12px;
  min-width: 12px;
`;
