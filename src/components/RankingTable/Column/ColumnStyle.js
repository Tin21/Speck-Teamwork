import styled from 'styled-components';

export const ColumnBody = styled.div`
  ${(props) =>
    props.isRanking &&
    `
        margin-left: 26px;
    `}
`;
