import React from 'react';
import { CloseLogo } from '../../Email/EmailStyle';
import {
  ExpandWrapper,
  ExpandedMin,
  InnerWrapperMini,
  MinimizedBottom,
  MinimizedText,
} from './MinimizeEmailStyle';

export const MinimizeEmail = () => {
  return (
    <MinimizedBottom>
      <InnerWrapperMini>
        <MinimizedText miniLeftRounded>Delete</MinimizedText>
        <CloseLogo isMini />
        <ExpandWrapper>
          <MinimizedText>Keep Writing</MinimizedText>
          <ExpandedMin />
        </ExpandWrapper>
      </InnerWrapperMini>
    </MinimizedBottom>
  );
};
