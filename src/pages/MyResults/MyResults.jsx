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

const MyResults = () => {
  const [usersQuizResults, setUsersResults] = useState([]);

  useEffect(() => {
    _getChartData();
  }, []);

  const _getChartData = async () => {
    const lectureCriteriaById = await getLectureCriteriaByUserId(
      localStorage.getItem('jwt_token'),
      localStorage.getItem('logged_user_id'),
    );

    const filteredLectureCriteriaByNameList = _filterByName(
      'Quiz',
      lectureCriteriaById,
    ); // TODO promijeni da se 1. parametar salje ko argument
    console.log(filteredLectureCriteriaByNameList);

    const results = [];
    for (const element of filteredLectureCriteriaByNameList) {
      console.log(element);

      const itemName = (await _getData(element.lecture_criteria_id)).name;
      const itemUserPoints = element.points;
      const itemMaxPoints = element.lecture_criterium.total_points;

      results.push({
        name: itemName,
        percentage: Math.round((itemUserPoints * 100) / itemMaxPoints),
      });
    }
    console.log(results);
    setUsersResults(results);
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
