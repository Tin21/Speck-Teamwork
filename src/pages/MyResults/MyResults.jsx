import {
  BarChartGrid,
  BarChartWrapper,
  ChartSubtitle,
  ChartTitle,
  ChartsWrapper,
  DoughnutChartsWrapper,
  SingleChartInnerWrapper,
  SingleChartOuterWrapper,
} from '../../components/Chart/ChartStyle';
import BarChart from '../../components/Chart/BarChart';
import DoughnutChart from '../../components/Chart/DoughnutChart';
import {
  chartMock,
  doughnutMock1,
  doughnutMock2,
} from '../../utils/mock/chartData';
import { useEffect, useState } from 'react';
import {
  getLectureCriteriaByUserId,
  getLectureDataById,
} from '../../api/lectures';
import CourseProgress from '../../components/CourseProgress/CourseProgress';

const MyResults = () => {
  const [usersQuizResults, setUsersQuizResults] = useState([]);
  const [usersHomeworkResults, setUsersHomeworkResults] = useState([]);
  const [usersAttendanceResults, setUsersAttendanceResults] = useState([]);
  const [firstCertificatePercentage, setFirstCertificatePercentage] = useState(
    [],
  );
  const [secondCertificatePercentage, setSecondCertificatePercentage] =
    useState([]);

  useEffect(() => {
    _getChartData('Quiz');
    _getChartData('Homework');
    _getChartData('Attendance');
    _calculateCertificatePercentages();
  }, []);

  const _getChartData = async (type) => {
    const lectureCriteriaById = await getLectureCriteriaByUserId(
      localStorage.getItem('jwt_token'),
      localStorage.getItem('logged_user_id'),
    );

    const filteredLectureCriteriaByNameList = _filterByName(
      type,
      lectureCriteriaById,
    );
    console.log(filteredLectureCriteriaByNameList);

    const results = [];
    for (const element of filteredLectureCriteriaByNameList) {
      console.log(element);

      const itemName = (await _getData(element.lecture_criterium.lecture_id))
        .name;
      const itemUserPoints = element.points;
      const itemMaxPoints = element.lecture_criterium.total_points;

      results.push({
        name: itemName,
        percentage: Math.round((itemUserPoints * 100) / itemMaxPoints),
      });
    }
    console.log(results);
    if (type == 'Quiz') {
      setUsersQuizResults(results);
    } else if (type == 'Homework') {
      setUsersHomeworkResults(results);
    } else if (type == 'Attendance') {
      setUsersAttendanceResults(results);
    }
  };

  const _getData = async (id) => {
    const data = await getLectureDataById(
      localStorage.getItem('jwt_token'),
      id,
    );
    return data;
  };

  const _filterByName = (name, lectureCriteria) => {
    const filteredByName = lectureCriteria.filter(
      (el) => el.lecture_criterium.criteria.name === name,
    );
    return filteredByName;
  };

  const _calculateCertificatePercentages = () => {
    let earnedPoints = 0;
    let totalPoints = 219;
    usersAttendanceResults.forEach((element) => {
      if (element.percentage === 100) earnedPoints++;
    });

    for (let i = 0; i < usersQuizResults.length; i++) {
      let quizPoints;
      if (i === 1 || i === 5) quizPoints = 15;
      else quizPoints = 20;
      earnedPoints += (usersQuizResults[i].percentage / 100) * quizPoints * 0.4;
    }

    for (let i = 0; i < usersHomeworkResults.length; i++) {
      let homeworkPoints;
      if (i === 4) homeworkPoints = 10;
      else homeworkPoints = 20;
      earnedPoints +=
        (usersHomeworkResults[i].percentage / 100) * homeworkPoints;
    }

    //team work points
    earnedPoints += (doughnutMock1 / 100) * 40;

    //final exam points
    earnedPoints += (doughnutMock2 / 100) * 30;

    if (earnedPoints >= 0.5 * totalPoints) {
      setFirstCertificatePercentage(100);
    } else {
      setFirstCertificatePercentage(
        Math.round((earnedPoints / totalPoints) * 100),
      );
    }

    setSecondCertificatePercentage(
      Math.round((earnedPoints / totalPoints) * 100),
    );
  };

  return (
    <>
      <CourseProgress
        firstPercentage={firstCertificatePercentage}
        firstCertificateTitle="Certifikat prolaznosti"
        firstCertificateSubtitle="Potrebno 50% bodova"
        secondPercentage={secondCertificatePercentage}
        secondCertificateTitle="Certifikat izvrsnosti"
        secondCertificateSubtitle="Potrebno 90% bodova"
        title="My course progress"
      />
      <ChartsWrapper>
        <BarChartGrid>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Attendance per lecture (%)</ChartTitle>
              <ChartSubtitle>Your attendance</ChartSubtitle>
              <BarChartWrapper>
                <BarChart barData={usersAttendanceResults} />
              </BarChartWrapper>
            </SingleChartInnerWrapper>
          </SingleChartOuterWrapper>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Quiz results per lecture (%)</ChartTitle>
              <ChartSubtitle>Your quiz results</ChartSubtitle>
              <BarChartWrapper>
                <BarChart barData={usersQuizResults} />
              </BarChartWrapper>
            </SingleChartInnerWrapper>
          </SingleChartOuterWrapper>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Homework per lecture (%)</ChartTitle>
              <ChartSubtitle>Your homework</ChartSubtitle>
              <BarChartWrapper>
                <BarChart barData={usersHomeworkResults} />
              </BarChartWrapper>
            </SingleChartInnerWrapper>
          </SingleChartOuterWrapper>
          <DoughnutChartsWrapper>
            <SingleChartOuterWrapper isDoughnut={true}>
              <SingleChartInnerWrapper>
                <ChartTitle>Team work</ChartTitle>
                <ChartSubtitle>Your team work results</ChartSubtitle>
                <DoughnutChart doughnutData={doughnutMock1} />
              </SingleChartInnerWrapper>
            </SingleChartOuterWrapper>
            <SingleChartOuterWrapper isDoughnut={true}>
              <SingleChartInnerWrapper>
                <ChartTitle>Final exam</ChartTitle>
                <ChartSubtitle>Your final exam results</ChartSubtitle>
                <DoughnutChart doughnutData={doughnutMock2} />
              </SingleChartInnerWrapper>
            </SingleChartOuterWrapper>
          </DoughnutChartsWrapper>
        </BarChartGrid>
      </ChartsWrapper>
    </>
  );
};

export default MyResults;
