import Section from '../../components/Section/Section';
import Profile from '../../components/Profile/Profile';
import UserAvatar from '../../assets/images/user-avatar.jpg';

const ProfilePage = () => {
  return (
    <>
      <Profile
        imgSrc={UserAvatar}
        imgAlt={'User avatar'}
        firstName={'Ivan'}
        lastName={'Ivanovic'}
        email={'ivanivanovic@gmail.com'}
        password={'123456789abc'}
      />
    </>
  );
};

export default ProfilePage;
