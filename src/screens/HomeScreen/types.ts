import { ImageSourcePropType } from 'react-native';

export type NavItemType = {
  image: number;
  title: string;
};

export type CreditCardType = {
  balance: string;
  type: string;
  number: string;
  background: ImageSourcePropType;
};
