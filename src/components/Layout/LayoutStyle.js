import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as HamburgerIcon } from '../../assets/images/hamburger-icon.svg';
import { ReactComponent as SpeckIcon } from '../../assets/images/speck-icon.svg';
import { ReactComponent as DropdownArrowIcon } from '../../assets/images/dropdown-arrow.svg';
import { ReactComponent as LecturesIcon } from '../../assets/images/lectures-icon.svg';
import { ReactComponent as ResultsIcon } from '../../assets/images/results-icon.svg';
import { ReactComponent as AchievementsIcon } from '../../assets/images/achievements-icon.svg';
import { ReactComponent as ColleaugesIcon } from '../../assets/images/colleauges-icon.svg';

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.04);

  @media screen and (${breakpoints.desktop}) {
    //position: absolute;
    left: 242px;
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
    padding: 0 90px 0 70px;
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

  @media screen and (${breakpoints.tablet}) {
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

  @media screen and (${breakpoints.tablet}) {
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

  @media screen and (${breakpoints.desktop}) {
    display: block;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const LeftContainer = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: flex;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
    left: 0;
    top: 0;
    width: 240px;
    height: 100vh;
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
  width: 224px;
  margin-left: 16px;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 43px;
  background-color: ${colors.bgMenuItem};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const MenuItemText = styled.p`
  font-weight: 400;
  font-size: 16px;
`;

export const MenuLecturesIcon = styled(LecturesIcon)`
  padding: 15px 18px 10px 17px;
  width: 20px;
`;

export const MenuResultsIcon = styled(ResultsIcon)`
  padding: 15px 18px 10px 17px;
  width: 20px;
`;

export const MenuColleaugesIcon = styled(ColleaugesIcon)`
  padding: 15px 18px 10px 17px;
  width: 20px;
`;

export const MenuAchievementsIcon = styled(AchievementsIcon)`
  padding: 15px 18px 10px 17px;
  width: 20px;
`;
