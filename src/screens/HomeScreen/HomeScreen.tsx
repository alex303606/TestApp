import { FC } from 'react';
import { Block, Colors, ESpacings } from '@UIKit';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EScreens, RootStackParamList } from '@navigation';
import { Navigations } from './components/Navigations.tsx';
import { CreditCards } from './components/CreditCards.tsx';
import {
  CREDIT_CARDS_ITEMS,
  EXPENSES,
  HISTORY,
  NAVIGATION_ITEMS,
} from './constans.ts';
import { ExpensesBlock } from './components/ExpensesBlock.tsx';
import { History } from './components/History.tsx';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  EScreens.HOME_SCREEN
>;

export const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <Block
      paddingVertical={ESpacings.s16}
      paddingTop={ESpacings.s24}
      flex={1}
      backgroundColor={Colors.black}
    >
      <Navigations navigationItems={NAVIGATION_ITEMS} />
      <CreditCards creditCards={CREDIT_CARDS_ITEMS} />
      <ExpensesBlock expenses={EXPENSES} />
      <History history={HISTORY} />
    </Block>
  );
};
