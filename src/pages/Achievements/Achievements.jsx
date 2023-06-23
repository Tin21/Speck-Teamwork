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
          firstStudent={'Marijana Marić'}
          secondStudent={'Dejan Majstorović'}
          thirdStudent={'Kristijan Ilić'}
          firstPoints={'300'}
          secondPoints={'279'}
          thirdPoints={'201'}
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
            firstStudent={'Marijana Marić'}
            secondStudent={'Dejan Majstorović'}
            thirdStudent={'Kristijan Ilić'}
            firstPoints={'300'}
            secondPoints={'279'}
            thirdPoints={'201'}
          />
          <Badges />
        </DesktopUpperConteiner>
        <RankingTable />
      </DesktopVersionWrapper>
    </>
  );
};

export default Achievements;
