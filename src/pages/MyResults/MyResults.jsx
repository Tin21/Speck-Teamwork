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

const MyResults = () => {
  return (
    <>
      <ChartsWrapper>
        <BarChartGrid>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Attendance per lecture (%)</ChartTitle>
              <ChartSubtitle>Your attendance</ChartSubtitle>
              <BarChartWrapper>
                <BarChart />
              </BarChartWrapper>
            </SingleChartInnerWrapper>
          </SingleChartOuterWrapper>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Quiz results per lecture (%)</ChartTitle>
              <ChartSubtitle>Your quiz results</ChartSubtitle>
              <BarChartWrapper>
                <BarChart />
              </BarChartWrapper>
            </SingleChartInnerWrapper>
          </SingleChartOuterWrapper>
          <SingleChartOuterWrapper>
            <SingleChartInnerWrapper>
              <ChartTitle>Quiz results per lecture (%)</ChartTitle>
              <ChartSubtitle>Your quiz results</ChartSubtitle>
              <BarChartWrapper>
                <BarChart />
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
