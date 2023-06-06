import styled from 'styled-components';
import { colors } from './theme';

export const Button = styled.button`
  padding: 14px 24px;
  gap: 8px;
  background: ${colors.buttonPrimary};
  border-radius: 48px;
  color: white;
  border: 0;
  width: 100%;
  font-weight: 600;

  ${(props) =>
    props.isSecondary &&
    `
      border: 1px solid ${colors.buttonBorder};
      padding: 12px 24px;
      color: ${colors.buttonPrimary};
      background: rgba(191, 57, 57, 0);
    `}

  ${(props) =>
    props.isVariant &&
    `
      color: ${colors.textPrimary};;
      background: ${colors.bgMenuItem};;

    `}

  &:hover {
    background: ${colors.buttonPrimaryDark};
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
