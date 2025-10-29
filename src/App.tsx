/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyledStatusBar } from '@UIKit';

const App = () => {
  return (
    <SafeAreaProvider>
      <StyledStatusBar />
    </SafeAreaProvider>
  );
};

export default App;
