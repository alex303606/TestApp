import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigation, navigationRef } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import I18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { Colors } from '@UIKit';
import { initialWindowMetrics } from "react-native-safe-area-context";
import styled from 'styled-components';
import { Platform } from 'react-native';

const App = () => {
  return (
    <StyledSafeAreaProvider>
      <I18nextProvider i18n={I18n}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigation />
        </NavigationContainer>
      </I18nextProvider>
    </StyledSafeAreaProvider>
  );
};

export default App;

const StyledSafeAreaProvider = styled(SafeAreaProvider)({
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? 0 : initialWindowMetrics?.insets.top,
  backgroundColor: Colors.black,
});