import React from 'react';
import { constants } from '../constants';
import { IconEmail, IconLock, IconPasswordHide } from '../assets/icons';
import { SvgProps } from 'react-native-svg';

export type fieldItemTypes = {
  rules?: Object;
  inputPreIcon?: (props: SvgProps) => Element;
  inputPostIcon?: (props: SvgProps) => Element;
  inputPlaceholder: string;
  name: string;
};

export const signInFieldItems: fieldItemTypes[] = [
  {
    rules: {
      required: true,
      pattern: constants.EMAIL_PATTERN,
    },
    inputPreIcon: IconEmail,
    inputPlaceholder: 'Enter your email',
    name: 'email',
  },
  {
    rules: {
      required: true,
      minLength: 6,
    },
    inputPreIcon: IconLock,
    inputPostIcon: IconPasswordHide,
    inputPlaceholder: 'Enter your password',
    name: 'password',
  },
  {
    inputPreIcon: IconLock,
    inputPostIcon: IconPasswordHide,
    inputPlaceholder: 'Re-enter your password',
    name: 'confirmPassword',
  },
];
