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
  NumberWrapper,
  Number,
  Suffix,
  Name,
  PointsWrapper,
  PointsText,
  FirstPlaceStar,
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
            <PedestalLeftRectangle>
              <NumberWrapper>
                <Number>2</Number>
                <Suffix>nd</Suffix>
              </NumberWrapper>
              <Name>Dejan</Name>
              <PointsWrapper>
                <PointsText>279 points</PointsText>
              </PointsWrapper>
            </PedestalLeftRectangle>
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
            <PedestalCenterRectangle>
              <NumberWrapper>
                <Number isFirstPlace>1</Number>
                <Suffix>st</Suffix>
              </NumberWrapper>
              <Name isFirstPlace>Marijana</Name>
              <FirstPlaceStar />
              <PointsWrapper isFirstPlace>
                <PointsText>300 points</PointsText>
              </PointsWrapper>
            </PedestalCenterRectangle>
          </PedestalCenterShapesContainer>
        </PedestalCenterWrapper>
        <PedestalRightWrapper>
          <PedestalCenterShapesContainer>
            <ThirdPlaceAvatar src={thirdImgSrc} alt={thirdImgAlt} />
            <ThirdPlaceFrame />
            <PedestalRightTrapezoid />
            <PedestalRightRectangle>
              <NumberWrapper>
                <Number isThirdPlace>3</Number>
                <Suffix>rd</Suffix>
              </NumberWrapper>
              <Name isThirdPlace>Kristijan</Name>
              <PointsWrapper isThirdPlace>
                <PointsText>201 points</PointsText>
              </PointsWrapper>
            </PedestalRightRectangle>
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
