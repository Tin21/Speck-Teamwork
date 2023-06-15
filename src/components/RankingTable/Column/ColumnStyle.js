import styled from 'styled-components';

export const ColumnBody = styled.div`
  margin-left: 90px;
  min-width: 80px;

  ${(props) =>
    props.isName &&
    `
      min-width: 120px;
  `}

  ${(props) =>
    props.isRanking &&
    `
      margin-left: 20px;
  `}

${(props) =>
    props.isPercentage &&
    `
      margin-right: 50px;
  `}
`;
