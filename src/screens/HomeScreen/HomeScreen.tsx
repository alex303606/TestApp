import React from 'react';
import { Block, Colors, ESpacings, Typography } from '@UIKit';

export const HomeScreen: React.FC = () => {
  return (
    <Block
      padding={ESpacings.s16}
      paddingTop={ESpacings.s24}
      flex={1}
      backgroundColor={Colors.black}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography.M16 color={Colors.white}>Home Screen</Typography.M16>
    </Block>
  );
};
