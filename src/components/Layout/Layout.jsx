import React from 'react';
import PropTypes from 'prop-types';
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
} from './LayoutStyle';

const Layout = ({ imgSrc, imgAlt }) => {
  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <LogoWrapper>
            <SpeckLogo />
            <LogoText> Learning Academy</LogoText>
          </LogoWrapper>
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
