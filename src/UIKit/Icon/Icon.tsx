import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { IconProps } from 'react-native-vector-icons/Icon';

import config from './selection.json';

export enum IconNames {
  chats = 'chats',
  analytics = 'analytics',
  payments = 'payments',
  history = 'history',
  home = 'home',
  user = 'user',
  qrCode = 'qrCode',
  chevronRight = 'chevronRight',
  chevronLeft = 'chevronLeft',
  message = 'message',
}

export const IconSet = createIconSetFromIcoMoon(config);

export const Icon: React.FC<IconProps> = ({ size = 24, ...rest }) => {
  return <IconSet size={size} {...rest} style={{ lineHeight: size }} />;
};
