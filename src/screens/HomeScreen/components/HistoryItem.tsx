import { FC, memo, useCallback } from 'react';
import { Block, Colors, ERounding, ESpacings, Row, Typography } from '@UIKit';
import { HistoryItemType } from '../types.ts';
import styled from 'styled-components';
import { Alert, Image, Pressable } from 'react-native';

type Props = {
  item: HistoryItemType;
};

export const HistoryItem: FC<Props> = memo(({ item }) => {
  const onPressHandler = useCallback(() => {
    Alert.alert(item.title);
  }, [item.title]);

  return (
    <Wrapper onPress={onPressHandler}>
      <Row alignItems="center">
        <StyledImage source={item.logo} />
        <Block>
          <Typography.M14 marginBottom={ESpacings.s4} color={Colors.white}>
            {item.title}
          </Typography.M14>
          <Typography.R14 color={Colors.greyLight}>
            <Typography.B18 color={Colors.red}>• </Typography.B18>
            {item.sybTitle}
          </Typography.R14>
        </Block>
      </Row>
      <Block>
        <Typography.M14 marginBottom={ESpacings.s4} color={Colors.white}>
          ${item.price}
        </Typography.M14>
        <Typography.R14 color={Colors.greyLight}>{item.date}</Typography.R14>
      </Block>
    </Wrapper>
  );
});

const Wrapper = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  borderRadius: ERounding.r16,
  flexDirection: 'row',
  backgroundColor: Colors.darkGrey,
  padding: ESpacings.s16,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledImage = styled(Image)({
  width: 36,
  height: 36,
  borderRadius: ERounding.r12,
  marginRight: ESpacings.s12,
});
