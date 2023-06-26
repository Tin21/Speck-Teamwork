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
  const {
    isPopupOpen,
    setIsPopupOpen,
    isMinimized,
    setIsMinimized,
    emailData,
    setEmailData,
  } = useContext(EmailContext);

  return (
    <MinimizedBottom>
      <InnerWrapperMini>
        <MinimizedButton
          onClick={() => {
            setIsPopupOpen(false);
            setIsMinimized(false);
          }}
        >
          Delete
        </MinimizedButton>
        <CloseLogoTablet
          onClick={() => {
            setIsPopupOpen(false);
            setIsMinimized(false);
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
