import React from 'react';
import { ESpacings, Row } from '@UIKit';
import { NavigationItem } from './NavigationItem.tsx';
import {
  BonusesImage,
  DeliveryImage,
  SupportImage,
  TravelImage,
} from '@assets/images';
import { useTranslation } from 'react-i18next';

const NAVIGATION_ITEMS = [
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
  const { t } = useTranslation();

  return (
    <Row
      alignItems={'center'}
      justifyContent="space-between"
      marginBottom={ESpacings.s24}
    >
      {NAVIGATION_ITEMS.map(item => (
        <NavigationItem
          key={item.title}
          image={item.image}
          title={t(`homeScreen:${item.title}`)}
        />
      ))}
    </Row>
  );
};
