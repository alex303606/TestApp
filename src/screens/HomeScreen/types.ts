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

export type ExpenseType = {
  percent: number;
  backgroundColor: string;
};

export type HistoryItemType = {
  title: string;
  id: number;
  sybTitle: string;
  price: string;
  date: string;
  logo: ImageSourcePropType;
};

export type HistoryType = {
  title: string;
  data: HistoryItemType[];
};
