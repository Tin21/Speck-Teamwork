import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowImg } from '../../assets/images/right-arrow.svg';
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
  LectureLink,
  LectureBreadcrumbText,
  LectureBreadcrumbWrapper,
} from './LayoutStyle';
import { Outlet } from 'react-router-dom';
import { Context } from '../../context/Context';
import { AuthContext } from '../../context/AuthContext';

const Layout = ({ imgSrc, imgAlt }) => {
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const [profileDropdownActive, setProfileDropdownActive] = useState(false);
  const [headerText, setHeaderText] = useState(
    localStorage.getItem('header_text')
      ? localStorage.getItem('header_text')
      : 'Lectures',
  );
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { contextLecture, setContextLecture } = useContext(Context);

  const changeHamburgerMenuState = () => {
    setHamburgerMenuActive(!hamburgerMenuActive);
  };

  const changeProfileDropdownState = () => {
    setProfileDropdownActive(!profileDropdownActive);
  };

  const changeHeaderText = (pageName) => {
    setHeaderText(pageName);
    localStorage.setItem('header_text', pageName);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('logged_user_id');
    localStorage.removeItem('jwt_token');
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
              <MenuItem
                to={'/lectures'}
                onClick={() => changeHeaderText('Lectures')}
              >
                <MenuLecturesIcon />
                <MenuItemText>Lectures</MenuItemText>
              </MenuItem>

              <MenuItem
                to={'/my-results'}
                onClick={() => changeHeaderText('Results')}
              >
                <MenuResultsIcon />
                <MenuItemText>My results</MenuItemText>
              </MenuItem>

              <MenuItem
                to={'/achievements'}
                onClick={() => changeHeaderText('Achievements')}
              >
                <MenuAchievementsIcon />
                <MenuItemText>Achievements</MenuItemText>
              </MenuItem>

              <MenuItem
                to={'/colleauges'}
                onClick={() => changeHeaderText('Colleauges')}
              >
                <MenuColleaugesIcon />
                <MenuItemText>Colleauges</MenuItemText>
              </MenuItem>
            </MenuInner>
          </Menu>

          <RightContainer>
            <HeaderWrapper>
              {headerText === 'Achievements' && (
                <HeaderInner isAchievements>
                  <LogoWrapper>
                    <NavLink to={'/'}>
                      <SpeckLogo />
                    </NavLink>
                    <LogoText> Learning Academy</LogoText>
                  </LogoWrapper>
                  {headerText === 'Lectures' && contextLecture === '' && (
                    <>
                      <HeaderText>Lectures</HeaderText>
                      <p>{contextLecture}</p>
                    </>
                  )}
                  {headerText === 'Lectures' && contextLecture !== '' && (
                    <LectureBreadcrumbWrapper>
                      <LectureLink to={'/lectures'}>Lectures</LectureLink>
                      <ArrowImg />
                      <LectureBreadcrumbText>
                        {contextLecture}
                      </LectureBreadcrumbText>
                    </LectureBreadcrumbWrapper>
                  )}

                  {headerText === 'Results' && <HeaderText>Results</HeaderText>}
                  {headerText === 'Achievements' && (
                    <HeaderText>Achievements</HeaderText>
                  )}
                  {headerText === 'Colleauges' && (
                    <HeaderText>Colleauges</HeaderText>
                  )}
                  {headerText === 'Your profile' && (
                    <HeaderText>Your profile</HeaderText>
                  )}
                  <AvatarHamburgerWrapper>
                    <UserAvatar
                      src={imgSrc}
                      alt={imgAlt}
                      onClick={() => changeProfileDropdownState()}
                    />
                    <DropdownArrow
                      onClick={() => changeProfileDropdownState()}
                    />
                    {profileDropdownActive && (
                      <ProfileDropdownMenu>
                        <NavLink to={'/profile'}>
                          <DropdownMenuItem
                            onClick={() => {
                              changeHeaderText('Your profile');
                              changeProfileDropdownState();
                            }}
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
                      <HamburgerMenuBackground
                        onClick={() => changeHamburgerMenuState()}
                      />
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
                            onClick={() => {
                              changeHeaderText('Lectures');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuLecturesIcon />
                            <MenuItemText>Lectures</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/my-results'}
                            onClick={() => {
                              changeHeaderText('Results');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuResultsIcon />
                            <MenuItemText>My results</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/achievements'}
                            onClick={() => {
                              changeHeaderText('Achievements');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuAchievementsIcon />
                            <MenuItemText>Achievements</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/colleauges'}
                            onClick={() => {
                              changeHeaderText('Colleauges');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuColleaugesIcon />
                            <MenuItemText>Colleauges</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/profile'}
                            onClick={() => {
                              changeHeaderText('Your profile');
                              changeHamburgerMenuState();
                            }}
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
                          onClick={() => {
                            changeHamburgerMenuState();
                          }}
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
              )}
              {headerText !== 'Achievements' && (
                <HeaderInner>
                  <LogoWrapper>
                    <NavLink to={'/'}>
                      <SpeckLogo />
                    </NavLink>
                    <LogoText> Learning Academy</LogoText>
                  </LogoWrapper>
                  {headerText === 'Lectures' && contextLecture === '' && (
                    <>
                      {/* <LectureLink to={'/lectures'}>Lecture</LectureLink> */}
                      <HeaderText>Lectures</HeaderText>

                      <p>{contextLecture}</p>
                    </>
                  )}
                  {headerText === 'Lectures' && contextLecture !== '' && (
                    <LectureBreadcrumbWrapper>
                      <LectureLink to={'/lectures'}>Lectures</LectureLink>
                      <ArrowImg />
                      <LectureBreadcrumbText>
                        {contextLecture}
                      </LectureBreadcrumbText>
                    </LectureBreadcrumbWrapper>
                  )}

                  {headerText === 'Results' && <HeaderText>Results</HeaderText>}
                  {headerText === 'Achievements' && (
                    <HeaderText>Achievements</HeaderText>
                  )}
                  {headerText === 'Colleauges' && (
                    <HeaderText>Colleauges</HeaderText>
                  )}
                  {headerText === 'Your profile' && (
                    <HeaderText>Your profile</HeaderText>
                  )}
                  <AvatarHamburgerWrapper>
                    <UserAvatar
                      src={imgSrc}
                      alt={imgAlt}
                      onClick={() => changeProfileDropdownState()}
                    />
                    <DropdownArrow
                      onClick={() => changeProfileDropdownState()}
                    />
                    {profileDropdownActive && (
                      <ProfileDropdownMenu>
                        <NavLink to={'/profile'}>
                          <DropdownMenuItem
                            onClick={() => {
                              changeHeaderText('Your profile');
                              changeProfileDropdownState();
                            }}
                          >
                            <DropdownMenuText>Your profile</DropdownMenuText>
                          </DropdownMenuItem>
                        </NavLink>
                        <NavLink to={'/login'}>
                          <DropdownMenuItem
                            isBottomItem
                            onClick={() => {
                              changeProfileDropdownState();
                              logOut();
                            }}
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
                      <HamburgerMenuBackground
                        onClick={() => changeHamburgerMenuState()}
                      />
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
                            onClick={() => {
                              changeHeaderText('Lectures');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuLecturesIcon />
                            <MenuItemText>Lectures</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/my-results'}
                            onClick={() => {
                              changeHeaderText('Results');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuResultsIcon />
                            <MenuItemText>My results</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/achievements'}
                            onClick={() => {
                              changeHeaderText('Achievements');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuAchievementsIcon />
                            <MenuItemText>Achievements</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/colleauges'}
                            onClick={() => {
                              changeHeaderText('Colleauges');
                              changeHamburgerMenuState();
                            }}
                          >
                            <MenuColleaugesIcon />
                            <MenuItemText>Colleauges</MenuItemText>
                          </MenuItem>

                          <MenuItem
                            to={'/profile'}
                            onClick={() => {
                              changeHeaderText('Your profile');
                              changeHamburgerMenuState();
                            }}
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
                          onClick={() => {
                            changeHamburgerMenuState();
                          }}
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
              )}
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
