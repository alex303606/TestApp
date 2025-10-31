import React from 'react';
import { useTranslation } from 'react-i18next';
import { Block, Colors, ESpacings, Typography } from '@UIKit';

type Props = {
  title: string;
};

export const AllTabBarRoute: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <Block
      flex={1}
      padding={ESpacings.s16}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography.M16 color={Colors.white}>
        {t(`paymentScreen:${title}`)} Screen
      </Typography.M16>
    </Block>
  );
};
