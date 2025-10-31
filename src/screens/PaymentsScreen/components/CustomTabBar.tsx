import React from 'react';
import { NavigationState } from 'react-native-tab-view';
import { ESpacings, Row } from '@UIKit';
import { TabBarItem } from './TabBarItem.tsx';
import styled from 'styled-components';

type Props = {
  navigationState: NavigationState<{ key: string; title: string }>;
  onIndexChange: (index: number) => void;
};

export const CustomTabBar: React.FC<Props> = ({
  navigationState,
  onIndexChange,
}) => {
  return (
    <StyledTabBar>
      <Row
        paddingHorizontal={ESpacings.s16}
        justifyContent={'space-between'}
        flex={1}
      >
        {navigationState.routes.map((route, index: number) => {
          const isFocused = navigationState.index === index;
          return (
            <TabBarItem
              index={index}
              key={route.key}
              isActive={isFocused}
              onPressItem={onIndexChange}
              title={route.title}
            />
          );
        })}
      </Row>
    </StyledTabBar>
  );
};

const StyledTabBar = styled(Row)({
  borderBottomColor: '#1F1F1F',
  borderBottomWidth: 1,
});
