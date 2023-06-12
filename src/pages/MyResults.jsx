import BarChart from '../components/BarChart/BarChart';
import {
  BarChartGrid,
  ChartSubtitle,
  ChartTitle,
  ChartsWrapper,
  SingleChartWrapper,
} from '../components/BarChart/BarChartStyle';

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
          <SingleChartWrapper>
            <ChartTitle>Quiz results per lecture (%)</ChartTitle>
            <ChartSubtitle>Your quiz results</ChartSubtitle>
            <BarChart />
          </SingleChartWrapper>
        </BarChartGrid>
      </ChartsWrapper>
    </>
  );
};

export default MyResults;
