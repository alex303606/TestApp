import React, { useCallback } from 'react';
import { Block, Colors, ESpacings, Typography } from '@UIKit';
import styled from 'styled-components';
import { Pressable } from 'react-native';
import { NavigationItemType } from '../types.ts';

type NavigationItemProps = {
  item: NavigationItemType;
  isActive: boolean;
  setActiveId: (id: number) => void;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  setActiveId,
}) => {
  const onPressHandler = useCallback(() => {
    setActiveId(item.id);
  }, [item.id, setActiveId]);

  return (
    <Wrapper isActive={isActive}>
      <StyledPressable onPress={onPressHandler}>
        <Typography.R14 color={Colors.white}>{item.title}</Typography.R14>
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
