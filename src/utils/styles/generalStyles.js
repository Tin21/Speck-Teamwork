import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 24px;
  gap: 8px;
  background: #bf3939;
  border-radius: 48px;
  color: white;
  border: 0;
  width: 100%;
  font-weight: 600;

  ${(props) =>
    props.isSecondary &&
    `
      border: 1px solid #D2D2D2;
      padding: 12px 24px;
      color: #bf3939;
      background: rgba(191, 57, 57, 0);
    `}

  ${(props) =>
    props.isVariant &&
    `
      color: #081131;
      background: #FAFAFA;

    `}

  &:hover {
    background: #aa1d1d;
    cursor: pointer;

    ${(props) =>
      props.isSecondary &&
      `
        background: rgba(191, 57, 57, 0.08);
      `}

    ${(props) =>
      props.isVariant &&
      `
      background: rgba(191, 57, 57, 0.08);
    `}
  }
`;
