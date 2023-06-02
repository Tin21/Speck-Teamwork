import React from 'react';
import {
  Header as HeaderWrapper,
  HeaderInner,
  HamburgerLogo,
  SpeckLogo,
  LogoWrapper,
  LogoText,
} from './LayoutStyle';

const Layout = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <LogoWrapper>
            <SpeckLogo />
            <LogoText> Learning Academy</LogoText>
          </LogoWrapper>
          <HamburgerLogo />
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

export default Layout;
