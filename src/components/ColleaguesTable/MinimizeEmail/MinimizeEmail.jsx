import React, { useContext } from 'react';
import { CloseLogoTablet } from '../../Email/EmailStyle';
import {
  ExpandWrapper,
  ExpandedMin,
  InnerWrapperMini,
  MinimizedBottom,
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

  // if (!isMinimized) {
  //   return null;
  // }

  return (
    <MinimizedBottom>
      <InnerWrapperMini>
        <MinimizedText miniLeftRounded>Delete</MinimizedText>
        <CloseLogoTablet />
        <ExpandWrapper>
          <MinimizedText>Keep Writing</MinimizedText>
          <ExpandedMin
            onClick={() => {
              setIsPopupOpen(true);
              setIsMinimized(false);
            }}
          />
        </ExpandWrapper>
      </InnerWrapperMini>
    </MinimizedBottom>
  );
};
