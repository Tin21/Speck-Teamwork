import Section from '../../components/Section/Section';
import Profile from '../../components/Profile/Profile';
import UserAvatar from '../../assets/images/user-avatar.jpg';

const ProfilePage = () => {
  return (
    <>
      <Profile imgSrc={UserAvatar} imgAlt={'User avatar'} />
    </>
  );
};

export default ProfilePage;
