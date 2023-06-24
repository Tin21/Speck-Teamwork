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

const getTextColor = (percentage) => {
  if (percentage >= 80) {
    return colors.white;
  } else {
    return colors.textPrimaryGrey;
  }
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
  },
  hover: {
    mode: null,
  },
  scales: {
    x: {
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

const BarChart = ({ barData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  const handleAfterRender = (chart) => {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);

    ctx.font = '12px Inter';

    meta.data.forEach((bar, index) => {
      const data = chart.data.datasets[0].data[index];
      const label = chart.data.labels[index];
      ctx.save();

      ctx.textBaseline = 'middle';
      ctx.textAlign = 'end';
      ctx.fillStyle = `${getTextColor(data)}`;

      const x = bar.x - 10;
      const y = bar.y;
      ctx.fillText(`${label} ${data}%`, x, y);
      ctx.restore();
    });
  };

  useEffect(() => {
    setTimeout(() => {
      const labels = barData.map((item) => item.name);
      const data = {
        labels,
        datasets: [
          {
            data: barData.map((item) => item.percentage),
            backgroundColor: barData.map((item) =>
              getBarColor(item.percentage),
            ),
            barPercentage: 1.0,
            categoryPercentage: 1.0,
          },
        ],
      };

      setChartData(data);
      setIsLoading(false);
    }, 400);
  }, [barData]);

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
        <Bar
          options={options}
          data={chartData}
          plugins={[{ afterDraw: handleAfterRender }]}
        />
      )}
    </>
  );
};

BarChart.propTypes = {
  barData: PropTypes.array,
};

export default BarChart;
