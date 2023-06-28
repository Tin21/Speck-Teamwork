import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ThreeDots } from 'react-loader-spinner';
import { colors } from '../../utils/styles/theme';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
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

const getTextColor = (percentage) => {
  if (percentage >= 80) {
    return colors.white;
  } else {
    return colors.textPrimaryGrey;
  }
};

const BarChart = ({ barData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [barData]);

  const fetchData = async () => {
    const labels = barData.map((item) => item.name);
    const data = {
      labels,
      datasets: [
        {
          data: barData.map((item) =>
            Math.round((item.userPoints * 100) / item.maxPoints),
          ),
          backgroundColor: barData.map((item) =>
            getBarColor(Math.round((item.userPoints * 100) / item.maxPoints)),
          ),
          barPercentage: 1.0,
          categoryPercentage: 1.0,
        },
      ],
    };

    setChartData(data);
    setIsLoading(false);
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        color: (context) =>
          getTextColor(context.dataset.data[context.dataIndex]),
        font: {
          size: 12,
          family: 'Inter',
        },
        align: (context) => {
          const percentage = context.dataset.data[context.dataIndex];
          if (percentage < 40) {
            return 'end';
          } else {
            return 'start';
          }
        },
        anchor: 'end',
        offset: (context) => {
          const dataWidth = context.chart.ctx.measureText(
            `${context.dataset.data[context.dataIndex]}%`,
          ).width;
          const percentage = context.dataset.data[context.dataIndex];
          if (percentage < 40) {
            return dataWidth - 10;
          } else {
            return dataWidth - 20;
          }
        },
        formatter: (value, context) =>
          `${context.chart.data.labels[context.dataIndex]} ${value}%`,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            const { userPoints, maxPoints } = barData[index];
            return `Your points: ${userPoints}\nMax points: ${maxPoints}`;
          },
        },
      },
    },
    hover: {
      mode: null,
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      {isLoading || !chartData ? (
        <ThreeDots
          color="#af6118"
          wrapperStyle={{
            justifyContent: 'center',
          }}
        />
      ) : (
        <Bar options={options} data={chartData} />
      )}
    </>
  );
};

BarChart.propTypes = {
  barData: PropTypes.array,
};

export default BarChart;
