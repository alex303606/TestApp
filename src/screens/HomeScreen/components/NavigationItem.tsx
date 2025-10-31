import { FC, useCallback } from 'react';
import { Colors, ESpacings, Typography } from '@UIKit';
import styled from 'styled-components';
import { Alert, Image, Pressable } from 'react-native';
import { NavItemType } from '../types.ts';
import { useTranslation } from 'react-i18next';

type Props = {
  navItem: NavItemType;
};

export const NavigationItem: FC<Props> = ({ navItem }) => {
  const { t } = useTranslation();

  const onPressHandler = useCallback(() => {
    Alert.alert(navItem.title);
  }, [navItem.title]);

  return (
    <StyledPressable onPress={onPressHandler}>
      <StyledImage source={navItem.image} />
      <Typography.M14 marginTop={ESpacings.s8} color={Colors.white}>
        {t(`homeScreen:${navItem.title}`)}
      </Typography.M14>
    </StyledPressable>
  );
};

const StyledImage = styled(Image)({
  width: 24,
  height: 24,
});

const StyledPressable = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  width: 64,
  height: 64,
  justifyContent: 'center',
  alignItems: 'center',
});
