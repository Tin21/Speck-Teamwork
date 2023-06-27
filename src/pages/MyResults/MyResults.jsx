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
import { doughnutMock1, doughnutMock2 } from '../../utils/mock/chartData';
import { useEffect, useState } from 'react';
import {
  getAllLectures,
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

  const [teamworkResult, setTeamworkResult] = useState(0);
  const [finalExamResult, setFinalExamResult] = useState(0);
  let allLectures;
  const [secondCertificatePercentage, setSecondCertificatePercentage] =
    useState([]);

  useEffect(() => {
    _getChartData('Quiz');
    _getChartData('Homework');
    _getChartData('Attendance');
    _getChartData('Final exam');
    _getChartData('Teamwork');
    _calculateCertificatePercentages();
  }, []);

  const _getChartData = async (type) => {
    allLectures = await getAllLectures(localStorage.getItem('jwt_token'));
    const lectureCriteriaById = await getLectureCriteriaByUserId(
      localStorage.getItem('jwt_token'),
      localStorage.getItem('logged_user_id'),
    );

    const filteredLectureCriteriaByNameList = _filterByName(
      type,
      lectureCriteriaById,
    );

    let results;
    if (type == 'Quiz' || type == 'Attendance' || type == 'Homework') {
      results = [];
    } else {
      results = 0;
    }

    for (const element of filteredLectureCriteriaByNameList) {
      const itemName = (await _getData(element.lecture_criterium.lecture_id))
        .name;
      const itemUserPoints = element.points;
      const itemMaxPoints = element.lecture_criterium.total_points;

      if (type == 'Quiz' || type == 'Attendance' || type == 'Homework') {
        results.push({
          name: itemName,
          percentage: Math.round((itemUserPoints * 100) / itemMaxPoints),
        });
      } else {
        await _getData(element.lecture_criterium.lecture_id).name;
        const itemUserPoints = element.points;
        const itemMaxPoints = element.lecture_criterium.total_points;
        results = Math.round((itemUserPoints * 100) / itemMaxPoints);
      }
    }

    await checkIfAllLecturesAreShown(type, results);

    if (type == 'Quiz') {
      setUsersQuizResults(results);
    } else if (type == 'Homework') {
      setUsersHomeworkResults(results);
    } else if (type == 'Attendance') {
      setUsersAttendanceResults(results);
    } else if (type == 'Final exam') {
      setFinalExamResult(results);
    } else if (type == 'Teamwork') {
      setTeamworkResult(results);
    }
  };

  const checkIfAllLecturesAreShown = async (type, results) => {
    if (type == 'Attendance') {
      allLectures.map((el) => {
        if (results.find((res) => res.name == el.name) == undefined) {
          results.push({
            name: el.name,
            percentage: 0,
          });
        }
      });
      _sortResults(results);
    } else if (type == 'Quiz' || type == 'Homework') {
      let lecturesWithTypeCriteria = [];
      for (const el of allLectures) {
        let criterias = await _getAllLectureCriteriasByLectureId(el.id);
        if (
          criterias.find((criteria) => criteria.criteria.name == type) !==
          undefined
        ) {
          lecturesWithTypeCriteria.push({
            name: el.name,
          });
        }

        lecturesWithTypeCriteria.map((el) => {
          if (results.find((res) => res.name == el.name) == undefined) {
            results.push({
              name: el.name,
              percentage: 0,
            });
          }
        });
        _sortResults(results);
      }
    }
  };

  const _sortResults = (results) => {
    results.sort((a, b) => {
      const first = parseInt(a.name.split('. ')[0]);
      const second = parseInt(b.name.split('. ')[0]);
      return first - second;
    });
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

  const _getAllLectureCriteriasByLectureId = async (id) => {
    const lecture = await _getData(id);
    return lecture.lecture_criteria;
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

    // team work points
    earnedPoints += (doughnutMock1 / 100) * 40; // TODO spojit s API-jem

    // final exam points
    earnedPoints += (doughnutMock2 / 100) * 30; // TODO spojit s API-jem

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
                <DoughnutChart doughnutData={teamworkResult} />
              </SingleChartInnerWrapper>
            </SingleChartOuterWrapper>
            <SingleChartOuterWrapper isDoughnut={true}>
              <SingleChartInnerWrapper>
                <ChartTitle>Final exam</ChartTitle>
                <ChartSubtitle>Your final exam results</ChartSubtitle>
                <DoughnutChart doughnutData={finalExamResult} />
              </SingleChartInnerWrapper>
            </SingleChartOuterWrapper>
          </DoughnutChartsWrapper>
        </BarChartGrid>
      </ChartsWrapper>
    </>
  );
};

export default MyResults;
