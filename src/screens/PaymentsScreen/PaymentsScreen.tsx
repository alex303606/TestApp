import React from 'react';
import { Block, Colors, ESpacings, Typography } from '@UIKit';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EScreens, RootStackParamList } from '@navigation';

type PaymentsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  EScreens.PAYMENTS_SCREEN
>;

export const PaymentsScreen: React.FC<PaymentsScreenProps> = () => {
  const { t } = useTranslation();

  return (
    <Block
      padding={ESpacings.s16}
      paddingTop={ESpacings.s24}
      flex={1}
      backgroundColor={Colors.black}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography.M16 color={Colors.white}>
        {t('paymentScreen:title')}
      </Typography.M16>
    </Block>
  );
};
