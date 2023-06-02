import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as HamburgerIcon } from '../../assets/images/hamburger-icon.svg';
import { ReactComponent as SpeckIcon } from '../../assets/images/speck-icon.svg';

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
`;

export const HeaderInner = styled.div`
  height: 54px;
  background-color: ${colors.bgSecondary};
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerLogo = styled(HamburgerIcon)`
  display: block;
  height: 18px;
  width: 27px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpeckLogo = styled(SpeckIcon)`
  path {
    fill: ${colors.bgSecondary};
  }
  margin-bottom: 0;
`;

export const LogoText = styled.p`
  font-weight: 500;
  font-size: 7px;
  color: #626267;
  letter-spacing: 0.1em;
  padding-left: 1px;
`;
