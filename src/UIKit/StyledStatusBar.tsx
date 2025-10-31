import { Platform, StatusBar } from 'react-native';
import { Colors } from './constants';
import { Block } from './helpers';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const StyledStatusBar = () => {
  const insets = useSafeAreaInsets();

  if (Platform.OS === 'ios') {
    return (
      <Block paddingTop={insets.top} backgroundColor={Colors.black}>
        <StatusBar barStyle={'light-content'} />
      </Block>
    );
  }

  return (
    <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
  );
};
