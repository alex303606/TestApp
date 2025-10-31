import { FC, useCallback } from 'react';
import {
  Colors,
  ESize,
  ESpacings,
  Icon,
  IconNames,
  Row,
  Typography,
} from '@UIKit';
import styled from 'styled-components';
import { Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';

type Props = {
  title: string;
};

export const PaymentsScreenHeader: FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  const onPressLeft = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressMessage = useCallback(() => {
    Alert.alert('Your are press message');
  }, []);

  return (
    <Row
      paddingHorizontal={ESpacings.s16}
      paddingVertical={ESpacings.s2}
      backgroundColor={Colors.black}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <StyledPressable onPress={onPressLeft}>
        <Icon
          size={ESize.s16}
          color={Colors.white}
          name={IconNames.chevronLeft}
        />
      </StyledPressable>
      <Typography.M21 color={Colors.white}>{title}</Typography.M21>
      <StyledPressableMessage onPress={onPressMessage}>
        <Icon size={ESize.s20} color={Colors.white} name={IconNames.message} />
      </StyledPressableMessage>
    </Row>
  );
};

const StyledPressableMessage = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  alignItems: 'center',
  justifyContent: 'center',
  padding: ESpacings.s10,
});

const StyledPressable = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  flexDirection: 'row',
});
