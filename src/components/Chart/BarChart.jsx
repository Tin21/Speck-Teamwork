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
// TODO make rows thicker and remove space between 2 rows
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

const labels = chartMock.map((item) => item.title);

export const data = {
  labels,
  datasets: [
    {
      data: chartMock.map((item) => item.percentage),
      backgroundColor: chartMock.map((item) => getBarColor(item.percentage)),
      barPercentage: 1.0,
      categoryPercentage: 1.0,
    },
  ],
};

const BarChart = () => {
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
      ctx.fillText(`${index + 1}. ${label} ${data}%`, x, y);
      ctx.restore();
    });
  };

  return (
    <Bar
      options={options}
      data={data}
      plugins={[{ afterDraw: handleAfterRender }]}
    />
  );
};

export default BarChart;
