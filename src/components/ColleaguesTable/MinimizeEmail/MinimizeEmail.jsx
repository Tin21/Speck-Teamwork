import React, { useContext } from 'react';
import { CloseLogoTablet } from '../../Email/EmailStyle';
import {
  ExpandWrapper,
  ExpandedMin,
  InnerWrapperMini,
  MinimizedBottom,
  MinimizedButton,
  MinimizedText,
} from './MinimizeEmailStyle';
import { EmailContext } from '../../../context/EmailContext';

export const MinimizeEmail = () => {
  const { setIsPopupOpen, setIsMinimized, setIsDeleteOpen } =
    useContext(EmailContext);

  return (
    <MinimizedBottom>
      <InnerWrapperMini>
        <MinimizedButton
          onClick={() => {
            setIsPopupOpen(false);
            setIsMinimized(false);
            setIsDeleteOpen(true);
          }}
        >
          Delete
        </MinimizedButton>
        <CloseLogoTablet
          onClick={() => {
            setIsPopupOpen(false);
            setIsMinimized(false);
            setIsDeleteOpen(true);
          }}
        />
        <ExpandWrapper
          onClick={() => {
            setIsPopupOpen(true);
            setIsMinimized(false);
          }}
        >
          <MinimizedText>Keep Writing</MinimizedText>
          <ExpandedMin />
        </ExpandWrapper>
      </InnerWrapperMini>
    </MinimizedBottom>
  );
};
