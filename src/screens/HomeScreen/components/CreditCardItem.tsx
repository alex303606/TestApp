import { FC, useCallback } from 'react';
import styled from 'styled-components';
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
import { Alert, ImageBackground, Pressable } from 'react-native';
import { CreditCardType } from '../types.ts';

type Props = {
  card: CreditCardType;
};

export const CreditCardItem: FC<Props> = ({ card }) => {
  const onPressCard = useCallback(() => {
    Alert.alert(`Card number ${card.number}`);
  }, [card.number]);

  return (
    <StyledImageBackground source={card.background} resizeMode="cover">
      <StyledCard onPress={onPressCard}>
        <IconWrapper marginBottom={ESpacings.s12}>
          <Icon
            size={ESize.s16}
            color={Colors.white}
            name={IconNames.masterCard}
          />
        </IconWrapper>
        <Block flex={1} justifyContent={'space-between'}>
          <Typography.B18 marginBottom={ESpacings.s8} color={Colors.white}>
            ${card.balance}
          </Typography.B18>
          <Row alignItems={'center'} justifyContent={'space-between'}>
            <Typography.R14 color={Colors.white}>{card.type}</Typography.R14>
            <Typography.R14 color={Colors.white}>
              •• {card.number}
            </Typography.R14>
          </Row>
        </Block>
      </StyledCard>
    </StyledImageBackground>
  );
};

const StyledImageBackground = styled(ImageBackground)({
  width: 142,
  height: 98,
  marginRight: ESpacings.s8,
  borderRadius: ERounding.r16,
  overflow: 'hidden',
  padding: ESpacings.s12,
});

const StyledCard = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  flex: 1,
});

const IconWrapper = styled(Block)({
  width: 26,
  height: 16,
  opacity: 0.6,
});
