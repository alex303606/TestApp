import { Alert, Pressable, ScrollView } from 'react-native';
import { Block, Colors, ERounding, ESpacings, Typography } from '@UIKit';
import styled from 'styled-components';
import { FC, useCallback } from 'react';
import { CreditCardItem } from './CreditCardItem.tsx';
import { CreditCardType } from '../types.ts';

type Props = {
  creditCards: CreditCardType[];
};

export const CreditCards: FC<Props> = ({ creditCards }) => {
  const onPressAddCard = useCallback(() => {
    Alert.alert('Add card to the credit card');
  }, []);

  return (
    <Block marginBottom={ESpacings.s24}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {creditCards.map(item => (
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
