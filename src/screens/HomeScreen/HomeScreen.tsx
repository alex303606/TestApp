import React from 'react';
import { Block, Colors, ESpacings } from '@UIKit';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EScreens, RootStackParamList } from '@navigation';
import { Navigations } from './components/Navigations.tsx';
import { CreditCards } from './components/CreditCards.tsx';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  EScreens.HOME_SCREEN
>;

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Block
      padding={ESpacings.s16}
      paddingTop={ESpacings.s24}
      flex={1}
      backgroundColor={Colors.black}
    >
      <Navigations />
      <CreditCards />
    </Block>
  );
};
