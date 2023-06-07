import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { chartMock } from '../../utils/mock/chartData';
import { colors } from '../../utils/styles/theme';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const getBarColor = (percentage) => {
  if (percentage === 100) {
    return colors.chartBarBrownDark;
  } else if (percentage >= 90) {
    return colors.chartBarBrownMedium;
  } else if (percentage >= 80) {
    return colors.chartBarBrownLight;
  } else if (percentage >= 70) {
    return colors.chartBarGreyDark;
  } else if (percentage >= 60) {
    return colors.chartBarGreyMedium;
  } else {
    return colors.chartBarGreyLight;
  }
};

export const options = {
  responsive: true,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  hover: {
    mode: null,
  },
  customText: {
    textData: chartMock.map((item) => item.title),
  },
};

const labels = ['', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      data: chartMock.map((item) => item.percentage),
      backgroundColor: chartMock.map((item) => getBarColor(item.percentage)),
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
