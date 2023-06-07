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
  HamburgerMenuBackground,
  HamburgerMenuLogoutWrapper,
  HamburgerMenuLogoutIcon,
  HamburgerMenuLogoutText,
  ProfileDropdownMenu,
  DropdownMenuItem,
  DropdownMenuText,
} from './LayoutStyle';
import { Outlet } from 'react-router-dom';

const Layout = ({ imgSrc, imgAlt }) => {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const [profileDropdownActive, setProfileDropdownActive] = useState(false);

  const changeHamburgerMenuState = () => {
    setHamburgerMenuActive(!hamburgerMenuActive);
  };

  const changeProfileDropdownState = () => {
    setProfileDropdownActive(!profileDropdownActive);
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
                <AvatarHamburgerWrapper
                  onClick={() => changeProfileDropdownState()}
                >
                  <UserAvatar src={imgSrc} alt={imgAlt} />
                  <DropdownArrow />
                  {profileDropdownActive && (
                    <ProfileDropdownMenu>
                      <NavLink to={'/profile'}>
                        <DropdownMenuItem
                          onClick={() => changeProfileDropdownState()}
                        >
                          <DropdownMenuText>Your profile</DropdownMenuText>
                        </DropdownMenuItem>
                      </NavLink>
                      <NavLink to={'/login'}>
                        <DropdownMenuItem
                          isBottomItem
                          onClick={() => changeProfileDropdownState()}
                        >
                          <DropdownMenuText>Log out</DropdownMenuText>
                        </DropdownMenuItem>
                      </NavLink>
                    </ProfileDropdownMenu>
                  )}
                  <HamburgerLogo onClick={() => changeHamburgerMenuState()} />
                </AvatarHamburgerWrapper>

                {hamburgerMenuActive && (
                  <>
                    <HamburgerMenuBackground />
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
                          onClick={() => changeHamburgerMenuState()}
                        >
                          <MenuLecturesIcon />
                          <MenuItemText>Lectures</MenuItemText>
                        </MenuItem>

                        <MenuItem
                          to={'/myresults'}
                          onClick={() => changeHamburgerMenuState()}
                        >
                          <MenuResultsIcon />
                          <MenuItemText>My results</MenuItemText>
                        </MenuItem>

                        <MenuItem
                          to={'/achievements'}
                          onClick={() => changeHamburgerMenuState()}
                        >
                          <MenuAchievementsIcon />
                          <MenuItemText>Achievements</MenuItemText>
                        </MenuItem>

                        <MenuItem
                          to={'/colleauges'}
                          onClick={() => changeHamburgerMenuState()}
                        >
                          <MenuColleaugesIcon />
                          <MenuItemText>Colleauges</MenuItemText>
                        </MenuItem>

                        <MenuItem
                          to={'/profile'}
                          onClick={() => changeHamburgerMenuState()}
                        >
                          <UserAvatar
                            isInHamburgerMenu
                            src={imgSrc}
                            alt={imgAlt}
                          />
                          <MenuItemText>Your profile</MenuItemText>
                        </MenuItem>
                      </HamburgerMenuInner>

                      <NavLink
                        to={'/login'}
                        onClick={() => changeHamburgerMenuState()}
                      >
                        <HamburgerMenuLogoutWrapper>
                          <HamburgerMenuLogoutIcon />
                          <HamburgerMenuLogoutText>
                            Log out
                          </HamburgerMenuLogoutText>
                        </HamburgerMenuLogoutWrapper>
                      </NavLink>
                    </HamburgerMenu>
                  </>
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
