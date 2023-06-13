import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.bgModalOpaque};
  z-index: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background-color: ${colors.white};
  width: calc(100% - 48px);
  /* width: 272px; */
`;
