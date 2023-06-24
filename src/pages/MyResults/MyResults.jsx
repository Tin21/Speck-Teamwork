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
  getAllLectures,
  getLectureCriteriaByUserId,
  getLectureCriteriaDataById,
  getLectureNameById,
} from '../../api/lectures';

const MyResults = () => {
  const [usersQuizResults, setUsersResults] = useState([]);

  useEffect(() => {
    _getChartData();
  }, []);

  const _getChartData = async () => {
    const allLectures = await getAllLectures(localStorage.getItem('jwt_token'));
    const lectureCriteriaById = await getLectureCriteriaByUserId(
      localStorage.getItem('jwt_token'),
      localStorage.getItem('logged_user_id'),
    );
    const filteredByNameList = _filterByName('Quiz', lectureCriteriaById); // TODO promijeni da se 1. parametar salje ko argument

    const results = await Promise.all(
      allLectures.map(async (element) => {
        const lectureNames = await Promise.all(
          filteredByNameList.map(async (el) => {
            const lectureCriteriaData = await _getlectureCriteriaData(
              el.lecture_criteria_id,
            );
            const lectureName = await _getLectureNameByLectureId(
              lectureCriteriaData.lecture_id,
            );
            return lectureName;
          }),
        );

        // prikaz samo onih koji su trazenog tipa (kviz/zadaca)
        if (lectureNames.includes(element.name)) {
          return {
            id: element.id, // useless
            name: element.name,
            percentage: Math.floor(Math.random() * 101),
          };
        }

        return null;
      }),
    );

    const filteredResults = results.filter((result) => result !== null);
    setUsersResults(filteredResults);
  };

  const _filterByName = (name, lectureCriteria) => {
    const filteredByName = lectureCriteria.filter(
      (el) => el.lecture_criterium.criteria.name === name,
    );
    return filteredByName;
  };

  const _getlectureCriteriaData = async (id) => {
    const data = await getLectureCriteriaDataById(
      localStorage.getItem('jwt_token'),
      id,
    );
    return data;
  };

  const _getLectureNameByLectureId = async (id) => {
    const data = await getLectureNameById(
      localStorage.getItem('jwt_token'),
      id,
    );
    return data.name;
  };

  return (
    <>
      <ChartsWrapper>
        <BarChartGrid>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Attendance per lecture (%)</ChartTitle>
              <ChartSubtitle>Your attendance</ChartSubtitle>
              <BarChartWrapper>
                <BarChart barData={chartMock} />
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
                <BarChart barData={chartMock} />
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
