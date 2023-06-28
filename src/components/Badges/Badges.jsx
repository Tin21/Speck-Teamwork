import React, { useContext, useEffect, useState } from 'react';
import { BadgesGrid, BadgesTitle, BadgesWrapper } from './BadgesStyle';
import { badges } from '../../utils/badges/badgesList';
import SingleBadge from '../SingleBadge/SingleBadge';
import { Context } from '../../context/Context';

const Badges = () => {
  const { usersTable } = useContext(Context);
  const loggedUserId = localStorage.getItem('logged_user_id');
  const [user, setUser] = useState(null);

  useEffect(() => {
    usersTable && setUser(usersTable.find((user) => user.id == loggedUserId));
  }, [usersTable]);

  useEffect(() => {
    console.log(user);
  }, [user !== null]);

  const checkBadge = (src) => {
    var checked = false;
    user !== null &&
      user.badges?.map((badge) => {
        if (badge.src === src) checked = true;
      });
    return checked;
  };

  return (
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
  );
};

export default Badges;
