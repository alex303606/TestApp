import { FC, useCallback } from 'react';
import { Block, Colors, ESpacings, Typography } from '@UIKit';
import styled from 'styled-components';
import { Pressable } from 'react-native';

type TabBarItemProps = {
  title: string;
  isActive: boolean;
  index: number;
  onPressItem: (index: number) => void;
};

export const TabBarItem: FC<TabBarItemProps> = ({
  title,
  onPressItem,
  isActive,
  index,
}) => {
  const onPressHandler = useCallback(() => {
    onPressItem(index);
  }, [index, onPressItem]);

  return (
    <Wrapper isActive={isActive}>
      <StyledPressable onPress={onPressHandler}>
        <Typography.R14 color={isActive ? Colors.red : Colors.white}>
          {title}
        </Typography.R14>
      </StyledPressable>
    </Wrapper>
  );
};

const StyledPressable = styled(Pressable).attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.ripple,
  },
}))({
  padding: ESpacings.s12,
});

const Wrapper = styled(Block)<{
  isActive: boolean;
}>(({ isActive }) => ({
  borderBottomWidth: isActive ? 1 : 0,
  borderBlockColor: isActive ? Colors.red : Colors.black,
}));
