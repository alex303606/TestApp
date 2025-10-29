import React, { useCallback } from 'react';
import {
  Block,
  Colors,
  ERounding,
  ESize,
  ESpacings,
  Icon,
  IconNames,
  Row,
  Typography,
} from '@UIKit';
import styled from 'styled-components';
import { Alert, Pressable } from 'react-native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

export const HomeScreenHeader = (props: BottomTabHeaderProps) => {
  const onPressQrCode = useCallback(() => {
    Alert.alert('QR code is available.');
  }, []);

  const onPressRight = useCallback(() => {
    Alert.alert('Your press right');
  }, []);

  return (
    <Row
      paddingHorizontal={ESpacings.s16}
      paddingVertical={ESpacings.s2}
      backgroundColor={Colors.black}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Row alignItems={'center'}>
        <UserIconWrapper
          padding={ESpacings.s10}
          marginRight={ESpacings.s12}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Icon size={ESize.s16} color={Colors.white} name={IconNames.user} />
        </UserIconWrapper>
        <StyledPressable onPress={onPressRight}>
          <Typography.M16 color={Colors.white} marginRight={ESpacings.s8}>
            {props.options.title || props.route.name}
          </Typography.M16>
          <Icon
            size={ESize.s12}
            color={Colors.white}
            name={IconNames.chevronRight}
          />
        </StyledPressable>
      </Row>
      <StyledPressableQrCode onPress={onPressQrCode}>
        <Icon size={ESize.s20} color={Colors.white} name={IconNames.qrCode} />
      </StyledPressableQrCode>
    </Row>
  );
};

const UserIconWrapper = styled(Block)({
  borderRadius: ERounding.r100,
  backgroundColor: '#0F0F0F',
});

const StyledPressableQrCode = styled(Pressable).attrs(() => ({
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
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
});
