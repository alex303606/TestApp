import { FC, useCallback } from 'react';
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
import { EScreens, NavigationService } from '@navigation';

type Props = {
  title: string;
};

export const HomeScreenHeader: FC<Props> = ({ title }) => {
  const onPressQrCode = useCallback(() => {
    Alert.alert('QR code is available.');
  }, []);

  const onPressRight = useCallback(() => {
    NavigationService.navigate(EScreens.PAYMENTS_SCREEN);
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
            {title}
          </Typography.M16>
          <Icon
            size={ESize.s16}
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
  backgroundColor: Colors.blackLight,
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
