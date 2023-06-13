import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartText, DoughnutChartWrapper } from './ChartStyle';
import { colors } from '../../utils/styles/theme';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '85%',
  responsive: true,
};

const DoughnutChart = ({ doughnutData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setIsLoading(false);
    }, 400);

    const data = {
      labels: [],
      datasets: [
        {
          data: [doughnutData, 100 - doughnutData],
          backgroundColor: [
            `${colors.chartBarBrownDark}`,
            `${colors.doughnutChartGrey}`,
          ],
          borderColor: [
            `${colors.chartBarBrownDark}`,
            `${colors.doughnutChartGrey}`,
          ],
          borderWidth: 0.1,
        },
      ],
    };
  }, [doughnutData]);

  return (
    <>
      {isLoading ? (
        <ThreeDots
          color="#af6118"
          wrapperStyle={{
            justifyContent: 'center',
          }}
        />
      ) : (
        <DoughnutChartWrapper>
          <DoughnutChartText>{doughnutData}%</DoughnutChartText>
          <Doughnut data={chartData} options={options} />
        </DoughnutChartWrapper>
      )}
    </>
  );
};

DoughnutChart.propTypes = {
  doughnutData: PropTypes.number,
};

export default DoughnutChart;
