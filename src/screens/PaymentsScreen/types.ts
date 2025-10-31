import { FlatListProps, ImageSourcePropType } from 'react-native';
import { FC } from 'react';

export type NotificationType = {
  id: number;
  date: string;
  receivedImage?: ImageSourcePropType;
  receivedTitle?: string;
  receivedSum?: string;
  receivedCard?: string;
  receivedTotalSum?: string;
  receivedDate?: string;
  receivedType?: string;
  isOnline?: boolean;
  subTitle?: string;
  sentImage?: ImageSourcePropType;
  sentTitle?: string;
  sentSum?: string;
  sentCard?: string;
  sentTotalSum?: string;
  sentDate?: string;
  sentType?: string;
};

export type FlatListType = <T>(
  props: FlatListProps<T>,
) => ReturnType<FC<FlatListProps<T>>>;
