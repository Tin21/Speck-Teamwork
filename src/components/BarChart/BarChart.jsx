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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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
};

const labels = ['', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      data: chartMock.map((item) => item.percentage),
      backgroundColor: 'rgba(175, 98, 35, 0.637)', // TODO boja ovisi o postotku - tu metoda koja uzima postotak i vraca boju
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
