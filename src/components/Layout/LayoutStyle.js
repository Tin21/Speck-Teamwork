import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as HamburgerIcon } from '../../assets/images/hamburger-icon.svg';
import { ReactComponent as SpeckIcon } from '../../assets/images/speck-icon.svg';
import { ReactComponent as DropdownArrowIcon } from '../../assets/images/dropdown-arrow.svg';
import { ReactComponent as LecturesIcon } from '../../assets/images/lectures-icon.svg';
import { ReactComponent as ResultsIcon } from '../../assets/images/results-icon.svg';
import { ReactComponent as AchievementsIcon } from '../../assets/images/achievements-icon.svg';
import { ReactComponent as ColleaugesIcon } from '../../assets/images/colleauges-icon.svg';
import { ReactComponent as CancelIcon } from '../../assets/images/cancel-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/logout-icon.svg';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.04);

  @media screen and (${breakpoints.desktop}) {
    left: 240px;
    right: 0;
  }
`;

export const HeaderInner = styled.div`
  height: 60px;
  background-color: ${colors.bgSecondary};
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 70px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0 40px;
  }
`;

export const HamburgerLogo = styled(HamburgerIcon)`
  display: block;
  height: 18px;
  width: 27px;
  margin-left: 37px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const SpeckLogo = styled(SpeckIcon)`
  path {
    fill: ${colors.bgSecondary};
  }
  margin-bottom: 0;

  @media screen and (${breakpoints.tablet}) {
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

  @media screen and (${breakpoints.tablet}) {
    font-size: 8px;
  }
`;

export const UserAvatar = styled.img`
  display: none;
  object-fit: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  @media screen and (${breakpoints.desktop}) {
    display: block;
    border: 1.5px solid ${colors.avatarBorder};
  }

  ${(props) =>
    props.isInHamburgerMenu &&
    `
    display: block;
    margin: 15px 16px 10px 16px;
    width: 24px;
    height: 24px;
  `}
`;

export const DropdownArrow = styled(DropdownArrowIcon)`
  display: none;
  margin-left: 8px;

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const AvatarHamburgerWrapper = styled.div`
  height: 40px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const HeaderText = styled.p`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const LeftContainer = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: flex;
    position: sticky;
    bottom: 0;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  /* position: sticky;
  bottom: 0;  */
`;

export const Menu = styled.div`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
    left: 0;
    top: 0;
    width: 242px;
    height: 100%;
    background-color: ${colors.bgSecondary};
    border-right: 2px solid ${colors.border};
  }
`;

export const MenuLogoWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    padding: 32px 30px 0 30px;
  }
`;

export const MenuSpeckLogo = styled.img`
  margin-bottom: 0;
  width: 108px;
  height: 42px;
`;

export const MenuLogoText = styled.p`
  font-weight: 500;
  color: ${colors.logoText};
  letter-spacing: 0.1em;
  font-size: 10px;
  margin-bottom: 56px;
`;

export const MenuInner = styled.nav`
  height: 100vh;
  width: 224px;
  margin-left: 16px;
`;

export const MenuItem = styled(NavLink)`
  width: 100%;
  height: 43px;
  background-color: ${colors.bgMenuItem};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  text-decoration: none;
  color: ${colors.textPrimary};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  transition: font-weight 0.2s ease-out, background-color 0.2s ease-out;

  &:hover {
    font-weight: 600;
    background-color: ${colors.lighterRed};
  }

  &.active {
    background-color: ${colors.lightRed};
    font-weight: 600;
  }

  //red dot active page
  &.active::after {
    content: '';
    position: absolute;
    left: 214px;
    background-color: ${colors.redPrimary};
    border-radius: 50%;
    width: 9px;
    height: 9px;
  }
`;

export const MenuItemText = styled.p`
  font-size: 16px;
  color: ${colors.textPrimaryGrey};
`;

export const MenuLecturesIcon = styled(LecturesIcon)`
  margin: 0 16px;
  width: 20px;
`;

export const MenuResultsIcon = styled(ResultsIcon)`
  margin: 0 16px;
  width: 20px;
`;

export const MenuColleaugesIcon = styled(ColleaugesIcon)`
  margin: 0 16px;
  width: 20px;
`;

export const MenuAchievementsIcon = styled(AchievementsIcon)`
  margin: 0 16px;
  width: 20px;
`;

export const MenuLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  color: ${colors.textPrimary};
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 260px;
  right: 0;
  top: 0;
  background-color: ${colors.bgSecondary};

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerMenuTitleWrapper = styled.div`
  margin: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerMenuTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
`;

export const HamburgerMenuCancel = styled(CancelIcon)`
  width: 12px;
  height: 12px;
`;

export const HamburgerMenuInner = styled.nav`
  padding: 5px 18px 200px 18px;
`;

export const HamburgerMenuBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.bgOpaque};
  z-index: 3;
  height: 100%;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;
export const HamburgerMenuLogoutWrapper = styled.div`
  width: 92px;
  margin-left: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerMenuLogoutIcon = styled(LogoutIcon)`
  height: 24px;
  width: 24px;
`;

export const HamburgerMenuLogoutText = styled.p`
  font-weight: 500;
  color: ${colors.textSecondaryGrey};
`;

export const ProfileDropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 44px;
  right: 40px;
  z-index: 1;
  width: 306px;
  height: max-content;
  background-color: ${colors.bgSecondary};
  box-shadow: 0px 1px 6px rgba(89, 89, 89, 0.04),
    0px 2px 16px rgba(119, 119, 119, 0.1);
  border-radius: 8px;

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const DropdownMenuItem = styled.div`
  display: flex;
  align-items: center;
  /* padding: 12px 18px; */
  height: 48px;
  width: 100%;
  transition: background-color 0.2s ease-out, border-radius 0.2s ease-out;

  &:hover {
    background-color: ${colors.lightRed};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    ${(props) =>
      props.isBottomItem &&
      `
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  `}
  }
`;

export const DropdownMenuText = styled.p`
  margin: 12px 18px;
  font-weight: 400;
  font-size: 16px;
`;

export const LectureLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  text-decoration-line: underline;
  color: ${colors.textLink};
`;

export const LectureBreadcrumbText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: (${colors.textPrimaryGrey});
`;

export const LectureBreadcrumbWrapper = styled.div`
  display: none;
  height: max-content;
  width: max-content;
  gap: 12px;
  flex-direction: row;
  align-items: center;

  @media screen and (${breakpoints.desktop}) {
    display: flex;
  }
`;
