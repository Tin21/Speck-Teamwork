import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SpeckLogoImage from '../../assets/images/speck-menu-icon.png';
import {
  Header as HeaderWrapper,
  HeaderInner,
  HamburgerLogo,
  SpeckLogo,
  LogoWrapper,
  LogoText,
  UserAvatar,
  DropdownArrow,
  AvatarHamburgerWrapper,
  HeaderText,
  Menu,
  MenuLogoWrapper,
  MenuSpeckLogo,
  MenuLogoText,
  MenuInner,
  MenuLecturesIcon,
  MenuResultsIcon,
  MenuItem,
  MenuAchievementsIcon,
  MenuColleaugesIcon,
  MenuItemText,
  /* ActivePageIndicator, */
} from './LayoutStyle';

const Layout = ({ imgSrc, imgAlt }) => {
  return (
    <>
      <Menu>
        <MenuLogoWrapper>
          <NavLink to={'/'}>
            <MenuSpeckLogo src={SpeckLogoImage} alt="Speck logo" />
          </NavLink>

          <MenuLogoText>Learning Academy</MenuLogoText>
        </MenuLogoWrapper>
        <MenuInner>
          <MenuItem to={'/lectures'}>
            <MenuLecturesIcon />
            <MenuItemText>Lectures</MenuItemText>
            {/* <ActivePageIndicator /> */}
          </MenuItem>

          <MenuItem to={'/myresults'}>
            <MenuResultsIcon />
            <MenuItemText>My results</MenuItemText>
          </MenuItem>

          <MenuItem to={'/achievements'}>
            <MenuAchievementsIcon />
            <MenuItemText>Achievements</MenuItemText>
          </MenuItem>

          <MenuItem to={'/colleagues'}>
            <MenuColleaugesIcon />
            <MenuItemText>Colleauges</MenuItemText>
          </MenuItem>
        </MenuInner>
      </Menu>
      <HeaderWrapper>
        <HeaderInner>
          <LogoWrapper>
            <NavLink to={'/'}>
              <SpeckLogo />
            </NavLink>
            <LogoText> Learning Academy</LogoText>
          </LogoWrapper>
          <HeaderText>Lectures</HeaderText>
          <AvatarHamburgerWrapper>
            <UserAvatar src={imgSrc} alt={imgAlt} />
            <DropdownArrow />
            <HamburgerLogo />
          </AvatarHamburgerWrapper>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

Layout.PropTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Layout;
