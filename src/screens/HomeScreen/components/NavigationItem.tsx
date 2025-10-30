import React, { useCallback } from 'react';
import { Colors, ESpacings, Typography } from '@UIKit';
import styled from 'styled-components';
import { Alert, Image, Pressable } from 'react-native';

type Props = {
  image: number;
  title: string;
};

export const NavigationItem: React.FC<Props> = ({ image, title }) => {
  const onPressHandler = useCallback(() => {
    Alert.alert(title);
  }, [title]);

  return (
    <StyledPressable onPress={onPressHandler}>
      <StyledImage source={image} />
      <Typography.M14 marginTop={ESpacings.s8} color={Colors.white}>
        {title}
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
