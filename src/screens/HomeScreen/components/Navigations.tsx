import React from 'react';
import { ESpacings, Row } from '@UIKit';
import { NavigationItem } from './NavigationItem.tsx';
import { NavItemType } from '../types.ts';

type Props = {
  navigationItems: NavItemType[];
};

export const Navigations: React.FC<Props> = ({ navigationItems }) => {
  return (
    <Row
      alignItems={'center'}
      justifyContent="space-between"
      marginBottom={ESpacings.s24}
    >
      {navigationItems.map(item => (
        <NavigationItem navItem={item} key={item.title} />
      ))}
    </Row>
  );
};
