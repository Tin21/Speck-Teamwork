import styled from 'styled-components';

export const HeaderColumn = styled.div`
  display: flex;
  gap: 9px;
  margin-left: 60px;

  &:first-of-type {
    margin-left: 0px;
  }

  &:last-of-type {
    margin-right: 80px;
  }
`;

export const AscDesc = styled.div`
  display: flex;
  flex-direction: column;
`;
