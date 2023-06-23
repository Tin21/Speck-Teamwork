import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
  FullName,
} from './LeadingStyle';

const Leading = ({
  firstImgSrc,
  firstImgAlt,
  secondImgSrc,
  secondImgAlt,
  thirdImgSrc,
  thirdImgAlt,
  firstStudent,
  secondStudent,
  thirdStudent,
  firstPoints,
  secondPoints,
  thirdPoints,
}) => {
  const [firstPlaceName, setFirstPlaceName] = useState(null);
  const [secondPlaceName, setSecondPlaceName] = useState(null);
  const [thirdPlaceName, setThirdPlaceName] = useState(null);

  useEffect(() => {
    setFirstPlaceName(firstStudent.substr(0, firstStudent.indexOf(' ')));
    setSecondPlaceName(secondStudent.substr(0, secondStudent.indexOf(' ')));
    setThirdPlaceName(thirdStudent.substr(0, thirdStudent.indexOf(' ')));
  }, []);

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
              <FullName>{thirdStudent}</FullName>
              <Name>{secondPlaceName}</Name>
              <PointsWrapper>
                <PointsText>{secondPoints} points</PointsText>
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
              <Name isFirstPlace>{firstPlaceName}</Name>
              <FullName isFirstPlace>{firstStudent}</FullName>
              <FirstPlaceStar />
              <PointsWrapper isFirstPlace>
                <PointsText>{firstPoints} points</PointsText>
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
              <FullName isThirdPlace>{thirdStudent}</FullName>
              <Name isThirdPlace>{thirdPlaceName}</Name>
              <PointsWrapper isThirdPlace>
                <PointsText>{thirdPoints} points</PointsText>
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
  firstStudent: PropTypes.string,
  secondStudent: PropTypes.string,
  thirdStudent: PropTypes.string,
  firstPoints: PropTypes.string,
  secondPoints: PropTypes.string,
  thirdPoints: PropTypes.string,
};

export default Leading;
