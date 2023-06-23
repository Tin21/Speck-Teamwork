import React, { useEffect, useState, useContext } from 'react';
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
import { Context } from '../../context/Context';

const Leading = ({
  firstImgSrc,
  firstImgAlt,
  secondImgSrc,
  secondImgAlt,
  thirdImgSrc,
  thirdImgAlt,
}) => {
  const { usersTable } = useContext(Context);
  const [firstStudent, setFirstStudent] = useState(null);
  const [secondStudent, setSecondStudent] = useState(null);
  const [thirdStudent, setThirdStudent] = useState(null);
  const [firstPlaceName, setFirstPlaceName] = useState(null);
  const [secondPlaceName, setSecondPlaceName] = useState(null);
  const [thirdPlaceName, setThirdPlaceName] = useState(null);
  const [firstPoints, setFirstPoints] = useState(null);
  const [secondPoints, setSecondPoints] = useState(null);
  const [thirdPoints, setThirdPoints] = useState(null);

  useEffect(() => {
    usersTable && setFirstStudent(usersTable[0].full_name);
    usersTable && setSecondStudent(usersTable[1].full_name);
    usersTable && setThirdStudent(usersTable[2].full_name);
    usersTable && setFirstPoints(usersTable[0].pointsUser);
    usersTable && setSecondPoints(usersTable[1].pointsUser);
    usersTable && setThirdPoints(usersTable[2].pointsUser);
    firstStudent !== null &&
      setFirstPlaceName(firstStudent.substr(0, firstStudent.indexOf(' ')));
    secondStudent !== null &&
      setSecondPlaceName(secondStudent.substr(0, secondStudent.indexOf(' ')));
    thirdStudent !== null &&
      setThirdPlaceName(thirdStudent.substr(0, thirdStudent.indexOf(' ')));
  }, [usersTable]);

  useEffect(() => {}, []);

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
              <FullName>{secondStudent}</FullName>
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
