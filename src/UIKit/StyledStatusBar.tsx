import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Colors } from './constants';
import { Block } from './helpers';
import styled from 'styled-components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const StyledStatusBar = () => {
  const insets = useSafeAreaInsets();

  if (Platform.OS === 'ios') {
    return (
      <StatusBarStyled paddingTop={insets.top} backgroundColor={Colors.black}>
        <StatusBar barStyle={'light-content'} />
      </StatusBarStyled>
    );
  }

  return (
    <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
  );
};

const StatusBarStyled = styled(Block)({
  height: STATUSBAR_HEIGHT,
});
