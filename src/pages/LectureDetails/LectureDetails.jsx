import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Section from '../../components/Section/Section';
import { Grid, GridWrapper } from '../../utils/styles/generalStyles';
import SingleLectureDetails from '../../components/SingleLectureDetails/SingleLectureDetails';
import { ReactComponent as ArrowImg } from '../../assets/images/right-arrow.svg';
import {
  LectureBreadcrumbText,
  LectureCriteriaText,
  LectureDetailsContent,
  LectureDetailsTitle,
  LectureDetailsWrapper,
  LectureFlexedNav,
  LectureUnderline,
} from '../../components/SingleLectureDetails/SingleLectureDetailsStyle';

import CriteriaAwardIcon from '../../assets/images/criteria-award.png';
import CriteriaQuizIcon from '../../assets/images/criteria-quiz.jpg';
import CriteriaHwIcon from '../../assets/images/criteria-hw.jpg';
import CriteriaTeamIcon from '../../assets/images/criteria-team.jpg';
import CriteriaWatchIcon from '../../assets/images/criteria-watch.jpg';
import CriteriaBellIcon from '../../assets/images/criteria-final-exam.jpg';

import { getLectureDataById } from '../../api/lectures';
import { ThreeDots } from 'react-loader-spinner';

const LectureDetails = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState(null);
  const [lecture, setLecture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lectureData = await getLectureDataById(
          localStorage.getItem('jwt_token'),
          id,
        );
        setLecture(lectureData);

        const lectureCriteria = lectureData.lecture_criteria;
        setDetail(lectureCriteria);
        setIsLoading(false);
      } catch (error) {
        console.error('Error occured while fetching lecture details:', error);
      }
    };

    fetchData();
  }, [id]);

  const getIconByCriteria = (criteriaName) => {
    switch (criteriaName) {
      case 'Quiz':
        return CriteriaQuizIcon;
      case 'Homework':
        return CriteriaHwIcon;
      case 'Teamwork':
        return CriteriaTeamIcon;
      case 'Attendance':
        return CriteriaWatchIcon;
      case 'Final exam':
        return CriteriaBellIcon;
      default:
        return '';
    }
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
        <Section isFlexDisplay={false}>
          <LectureFlexedNav>
            <Link to="/lectures">
              <LectureUnderline>Lectures</LectureUnderline>
            </Link>
            <ArrowImg />
            <LectureBreadcrumbText>{lecture?.name}</LectureBreadcrumbText>
          </LectureFlexedNav>
          <LectureDetailsWrapper>
            <LectureDetailsTitle>{lecture?.name}</LectureDetailsTitle>
            <LectureDetailsContent>
              {lecture?.description}
            </LectureDetailsContent>
          </LectureDetailsWrapper>

          <LectureCriteriaText>
            Lecture criteria&apos;s and points
          </LectureCriteriaText>

          <GridWrapper>
            {detail && (
              <Grid isAwards>
                {detail.map((lectureCriteria) => (
                  <SingleLectureDetails
                    key={lectureCriteria.id}
                    title={lectureCriteria.criteria.name}
                    subtitle={lecture.description}
                    imageAward={CriteriaAwardIcon}
                    logoImg={getIconByCriteria(lectureCriteria.criteria.name)}
                    awardPoint={`+${lectureCriteria.total_points}`}
                    id={lectureCriteria.criteria.id}
                  />
                ))}
              </Grid>
            )}
          </GridWrapper>
        </Section>
      )}
    </>
  );
};

export default LectureDetails;
