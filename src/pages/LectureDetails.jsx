import { useState, useEffect } from 'react';

import Section from '../components/Section/Section';
import { Grid } from '../utils/styles/generalStyles';
import cardsDetailData from '../utils/mock/lectureDetails';
import SingleLectureDetails from '../components/SingleLectureDetails/SingleLectureDetails';
import singleLectureMock from '../utils/mock/singleLecture';
import { Link, useParams } from 'react-router-dom';
import {
  LectureBreadcrumbText,
  LectureCriteriaText,
  LectureDetailsContent,
  LectureDetailsTitle,
  LectureDetailsWrapper,
  LectureFlexedNav,
  LectureUnderline,
} from '../components/SingleLectureDetails/SingleLectureDetailsStyle';

import { ReactComponent as ArrowImg } from '../assets/images/right-arrow.svg';
import { HeaderText } from '../components/Layout/LayoutStyle';
import { breakpoints } from '../utils/styles/theme';

const LectureDetails = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState(null);
  const [lectures, setLectures] = useState(null);
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDetail(cardsDetailData);
      setLectures(singleLectureMock);
    }, 1000);
  }, []);

  useEffect(() => {
    lectures &&
      setLecture(lectures.find((lecture) => lecture.id === parseInt(id)));
  }, [lectures]);

  return (
    <>
      <Section isFlexDisplay={false}>
        <LectureFlexedNav>
          <Link to={'/lectures'}>
            <LectureUnderline>Lectures</LectureUnderline>
          </Link>
          <ArrowImg />
          <LectureBreadcrumbText>
            {lecture?.id}. {lecture?.title}
          </LectureBreadcrumbText>
        </LectureFlexedNav>
        <LectureDetailsWrapper>
          <LectureDetailsTitle>{lecture?.title}</LectureDetailsTitle>
          <LectureDetailsContent>{lecture?.content}</LectureDetailsContent>
        </LectureDetailsWrapper>

        <LectureCriteriaText>Lecture criteria's</LectureCriteriaText>

        {detail && (
          <Grid isAwards>
            {detail.map((detail) => (
              <SingleLectureDetails
                key={detail.id}
                title={detail.title}
                subtitle={detail.subtitle}
                imageAward={detail.imageAward}
                logoImg={detail.logoImage}
                id={detail.id}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default LectureDetails;
