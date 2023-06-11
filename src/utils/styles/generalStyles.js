import styled from 'styled-components';
import { breakpoints, colors } from './theme';
import {
  Field as FieldFormik,
  Form as FormFormik,
  ErrorMessage as ErrorMessageFormik,
} from 'formik';

//GRID
export const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    ${(props) =>
      props.isAwards &&
      `
      grid-template-columns:repeat(4,1fr)
    `}
  }
`;

export const GridWrapper = styled.div`
  max-width: 1120px;
`;

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

//INPUT
export const InputField = styled(FieldFormik)`
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 8px;
  font-size: 16px;
  color: ${colors.textPrimaryGrey};

  &::placeholder {
    color: ${colors.textSecondaryGrey};
    font-weight: 400;
  }

  border: ${({ error }) =>
    error
      ? `2px solid ${colors.redPrimary}`
      : `1px solid ${colors.avatarBorder}`};

  @media screen and (${breakpoints.desktop}) {
  }

  @media screen and (${breakpoints.tablet}) {
    padding: 16px 24px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 16px 24px;
  }

  ${(props) =>
    props.isDisabled &&
    `
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textLightGrey};
  `}

  ${(props) =>
    props.isEnabled &&
    `
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textPrimary};
  `}

  ${(props) =>
    props.isPasswordDisabled &&
    `
      height: 44px;
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textLightGrey};
      font-size: 30px;
      letter-spacing: 3px;
  `}

${(props) =>
    props.isPasswordEnabled &&
    `
      height: 44px;
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textPrimary};
      font-size: 30px;
      letter-spacing: 3px;
  `}

${(props) =>
    props.isPasswordVisible &&
    `
      height: 44px;
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textPrimary};
      font-size: 18px;
      /* letter-spacing: 3px; */
  `}
`;

export const InputLabel = styled.label`
  color: ${colors.textPrimaryGrey};
  font-size: 16px;
  font-weight: 500;

  ${(props) =>
    props.isDisabled &&
    `
      color: ${colors.textSecondaryGrey};
  `}

  ${(props) =>
    props.isEnabled &&
    `
      color: ${colors.textPrimary};
  `}
`;

export const RequiredField = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.primaryRed};
`;

// FORM

export const Form = styled(FormFormik)`
  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 400px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.redPrimary};
  padding-top: 6px;
`;
