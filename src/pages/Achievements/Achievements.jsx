import Badges from '../../components/Badges/Badges';
import RankingTable from '../../components/RankingTable/RankingTable';
import Leading from '../../components/Leading/Leading';
import UserAvatar from '../../assets/images/user-avatar.jpg';
import {
  MobileAndTabletVersionWrapper,
  DesktopVersionWrapper,
  DesktopUpperConteiner,
} from './AchievementsStyle';

const Achievements = () => {
  return (
    <>
      <MobileAndTabletVersionWrapper>
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
      </MobileAndTabletVersionWrapper>
      <DesktopVersionWrapper>
        <DesktopUpperConteiner>
          <Leading
            firstImgSrc={UserAvatar}
            firstImgAlt={'First place avatar'}
            secondImgSrc={UserAvatar}
            secondImgAlt={'Second place avatar'}
            thirdImgSrc={UserAvatar}
            thirdImgAlt={'Third place avatar'}
          />
          <Badges />
        </DesktopUpperConteiner>
        <RankingTable />
      </DesktopVersionWrapper>
    </>
  );
};

export default Achievements;
