import React from 'react';
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
} from './LayoutStyle';

const Layout = ({ imgSrc, imgAlt }) => {
  return (
    <>
      <Menu>
        <MenuLogoWrapper>
          <MenuSpeckLogo src={SpeckLogoImage} alt="Speck logo" />
          <MenuLogoText>Learning Academy</MenuLogoText>
        </MenuLogoWrapper>
        <MenuInner>
          <MenuItem>
            <MenuLecturesIcon />
            <MenuItemText>Lectures</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuResultsIcon />
            <MenuItemText>My Results</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuAchievementsIcon />
            <MenuItemText>Achievements</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuColleaugesIcon />
            <MenuItemText>Colleauges</MenuItemText>
          </MenuItem>
        </MenuInner>
      </Menu>
      <HeaderWrapper>
        <HeaderInner>
          <LogoWrapper>
            <SpeckLogo />
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
