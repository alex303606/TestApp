import React from 'react';
import { Block, Colors, ESpacings, Typography } from '@UIKit';
import { useTranslation } from 'react-i18next';

export const HistoryScreen: React.FC = () => {
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
        {t('historyScreen:title')}
      </Typography.M16>
    </Block>
  );
};
