import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as HamburgerIcon } from '../../assets/images/hamburger-icon.svg';
import { ReactComponent as SpeckIcon } from '../../assets/images/speck-icon.svg';
import { ReactComponent as DropdownArrowIcon } from '../../assets/images/dropdown-arrow.svg';

export const Header = styled.header`
  background-color: ${colors.bgSecondary};

  @media screen and (${breakpoints.desktopSmall}) {
    position: absolute;
    left: 240px;
    right: 0;
  }
`;

export const HeaderInner = styled.div`
  height: 60px;
  background-color: ${colors.bgSecondary};
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tabletSmall}) {
    padding: 10px 90px 10px 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 10px 40px;
  }
`;

export const HamburgerLogo = styled(HamburgerIcon)`
  display: block;
  height: 18px;
  width: 27px;
  margin-left: 37px;

  @media screen and (${breakpoints.desktopSmall}) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${breakpoints.desktopSmall}) {
    display: none;
  }
`;

export const SpeckLogo = styled(SpeckIcon)`
  path {
    fill: ${colors.bgSecondary};
  }
  margin-bottom: 0;

  @media screen and (${breakpoints.tabletSmall}) {
    width: 90px;
    height: 37px;
  }
`;

export const LogoText = styled.p`
  font-weight: 500;
  font-size: 7px;
  color: ${colors.logoText};
  letter-spacing: 0.1em;
  padding-left: 1px;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 8px;
  }
`;

export const UserAvatar = styled.img`
  display: none;

  @media screen and (${breakpoints.tabletSmall}) {
    display: block;
    object-fit: cover;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1.5px solid ${colors.avatarBorder};
  }
`;

export const DropdownArrow = styled(DropdownArrowIcon)`
  display: none;
  margin-left: 8px;

  @media screen and (${breakpoints.tabletSmall}) {
    display: block;
  }

  //hover: ?
`;

export const AvatarHamburgerWrapper = styled.div`
  height: 40px;
  width: 124px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const HeaderText = styled.p`
  display: none;

  @media screen and (${breakpoints.desktopSmall}) {
    display: block;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Menu = styled.div`
  display: none;

  @media screen and (${breakpoints.desktopSmall}) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 240px;
    background-color: ${colors.bgSecondary};
    border-right: 1.5px solid ${colors.border};
  }
`;

export const MenuLogoWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.desktopSmall}) {
    display: flex;
    flex-direction: column;
    padding: 32px 30px;
  }
`;

export const MenuSpeckLogo = styled.img`
  display: none;
  margin-bottom: 0;
  width: 108px;
  height: 42px;
  @media screen and (${breakpoints.tabletSmall}) {
    display: block;
  }
`;

export const MenuLogoText = styled.p`
  font-weight: 500;
  color: ${colors.logoText};
  letter-spacing: 0.1em;
  font-size: 10px;
`;
