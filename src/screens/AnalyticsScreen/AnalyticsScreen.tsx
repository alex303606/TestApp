import { FC } from 'react';
import { Block, Colors, ESpacings, Typography } from '@UIKit';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EScreens, RootStackParamList } from '@navigation';

type AnalyticsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  EScreens.ANALYTICS_SCREEN
>;

export const AnalyticsScreen: FC<AnalyticsScreenProps> = () => {
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
        {t('analyticsScreen:title')}
      </Typography.M16>
    </Block>
  );
};
