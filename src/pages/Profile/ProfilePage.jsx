import Section from '../../components/Section/Section';
import Profile from '../../components/Profile/Profile';
import UserAvatar from '../../assets/images/user-avatar.jpg';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';

const ProfilePage = () => {
  const { setHeaderText } = useContext(Context);

  useEffect(() => {
    setHeaderText('Your profile');
  }, []);

  return (
    <>
      <Profile imgSrc={UserAvatar} imgAlt={'User avatar'} />
    </>
  );
};

export default ProfilePage;
