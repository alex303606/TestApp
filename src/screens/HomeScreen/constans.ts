import {
  CreditCardType,
  ExpenseType,
  HistoryType,
  NavItemType,
} from './types.ts';
import {
  AvatarImage,
  BonusesImage,
  DeliveryImage,
  GreyCardBackground,
  NetflixImage,
  OrangeCardBackground,
  StarbucksImage,
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
    percent: 40,
    backgroundColor: '#CC3F02',
  },
  {
    percent: 25,
    backgroundColor: '#FE5900',
  },
  {
    percent: 20,
    backgroundColor: '#FF9332',
  },
  {
    percent: 15,
    backgroundColor: '#FFD8A5',
  },
];

export const HISTORY: HistoryType[] = [
  {
    title: 'Today',
    data: [
      {
        title: 'Matthew Billson',
        id: 1,
        sybTitle: 'Money Transfer',
        price: '122.47',
        date: 'Jun 8, 19:21',
        logo: AvatarImage,
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        title: 'Starbucks',
        id: 4,
        sybTitle: 'Food',
        price: '56.19',
        date: 'Jun 8, 19:21',
        logo: StarbucksImage,
      },
      {
        title: 'Netflix',
        id: 5,
        sybTitle: 'Entertainment',
        price: '22.47',
        date: 'Jun 8, 19:21',
        logo: NetflixImage,
      },
      {
        title: 'Matthew Billson',
        id: 6,
        sybTitle: 'Money Transfer',
        price: '1271.47',
        date: 'Jun 8, 19:21',
        logo: AvatarImage,
      },
    ],
  },
  {
    title: '20.10.2024',
    data: [
      {
        title: 'Starbucks',
        id: 7,
        sybTitle: 'Food',
        price: '56.19',
        date: 'Jun 8, 19:21',
        logo: StarbucksImage,
      },
      {
        title: 'Matthew Billson',
        id: 8,
        sybTitle: 'Money Transfer',
        price: '122.47',
        date: 'Jun 8, 19:21',
        logo: AvatarImage,
      },
      {
        title: 'Starbucks',
        id: 9,
        sybTitle: 'Food',
        price: '12.47',
        date: 'Jun 8, 19:21',
        logo: StarbucksImage,
      },
    ],
  },
  {
    title: '11.08.2024',
    data: [
      {
        title: 'Matthew Billson',
        id: 10,
        sybTitle: 'Money Transfer',
        price: '1223.47',
        date: 'Jun 8, 19:21',
        logo: AvatarImage,
      },
      {
        title: 'Netflix',
        id: 11,
        sybTitle: 'Entertainment',
        price: '122.47',
        date: 'Jun 8, 19:21',
        logo: NetflixImage,
      },
      {
        title: 'Matthew Billson',
        id: 12,
        sybTitle: 'Money Transfer',
        price: '1422.47',
        date: 'Jun 8, 19:21',
        logo: AvatarImage,
      },
      {
        title: 'Starbucks',
        id: 22,
        sybTitle: 'Food',
        price: '1.47',
        date: 'Jun 8, 19:21',
        logo: StarbucksImage,
      },
      {
        title: 'Netflix',
        id: 33,
        sybTitle: 'Entertainment',
        price: '12.47',
        date: 'Jun 8, 19:21',
        logo: NetflixImage,
      },
    ],
  },
];
