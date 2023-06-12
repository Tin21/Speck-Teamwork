import BadgeExamSilver from '../../assets/images/badges/badge-exam-icon-silver.svg';
import BadgeExamGold from '../../assets/images/badges/badge-exam-icon-gold.svg';
import BadgeTaskSilver from '../../assets/images/badges/badge-task-icon-silver.svg';
import BadgeTaskGold from '../../assets/images/badges/badge-task-icon-gold.svg';
import BadgeTeamSilver from '../../assets/images/badges/badge-team-icon-silver.svg';
import BadgeTeamGold from '../../assets/images/badges/badge-team-icon-gold.svg';
import BadgeQuizSilver from '../../assets/images/badges/badge-quiz-icon-silver.svg';
import BadgeQuizGold from '../../assets/images/badges/badge-quiz-icon-gold.svg';
import BadgeTimeSilver from '../../assets/images/badges/badge-time-icon-silver.svg';
import BadgeTimeGold from '../../assets/images/badges/badge-time-icon-gold.svg';

export const badges = [
  {
    id: 1,
    imgSrc: BadgeQuizSilver,
    imgAlt: 'Silver quiz badge',
    title: 'Quiz Ninja',
    checked: true,
    isGolden: false,
  },
  {
    id: 2,
    imgSrc: BadgeQuizGold,
    imgAlt: 'Gold quiz badge',
    title: 'Quiz Pro',
    checked: true,
    isGolden: true,
  },
  {
    id: 3,
    imgSrc: BadgeTaskSilver,
    imgAlt: 'Silver task badge',
    title: 'Task Ninja',
    checked: true,
    isGolden: false,
  },
  {
    id: 4,
    imgSrc: BadgeTaskGold,
    imgAlt: 'Gold task badge',
    title: 'Task Pro',
    checked: false,
    isGolden: true,
  },
  {
    id: 5,
    imgSrc: BadgeTeamSilver,
    imgAlt: 'Silver team badge',
    title: 'Team Ninja',
    checked: false,
    isGolden: false,
  },
  {
    id: 6,
    imgSrc: BadgeTeamGold,
    imgAlt: 'Gold team badge',
    title: 'Team Pro',
    checked: false,
    isGolden: true,
  },
  {
    id: 7,
    imgSrc: BadgeExamSilver,
    imgAlt: 'Silver exam badge',
    title: 'Exam Ninja',
    checked: false,
    isGolden: false,
  },
  {
    id: 8,
    imgSrc: BadgeExamGold,
    imgAlt: 'Gold exam badge',
    title: 'Exam Pro',
    checked: false,
    isGolden: true,
  },
  {
    id: 9,
    imgSrc: BadgeTimeSilver,
    imgAlt: 'Silver time badge',
    title: 'Time Ninja',
    checked: false,
    isGolden: false,
  },
  {
    id: 10,
    imgSrc: BadgeTimeGold,
    imgAlt: 'Gold time badge',
    title: 'Time Pro',
    checked: false,
    isGolden: true,
  },
];
