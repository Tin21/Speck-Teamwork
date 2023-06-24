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
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import { getLoggedUser } from '../../api/users';
import { getAllLectures, getResultByUserId } from '../../api/lectures';
import { useState } from 'react';

const MyResults = () => {
  const { loggedUser, setLoggedUser } = useContext(AuthContext);
  const [usersQuizResults, setUsersQuizResults] = useState([]);

  const getLoggedUserData = async () => {
    const loggedUser = await getLoggedUser(
      localStorage.getItem('jwt_token'),
      localStorage.getItem('logged_user_id'),
    );
    setLoggedUser(loggedUser);
    console.log(loggedUser.first_name);
  };

  const getUsersQuizResults = async () => {
    let allLectures = await getAllLectures(localStorage.getItem('jwt_token'));
    console.log(allLectures);

    getResultByUserId();

    // izvuci id i name svakog lecturea
    const quizResults = allLectures.map((element) => {
      return {
        id: element.id,
        name: element.name,
        percentage: Math.floor(Math.random() * 101),
      };
    });
    setUsersQuizResults(quizResults);

    console.log('---usersQuizResults:');
    console.log(quizResults);
  };

  useEffect(() => {
    getLoggedUserData();
    getUsersQuizResults();
  }, []);

  return (
    <>
      <div>
        <p>
          Logirani user: {loggedUser ? loggedUser.first_name : 'Loading...'}
        </p>
      </div>
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
              <ChartTitle>Quiz results per lecture (%)</ChartTitle>
              <ChartSubtitle>Your quiz results</ChartSubtitle>
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
