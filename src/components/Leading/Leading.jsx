import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from '../../assets/images/user-avatar.jpg';
import FirstPlaceFrameIcon from '../../assets/images/first-place-frameimg.png';
import {
  LeadingTitle,
  LeadingWrapper,
  PedestalCenterWrapper,
  PedestalLeftRectangle,
  PedestalLeftTrapezoid,
  PedestalLeftWrapper,
  PedestalRightWrapper,
  PedestalWrapper,
  PedestalLeftShapesContainer,
  SecondPlaceFrame,
  SecondPlaceAvatar,
  PedestalCenterShapesContainer,
  PedestalCenterRectangle,
  PedestalCenterTrapezoid,
  FirstPlaceFrame,
  FirstPlaceAvatar,
  PedestalRightRectangle,
  PedestalRightTrapezoid,
  ThirdPlaceFrame,
  ThirdPlaceAvatar,
} from './LeadingStyle';

const Leading = ({
  firstImgSrc,
  firstImgAlt,
  secondImgSrc,
  secondImgAlt,
  thirdImgSrc,
  thirdImgAlt,
}) => {
  return (
    <LeadingWrapper>
      <LeadingTitle>Leading</LeadingTitle>
      <PedestalWrapper>
        <PedestalLeftWrapper>
          <PedestalLeftShapesContainer>
            <SecondPlaceAvatar src={secondImgSrc} alt={secondImgAlt} />
            <SecondPlaceFrame />
            <PedestalLeftTrapezoid />
            <PedestalLeftRectangle></PedestalLeftRectangle>
          </PedestalLeftShapesContainer>
        </PedestalLeftWrapper>
        <PedestalCenterWrapper>
          <PedestalCenterShapesContainer>
            <FirstPlaceAvatar src={firstImgSrc} alt={firstImgAlt} />
            <FirstPlaceFrame
              src={FirstPlaceFrameIcon}
              alt="First place frame"
            />
            <PedestalCenterTrapezoid />
            <PedestalCenterRectangle></PedestalCenterRectangle>
          </PedestalCenterShapesContainer>
        </PedestalCenterWrapper>
        <PedestalRightWrapper>
          <PedestalCenterShapesContainer>
            <ThirdPlaceAvatar src={thirdImgSrc} alt={thirdImgAlt} />
            <ThirdPlaceFrame />
            <PedestalRightTrapezoid />
            <PedestalRightRectangle></PedestalRightRectangle>
          </PedestalCenterShapesContainer>
        </PedestalRightWrapper>
      </PedestalWrapper>
    </LeadingWrapper>
  );
};

Leading.propTypes = {
  firstImgSrc: PropTypes.string,
  firstImgAlt: PropTypes.string,
  secondImgSrc: PropTypes.string,
  secondImgAlt: PropTypes.string,
  thirdImgSrc: PropTypes.string,
  thirdImgAlt: PropTypes.string,
};

export default Leading;
