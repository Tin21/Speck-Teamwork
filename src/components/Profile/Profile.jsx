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
} from './ProfileStyle';
import { Formik } from 'formik';
import {
  InputField,
  InputLabel,
  RequiredField,
  Form,
  FormRow,
  Button,
} from '../../utils/styles/generalStyles';
import * as Yup from 'yup';

const Profile = ({ imgSrc, imgAlt, firstName, lastName, email, password }) => {
  const [update, setUpdate] = useState(false);

  const changeUpdate = () => {
    setUpdate(!update);
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
      {!update && (
        <Formik>
          {(formik) => (
            <Form>
              <FormRow>
                <InputLabel isDisabled htmlFor="firstName">
                  Ime
                </InputLabel>
                <InputField
                  isProfile
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
                  isProfile
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
                  isProfile
                  type="text"
                  name="email"
                  value={email}
                  disabled
                />
              </FormRow>
              <FormRow>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField
                  isPassword
                  isProfile
                  type="password"
                  name="password"
                  value={password}
                  disabled
                />
              </FormRow>
              <FormRow>
                <ProfileButton disabled isSecondary>
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
