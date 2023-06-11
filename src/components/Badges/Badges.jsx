import React from 'react';
import { BadgesGrid, BadgesTitle, BadgesWrapper } from './BadgesStyle';
import { badges } from '../../utils/badges/badgesList';
import SingleBadge from '../SingleBadge/SingleBadge';

const Badges = () => {
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
            checked={badge.checked}
            isGolden={badge.isGolden}
          />
        ))}
      </BadgesGrid>
    </BadgesWrapper>
  );
};

export default Badges;
