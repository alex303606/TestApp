import { CreditCardType, ExpenseType, NavItemType } from './types.ts';
import {
  BonusesImage,
  DeliveryImage,
  GreyCardBackground,
  OrangeCardBackground,
  SupportImage,
  TravelImage,
} from '@assets/images';

export const CREDIT_CARDS_ITEMS: CreditCardType[] = [
  {
    balance: '4,098.12',
    type: 'Debit',
    number: '4385',
    background: OrangeCardBackground,
  },
  {
    balance: '14.71',
    type: 'Virtual',
    number: '9081',
    background: GreyCardBackground,
  },
  {
    balance: '147.43',
    type: 'Virtual',
    number: '7375',
    background: OrangeCardBackground,
  },
];

export const NAVIGATION_ITEMS: NavItemType[] = [
  {
    title: 'travel',
    image: TravelImage,
  },
  {
    title: 'bonuses',
    image: BonusesImage,
  },
  {
    title: 'delivery',
    image: DeliveryImage,
  },
  {
    title: 'support',
    image: SupportImage,
  },
];

export const EXPENSES: ExpenseType[] = [
  {
    percent: 20,
    backgroundColor: '#CC3F02',
  },
  {
    percent: 25,
    backgroundColor: '#FE5900',
  },
  {
    percent: 30,
    backgroundColor: '#FF9332',
  },
  {
    percent: 10,
    backgroundColor: '#FFD8A5',
  },
  {
    percent: 15,
    backgroundColor: '#FFD8A5',
  },
];
