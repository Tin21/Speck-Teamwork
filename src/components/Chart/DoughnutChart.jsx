import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutChartText, DoughnutChartWrapper } from './ChartStyle';
import { colors } from '../../utils/styles/theme';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  cutout: '85%',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
  hover: {
    mode: null,
  },
};

const DoughnutChart = ({ doughnutData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
      setChartData(data);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
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
