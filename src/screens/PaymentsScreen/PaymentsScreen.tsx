import React, { useCallback, useState } from 'react';
import { Block, Colors, ESpacings } from '@UIKit';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EScreens, RootStackParamList } from '@navigation';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabDescriptor,
  TabView,
} from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import { CustomTabBar } from './components/CustomTabBar.tsx';
import { EmptyTabBarRoute } from './components/EmptyTabBarRoute.tsx';
import { AllTabBarRoute } from './components/AllTabBarRoute.tsx';

type PaymentsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  EScreens.PAYMENTS_SCREEN
>;

const renderScene = SceneMap({
  first: () => <AllTabBarRoute title={'all'} />,
  second: () => <EmptyTabBarRoute title={'payments'} />,
  third: () => <EmptyTabBarRoute title={'system'} />,
  four: () => <EmptyTabBarRoute title={'delivery'} />,
  five: () => <EmptyTabBarRoute title={'travel'} />,
});

export const PaymentsScreen: React.FC<PaymentsScreenProps> = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Payments' },
    { key: 'third', title: 'System' },
    { key: 'four', title: 'Delivery' },
    { key: 'five', title: 'Travel' },
  ]);

  const renderTabBar = useCallback(
    (
      props: SceneRendererProps & {
        navigationState: NavigationState<{ key: string; title: string }>;
        options:
          | Record<string, TabDescriptor<{ key: string; title: string }>>
          | undefined;
      },
    ) => {
      return <CustomTabBar onIndexChange={setIndex} {...props} />;
    },
    [],
  );

  return (
    <Block paddingTop={ESpacings.s24} flex={1} backgroundColor={Colors.black}>
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </Block>
  );
};
