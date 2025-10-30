import React from 'react';
import { ESpacings, Row } from '@UIKit';
import { NavigationItem } from './NavigationItem.tsx';
import {
  BonusesImage,
  DeliveryImage,
  SupportImage,
  TravelImage,
} from '@assets/images';
import { NavItemType } from '../types.ts';

const NAVIGATION_ITEMS: NavItemType[] = [
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

export const Navigations = () => {
  return (
    <Row
      alignItems={'center'}
      justifyContent="space-between"
      marginBottom={ESpacings.s24}
    >
      {NAVIGATION_ITEMS.map(item => (
        <NavigationItem navItem={item} key={item.title} />
      ))}
    </Row>
  );
};
