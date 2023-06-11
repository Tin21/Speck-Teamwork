import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  Cancel,
  Title,
  TitleWrapper,
  PictureFrame,
  PictureWrapper,
  ProfileButton,
  UserAvatar,
  ProfileWrapper,
  VisibleIcon,
} from './ProfileStyle';
import { Formik } from 'formik';
import {
  InputField,
  InputLabel,
  RequiredField,
  Form,
  FormRow,
} from '../../utils/styles/generalStyles';
import * as Yup from 'yup';

const Profile = ({ imgSrc, imgAlt, firstName, lastName, email, password }) => {
  const [update, setUpdate] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeUpdate = () => {
    setUpdate(!update);
  };

  const changePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <ProfileWrapper>
      <TitleWrapper>
        <Title>Profile</Title>
        {!update && (
          <ButtonWrapper>
            <ProfileButton onClick={() => changeUpdate()}>Edit</ProfileButton>
          </ButtonWrapper>
        )}
        {update && (
          <>
            <Cancel onClick={() => changeUpdate()}>Cancel</Cancel>
            <ButtonWrapper isUpdate>
              <ProfileButton onClick={() => changeUpdate()}>
                Update
              </ProfileButton>
            </ButtonWrapper>
          </>
        )}
      </TitleWrapper>
      <PictureWrapper>
        <UserAvatar src={imgSrc} alt={imgAlt} />
        <PictureFrame />
      </PictureWrapper>
      {!update && ( //INITIAL STATE
        <Formik>
          {(formik) => (
            <Form>
              <FormRow>
                <InputLabel isDisabled htmlFor="firstName">
                  Ime
                </InputLabel>
                <InputField
                  isDisabled
                  type="text"
                  name="firstName"
                  value={firstName}
                  disabled
                />
              </FormRow>
              <FormRow>
                <InputLabel isDisabled htmlFor="lastName">
                  Prezime
                </InputLabel>
                <InputField
                  isDisabled
                  type="text"
                  name="lastName"
                  value={lastName}
                  disabled
                />
              </FormRow>
              <FormRow>
                <InputLabel isDisabled htmlFor="email">
                  Email
                </InputLabel>
                <InputField
                  isDisabled
                  type="text"
                  name="email"
                  value={email}
                  disabled
                />
              </FormRow>
              <FormRow>
                <InputLabel isDisabled htmlFor="password">
                  Password
                </InputLabel>

                <InputField
                  isPasswordDisabled
                  isDisabled
                  type="password"
                  name="password"
                  value={password}
                  disabled
                />
              </FormRow>
              <FormRow>
                <ProfileButton disabled isSecondaryDisabled>
                  Delete your account
                </ProfileButton>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
      {update && ( //UPDATING
        <Formik>
          {(formik) => (
            <Form>
              <FormRow>
                <InputLabel isEnabled htmlFor="firstName">
                  Ime
                </InputLabel>
                <InputField
                  isEnabled
                  type="text"
                  name="firstName"
                  value={firstName}
                />
              </FormRow>
              <FormRow>
                <InputLabel isEnabled htmlFor="lastName">
                  Prezime
                </InputLabel>
                <InputField
                  isEnabled
                  type="text"
                  name="lastName"
                  value={lastName}
                />
              </FormRow>
              <FormRow>
                <InputLabel isEnabled htmlFor="email">
                  Email
                </InputLabel>
                <InputField isEnabled type="text" name="email" value={email} />
              </FormRow>

              <FormRow>
                <InputLabel isEnabled htmlFor="password">
                  Password
                </InputLabel>
                <VisibleIcon onClick={() => changePasswordVisibility()} />
                {!passwordVisible && (
                  <InputField
                    isPasswordEnabled
                    isEnabled
                    type="password"
                    name="password"
                    value={password}
                  />
                )}
                {passwordVisible && (
                  <InputField
                    isPasswordVisible
                    isEnabled
                    type="text"
                    name="password"
                    value={password}
                  />
                )}
              </FormRow>

              <FormRow>
                <ProfileButton isSecondaryEnabled>
                  Delete your account
                </ProfileButton>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
      {/* <Formik
        initialValues={{
          firstName: `${firstName}`,
          lastName: `${lastName}`,
          email: `${email}`,
          password: `${password}`,
        }}>
            {formik }
        </Formik> */}
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default Profile;
