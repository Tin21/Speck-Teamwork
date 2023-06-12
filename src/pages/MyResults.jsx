import BarChart from '../components/BarChart/BarChart';
import {
  BarChartGrid,
  ChartSubtitle,
  ChartTitle,
  ChartsWrapper,
  SingleChartWrapper,
} from '../components/BarChart/BarChartStyle';
import DoughnutChart from '../components/DoughnutChart/DoughnutChart';
import { DoughnutChartsWrapper } from '../components/DoughnutChart/DoughnutChartStyle';

const MyResults = () => {
  return (
    <>
      <ChartsWrapper>
        <BarChartGrid>
          <SingleChartWrapper>
            <ChartTitle>Quiz results per lecture (%)</ChartTitle>
            <ChartSubtitle>Your quiz results</ChartSubtitle>
            <BarChart />
          </SingleChartWrapper>
          <SingleChartWrapper>
            <ChartTitle>Quiz results per lecture (%)</ChartTitle>
            <ChartSubtitle>Your quiz results</ChartSubtitle>
            <BarChart />
          </SingleChartWrapper>
          <SingleChartWrapper>
            <ChartTitle>Quiz results per lecture (%)</ChartTitle>
            <ChartSubtitle>Your quiz results</ChartSubtitle>
            <BarChart />
          </SingleChartWrapper>
          <DoughnutChartsWrapper>
            <SingleChartWrapper isDoughnut={true}>
              <ChartTitle>Quiz results per lecture (%)</ChartTitle>
              <ChartSubtitle>Your quiz results</ChartSubtitle>
              <DoughnutChart />
            </SingleChartWrapper>
            <SingleChartWrapper isDoughnut={true}>
              <ChartTitle>Quiz results per lecture (%)</ChartTitle>
              <ChartSubtitle>Your quiz results</ChartSubtitle>
              <DoughnutChart />
            </SingleChartWrapper>
          </DoughnutChartsWrapper>
        </BarChartGrid>
      </ChartsWrapper>
    </>
  );
};

export default MyResults;
