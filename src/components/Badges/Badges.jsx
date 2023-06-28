import React, { useContext, useEffect, useState } from 'react';
import { BadgesGrid, BadgesTitle, BadgesWrapper } from './BadgesStyle';
import { badges } from '../../utils/badges/badgesList';
import SingleBadge from '../SingleBadge/SingleBadge';
import { Context } from '../../context/Context';
import { ThreeDots } from 'react-loader-spinner';

const Badges = () => {
  const { usersTable } = useContext(Context);
  const loggedUserId = localStorage.getItem('logged_user_id');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    usersTable && setUser(usersTable.find((user) => user.id == loggedUserId));
    usersTable && setIsLoading(false);
  }, [usersTable]);

  const checkBadge = (src) => {
    var checked = false;
    user !== null &&
      user.badges?.map((badge) => {
        if (badge.src === src) checked = true;
      });
    return checked;
  };

  return (
    <>
      {isLoading ? (
        <ThreeDots
          color="#af6118"
          wrapperStyle={{
            justifyContent: 'center',
          }}
        />
      ) : (
        <BadgesWrapper>
          <BadgesTitle>My badges</BadgesTitle>
          <BadgesGrid>
            {badges.map((badge) => (
              <SingleBadge
                key={badge.id}
                title={badge.title}
                imgSrc={badge.imgSrc}
                imgAlt={badge.imgAlt}
                checked={checkBadge(badge.imgSrc)}
                isGolden={badge.isGolden}
              />
            ))}
          </BadgesGrid>
        </BadgesWrapper>
      )}
    </>
  );
};

export default Badges;
