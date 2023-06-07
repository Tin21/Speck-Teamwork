import BarChart from '../components/BarChart/BarChart';
import {
  ChartSubtitle,
  ChartTitle,
  ChartWrapper,
} from '../components/BarChart/BarChartStyle';

const Achievements = () => {
  return (
    <ChartWrapper>
      <ChartTitle>Quiz results per lecture (%)</ChartTitle>
      <ChartSubtitle>Your quiz results</ChartSubtitle>
      <BarChart />
    </ChartWrapper>
  );
};

export default Achievements;
