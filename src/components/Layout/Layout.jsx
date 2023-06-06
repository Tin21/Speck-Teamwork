import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
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
  LeftContainer,
  RightContainer,
  HamburgerMenu,
  HamburgerMenuTitleWrapper,
  HamburgerMenuTitle,
  HamburgerMenuCancel,
  HamburgerMenuInner,
} from './LayoutStyle';
import { Outlet } from 'react-router-dom';

const Layout = ({ imgSrc, imgAlt }) => {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

  const changeHamburgerMenuState = () => {
    setHamburgerMenuActive(!hamburgerMenuActive);
  };

  return (
    <>
      <main>
        <LeftContainer>
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

              <MenuItem to={'/colleauges'}>
                <MenuColleaugesIcon />
                <MenuItemText>Colleauges</MenuItemText>
              </MenuItem>
            </MenuInner>
          </Menu>

          <RightContainer>
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
                  <HamburgerLogo onClick={() => changeHamburgerMenuState()} />
                </AvatarHamburgerWrapper>

                {hamburgerMenuActive && (
                  <HamburgerMenu>
                    <HamburgerMenuTitleWrapper>
                      <HamburgerMenuTitle>Menu</HamburgerMenuTitle>
                      <HamburgerMenuCancel
                        onClick={() => changeHamburgerMenuState()}
                      />
                    </HamburgerMenuTitleWrapper>
                    <HamburgerMenuInner>
                      <MenuItem
                        to={'/lectures'}
                        onClick={() => changeHamburgerMenuState()}>
                        <MenuLecturesIcon />
                        <MenuItemText>Lectures</MenuItemText>
                      </MenuItem>

                      <MenuItem
                        to={'/myresults'}
                        onClick={() => changeHamburgerMenuState()}>
                        <MenuResultsIcon />
                        <MenuItemText>My results</MenuItemText>
                      </MenuItem>

                      <MenuItem
                        to={'/achievements'}
                        onClick={() => changeHamburgerMenuState()}>
                        <MenuAchievementsIcon />
                        <MenuItemText>Achievements</MenuItemText>
                      </MenuItem>

                      <MenuItem
                        to={'/colleauges'}
                        onClick={() => changeHamburgerMenuState()}>
                        <MenuColleaugesIcon />
                        <MenuItemText>Colleauges</MenuItemText>
                      </MenuItem>

                      {/* <MenuItem to={'/'} onClick={() => changeHamburgerMenuState()}>
                  <UserAvatar src={imgSrc} alt={imgAlt} />
                  <MenuItemText>Your Profile</MenuItemText>
                </MenuItem> */}
                    </HamburgerMenuInner>
                  </HamburgerMenu>
                )}
              </HeaderInner>
            </HeaderWrapper>
            <Outlet />
          </RightContainer>
        </LeftContainer>
      </main>
    </>
  );
};

Layout.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Layout;
