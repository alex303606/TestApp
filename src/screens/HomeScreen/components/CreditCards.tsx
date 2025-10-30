import { Alert, Pressable, ScrollView } from 'react-native';
import { Block, Colors, ERounding, ESpacings, Typography } from '@UIKit';
import styled from 'styled-components';
import React, { useCallback } from 'react';
import { CreditCardItem } from './CreditCardItem.tsx';
import { CreditCardType } from '../types.ts';
import { GreyCardBackground, OrangeCardBackground } from '@assets/images';

const CREDIT_CARDS_ITEMS: CreditCardType[] = [
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

export const CreditCards = () => {
  const onPressAddCard = useCallback(() => {
    Alert.alert('Add card to the credit card');
  }, []);

  return (
    <Block marginBottom={ESpacings.s24}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CREDIT_CARDS_ITEMS.map(item => (
          <CreditCardItem card={item} key={item.number} />
        ))}
        <AddCardButton onPress={onPressAddCard}>
          <Typography.R30 color={Colors.white}>+</Typography.R30>
        </AddCardButton>
      </ScrollView>
    </Block>
  );
};

const AddCardButton = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  width: 40,
  height: 98,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: ERounding.r16,
  backgroundColor: Colors.darkGrey,
});
