/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigation, navigationRef } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import I18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const App = () => {
  return (
    <I18nextProvider i18n={I18n}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </I18nextProvider>
  );
};

export default App;
