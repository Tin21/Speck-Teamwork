import { useEffect, useState, useContext } from 'react';
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
import { ThreeDots } from 'react-loader-spinner';

const Leading = ({
  firstImgSrc,
  firstImgAlt,
  secondImgSrc,
  secondImgAlt,
  thirdImgSrc,
  thirdImgAlt,
}) => {
  const [firstStudent, setFirstStudent] = useState(null);
  const [secondStudent, setSecondStudent] = useState(null);
  const [thirdStudent, setThirdStudent] = useState(null);
  const [firstPlaceName, setFirstPlaceName] = useState(null);
  const [secondPlaceName, setSecondPlaceName] = useState(null);
  const [thirdPlaceName, setThirdPlaceName] = useState(null);
  const [firstPoints, setFirstPoints] = useState(null);
  const [secondPoints, setSecondPoints] = useState(null);
  const [thirdPoints, setThirdPoints] = useState(null);
  const { usersTable } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(usersTable);
    console.log(firstStudent);

    if (usersTable && usersTable.length >= 3) {
      setFirstStudent(usersTable[0].full_name);
      setSecondStudent(usersTable[1].full_name);
      setThirdStudent(usersTable[2].full_name);
      setFirstPoints(usersTable[0].pointsUser);
      setSecondPoints(usersTable[1].pointsUser);
      setThirdPoints(usersTable[2].pointsUser);
    }

    if (
      firstStudent !== null &&
      typeof firstStudent === 'string' &&
      firstStudent.includes(' ')
    ) {
      setFirstPlaceName(firstStudent.substr(0, firstStudent.indexOf(' ')));
    }

    if (
      secondStudent !== null &&
      typeof secondStudent === 'string' &&
      secondStudent.includes(' ')
    ) {
      setSecondPlaceName(secondStudent.substr(0, secondStudent.indexOf(' ')));
    }

    if (
      thirdStudent !== null &&
      typeof thirdStudent === 'string' &&
      thirdStudent.includes(' ')
    ) {
      setThirdPlaceName(thirdStudent.substr(0, thirdStudent.indexOf(' ')));
      setIsLoading(false);
    }
  }, [usersTable, firstStudent, secondStudent, thirdStudent]);

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
      )}
    </>
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
