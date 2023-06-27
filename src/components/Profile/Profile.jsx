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
  ProfileButtonWrapper,
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
import { AuthContext } from '../../context/AuthContext';
import { deleteUser, updateUser } from '../../api/users';
import { useNavigate } from 'react-router-dom';

const Profile = ({ imgSrc, imgAlt }) => {
  const [update, setUpdate] = useState(false);
  const { showModal, setShowModal, showToast, setShowToast } =
    useContext(Context);

  const { loggedUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await loggedUser;
        if (user) {
          setUser({
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
          });
        }
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    if (loggedUser instanceof Promise) {
      fetchUser();
    } else if (loggedUser) {
      setUser({
        firstName: loggedUser.first_name,
        lastName: loggedUser.last_name,
        email: loggedUser.email,
      });
    }
  }, [loggedUser]);

  const changeUpdate = () => {
    setUpdate(!update);
  };

  const changeToast = () => {
    setShowToast(true);
  };

  const changeModal = () => {
    setShowModal(true);
  };

  const changeData = (newData) => {
    setUser({
      firstName: newData.firstName,
      lastName: newData.lastName,
      email: newData.email,
    });
  };

  const updateUserData = (newData) => {
    const loggedUserId = localStorage.getItem('logged_user_id');
    const updatedUser = {
      first_name: newData.firstName,
      last_name: newData.lastName,
      email: newData.email,
    };
    const jwtToken = localStorage.getItem('jwt_token');

    updateUser(loggedUserId, updatedUser, jwtToken);
  };

  const navigate = useNavigate();

  const deleteAccount = () => {
    const loggedUserId = localStorage.getItem('logged_user_id');
    const jwtToken = localStorage.getItem('jwt_token');
    deleteUser(loggedUserId, jwtToken);

    localStorage.removeItem('logged_user_id');
    localStorage.removeItem('jwt_token');

    navigate('/login');
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
          declineText={'Cancel'}
          acceptCallback={deleteAccount}
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
                </ButtonWrapper>
              </TitleWrapper>
              <PictureWrapper>
                <UserAvatar src={imgSrc} alt={imgAlt} />
                <PictureFrame />
              </PictureWrapper>
              <FormRow>
                <Label isdisabled="true" htmlFor="firstName">
                  Ime
                </Label>
                <Field
                  isdisabled="true"
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  disabled
                />
                <ErrorMessage component={'div'} name="firstName" />
              </FormRow>
              <FormRow>
                <Label isdisabled="true" htmlFor="lastName">
                  Prezime
                </Label>
                <Field
                  isdisabled="true"
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  disabled
                />
                <ErrorMessage component={'div'} name="lastName" />
              </FormRow>
              <FormRow>
                <Label isdisabled="true" htmlFor="email">
                  Email
                </Label>
                <Field
                  isdisabled="true"
                  type="text"
                  name="email"
                  value={user.email}
                  disabled
                />
                <ErrorMessage component={'div'} name="email" />
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
            };
            changeUpdate();
            setSubmitting();
            changeToast();
            changeUpdate();
            changeData(newData);
            updateUserData(newData);
            resetForm();
          }}
        >
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
                <Label isenabled="true" htmlFor="firstName">
                  Ime
                </Label>
                <Field isenabled="true" type="text" name="firstName" />

                <ErrorMessage component={'div'} name="firstName" />
              </FormRow>
              <FormRow>
                <Label isenabled="true" htmlFor="lastName">
                  Prezime
                </Label>
                <Field isenabled="true" type="text" name="lastName" />
                <ErrorMessage component={'div'} name="lastName" />
              </FormRow>
              <FormRow>
                <Label isenabled="true" htmlFor="email">
                  Email
                </Label>
                <Field isenabled="true" type="text" name="email" />
                <ErrorMessage component={'div'} name="email" />
              </FormRow>
              <FormRow>
                <ProfileButtonWrapper>
                  <ProfileButton
                    type="button"
                    isSecondaryEnabled
                    onClick={() => changeModal()}
                  >
                    Delete your account
                  </ProfileButton>
                  <PassChangeLink to={'/reset'}>
                    Change your password
                  </PassChangeLink>
                </ProfileButtonWrapper>
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
