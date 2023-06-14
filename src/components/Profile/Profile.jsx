import React, { useState, useContext, useEffect } from 'react';
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
  PassChangeWrapper,
  PassChangeLink,
  Field,
  Label,
  Form,
  UploadPhotoIcon,
} from './ProfileStyle';
import { Formik } from 'formik';
import { FormRow, ErrorMessage } from '../../utils/styles/generalStyles';
import * as Yup from 'yup';
import Toast from '../Toast/Toast';
import Modal from '../Modal/Modal';
import { Context } from '../../context/Context';

const Profile = ({ imgSrc, imgAlt }) => {
  const [update, setUpdate] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { showModal, setShowModal } = useContext(Context);
  const [user, setUser] = useState({
    firstName: 'Ivan',
    lastName: 'Ivanovic',
    email: 'ivanivanovic@gmail.com',
    password: '123456789abc',
  });

  const changeUpdate = () => {
    setUpdate(!update);
  };

  const changePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const changeToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const changeModal = () => {
    setShowModal(true);
  };

  const changeData = (newData) => {
    setUser({
      firstName: newData.firstName,
      lastName: newData.lastName,
      email: newData.email,
      password: newData.password,
    });
  };

  return (
    <ProfileWrapper>
      {showToast && (
        <Toast
          title={'Success!'}
          subtitle={'Profile information successfuly changed'}
        />
      )}
      {showModal && (
        <Modal
          title={'Delete account?'}
          subtitle={'If you delete your account, all your data will be lost.'}
          acceptText={'Delete'}
          declineText={'Keep editing'}
        />
      )}
      {!update && ( //INITIAL STATE
        <Formik>
          {(formik) => (
            <Form>
              <TitleWrapper>
                <Title />
                <ButtonWrapper>
                  <ProfileButton isEdit onClick={() => changeUpdate()} />
                  {/* Edit
                  </ProfileButton> */}
                </ButtonWrapper>
              </TitleWrapper>
              <PictureWrapper>
                <UserAvatar src={imgSrc} alt={imgAlt} />
                <PictureFrame />
              </PictureWrapper>
              <FormRow>
                <Label isDisabled htmlFor="firstName">
                  Ime
                </Label>
                <Field
                  isDisabled
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  disabled
                />
                <ErrorMessage component={'div'} name="firstName" />
              </FormRow>
              <FormRow>
                <Label isDisabled htmlFor="lastName">
                  Prezime
                </Label>
                <Field
                  isDisabled
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  disabled
                />
                <ErrorMessage component={'div'} name="lastName" />
              </FormRow>
              <FormRow>
                <Label isDisabled htmlFor="email">
                  Email
                </Label>
                <Field
                  isDisabled
                  type="text"
                  name="email"
                  value={user.email}
                  disabled
                />
                <ErrorMessage component={'div'} name="email" />
              </FormRow>
              <FormRow>
                <Label isDisabled htmlFor="password">
                  Password
                </Label>

                <Field
                  isPasswordDisabled
                  isDisabled
                  type="password"
                  name="password"
                  value={user.password}
                  disabled
                />
                <ErrorMessage component={'div'} name="password" />
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
        <Formik
          initialValues={{
            firstName: `${user.firstName}`,
            lastName: `${user.lastName}`,
            email: `${user.email}`,
            password: `${user.password}`,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required('First name is required')
              .min(3, 'First name must be at least 3 characters long'),
            lastName: Yup.string()
              .required('Last name is required')
              .min(3, 'Last name must be at least 3 characters long'),
            email: Yup.string()
              .required('Email is required')
              .email('Invalid email adress'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const newData = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            };
            changeUpdate();
            setSubmitting();
            changeToast();
            changeUpdate();
            changeData(newData);
            resetForm();
          }}>
          {(formik) => (
            <Form>
              <TitleWrapper isUpdating>
                <Title />
                <Cancel onClick={() => changeUpdate()}>Cancel</Cancel>
                <ButtonWrapper isUpdate>
                  <ProfileButton
                    isUpdate
                    type="submit"
                    disabled={showToast}
                  ></ProfileButton>
                </ButtonWrapper>
              </TitleWrapper>
              <PictureWrapper>
                <UserAvatar src={imgSrc} alt={imgAlt} />
                <PictureFrame />
                <UploadPhotoIcon />
              </PictureWrapper>
              <FormRow>
                <Label isEnabled htmlFor="firstName">
                  Ime
                </Label>
                <Field isEnabled type="text" name="firstName" />

                <ErrorMessage component={'div'} name="firstName" />
              </FormRow>
              <FormRow>
                <Label isEnabled htmlFor="lastName">
                  Prezime
                </Label>
                <Field isEnabled type="text" name="lastName" />
                <ErrorMessage component={'div'} name="lastName" />
              </FormRow>
              <FormRow>
                <Label isEnabled htmlFor="email">
                  Email
                </Label>
                <Field isEnabled type="text" name="email" />
                <ErrorMessage component={'div'} name="email" />
              </FormRow>

              <FormRow>
                <Label isEnabled htmlFor="password">
                  Password
                </Label>
                <VisibleIcon onClick={() => changePasswordVisibility()} />
                {!passwordVisible && (
                  <Field
                    isPasswordEnabled
                    isEnabled
                    type="password"
                    name="password"
                    value={user.password}
                  />
                )}
                {passwordVisible && (
                  <Field
                    isPasswordVisible
                    isEnabled
                    type="text"
                    name="password"
                    value={user.password}
                  />
                )}
                <ErrorMessage component={'div'} name="password" />
                <PassChangeWrapper>
                  <PassChangeLink to={'/reset'}>
                    Change your password
                  </PassChangeLink>
                </PassChangeWrapper>
              </FormRow>
              <FormRow>
                <ProfileButton
                  type="button"
                  isSecondaryEnabled
                  onClick={() => changeModal()}>
                  Delete your account
                </ProfileButton>
              </FormRow>
            </Form>
          )}
        </Formik>
      )}
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Profile;
