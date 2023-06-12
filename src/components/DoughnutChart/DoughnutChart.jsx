import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartText, DoughnutChartWrapper } from './DoughnutChartStyle';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: ['', ''],
      data: [12.5, 87.5],
      backgroundColor: [
        'rgba(202, 113, 11, 0.911)',
        'rgba(207, 207, 207, 0.911)',
      ],
      borderColor: ['rgba(202, 113, 11, 0.911)', 'rgba(207, 207, 207, 0.911)'],
      borderWidth: 0.1,
    },
  ],
};

const options = {
  cutout: '85%',
  responsive: true,
};

const DoughnutChart = () => {
  return (
    <>
      <DoughnutChartWrapper>
        <DoughnutChartText>12,5%</DoughnutChartText>
        <Doughnut data={data} options={options} />
      </DoughnutChartWrapper>
    </>
  );
};

export default DoughnutChart;
