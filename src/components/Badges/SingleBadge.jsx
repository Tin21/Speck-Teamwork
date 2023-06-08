import React from 'react';
import {
  BadgeIcon,
  BadgeTickIcon,
  SingleBadgeTitle,
  SingleBadgeWrapper,
} from './BadgesStyle';
import PropTypes from 'prop-types';

const SingleBadge = ({ id, title, imgSrc, imgAlt, checked, isGolden }) => {
  return (
    <SingleBadgeWrapper>
      {checked === true && <BadgeTickIcon />}
      {checked === false && <BadgeTickIcon isUnvisible />}
      <BadgeIcon src={imgSrc} alt={imgAlt} />
      {isGolden === true && (
        <SingleBadgeTitle isGolden>{title}</SingleBadgeTitle>
      )}
      {isGolden === false && <SingleBadgeTitle>{title}</SingleBadgeTitle>}
    </SingleBadgeWrapper>
  );
};

SingleBadge.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  checked: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  isGolden: PropTypes.bool,
};

export default SingleBadge;
