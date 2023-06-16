import styled from 'styled-components';

export const HeaderColumn = styled.div`
  display: flex;
  gap: 9px;
  margin-right: 90px;

  ${(props) =>
    props.isName &&
    `
        width: 150px;
      `}
`;

export const AscDesc = styled.div`
  display: flex;
  flex-direction: column;
`;
