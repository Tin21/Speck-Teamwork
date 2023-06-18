import Badges from '../../components/Badges/Badges';
import RankingTable from '../../components/RankingTable/RankingTable';
import Leading from '../../components/Leading/Leading';
import UserAvatar from '../../assets/images/user-avatar.jpg';

const Achievements = () => {
  return (
    <>
      <Badges />
      <Leading
        firstImgSrc={UserAvatar}
        firstImgAlt={'First place avatar'}
        secondImgSrc={UserAvatar}
        secondImgAlt={'Second place avatar'}
        thirdImgSrc={UserAvatar}
        thirdImgAlt={'Third place avatar'}
      />
      <RankingTable />
    </>
  );
};

export default Achievements;
