import { FC, useCallback, useState } from 'react';
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
import { useTranslation } from 'react-i18next';

type PaymentsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  EScreens.PAYMENTS_SCREEN
>;

const renderScene = SceneMap({
  first: () => <AllTabBarRoute />,
  second: () => <EmptyTabBarRoute title={'payments'} />,
  third: () => <EmptyTabBarRoute title={'system'} />,
  four: () => <EmptyTabBarRoute title={'delivery'} />,
  five: () => <EmptyTabBarRoute title={'travel'} />,
});

export const PaymentsScreen: FC<PaymentsScreenProps> = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: 'first', title: t('paymentScreen:all') },
    { key: 'second', title: t('paymentScreen:payments') },
    { key: 'third', title: t('paymentScreen:system') },
    { key: 'four', title: t('paymentScreen:delivery') },
    { key: 'five', title: t('paymentScreen:travel') },
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
