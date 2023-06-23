import React from 'react';
import {
  LoginContainer,
  LoginSectionInner,
  LoginLogoWrapper,
  LoginSectionTitle,
  LoginSectionSubtitle,
  LoginSpeckLogo,
  LoginLogoText,
  LoginLeftContainer,
  LoginRightContainer,
  LoginImage,
} from './LoginSectionStyle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginSection = ({
  title,
  subtitle,
  logo_text,
  login_image,
  children,
}) => {
  return (
    <LoginContainer>
      <LoginLeftContainer>
        <LoginSectionInner>
          <LoginLogoWrapper>
            <Link to="/login">
              <LoginSpeckLogo></LoginSpeckLogo>
            </Link>
            <LoginLogoText>{logo_text}</LoginLogoText>
          </LoginLogoWrapper>
          <LoginSectionTitle>{title}</LoginSectionTitle>
          <LoginSectionSubtitle>{subtitle}</LoginSectionSubtitle>
          {children}
        </LoginSectionInner>
      </LoginLeftContainer>
      <LoginRightContainer>
        <LoginImage src={login_image} alt="Login image" />
      </LoginRightContainer>
    </LoginContainer>
  );
};

LoginSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo_text: PropTypes.string,
  login_image: PropTypes.string,
  children: PropTypes.node,
};

export default LoginSection;
