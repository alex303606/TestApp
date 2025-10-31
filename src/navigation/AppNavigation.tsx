import { FC, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EScreens } from './types.ts';
import {
  Colors,
  ESize,
  ESpacings,
  Icon,
  IconNames,
  StyledStatusBar,
  TAB_BAR_HEIGHT,
  Typography,
} from '@UIKit';
import {
  AnalyticsScreen,
  ChatsScreen,
  HistoryScreen,
  HomeScreen,
  HomeScreenHeader,
  PaymentsScreen,
  PaymentsScreenHeader,
} from '@screens';
import { RootStackParamList } from './navigationTypes.ts';
import { useTranslation } from 'react-i18next';

type LabelProps = {
  focused: boolean;
  title: string;
  color: string;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const Label: FC<LabelProps> = ({ focused, title, color }) => {
  if (focused) {
    return <Typography.R12 color={color}>{title}</Typography.R12>;
  }
  return <Typography.R12 color={color}>{title}</Typography.R12>;
};

const tabBarStyle = {
  height: TAB_BAR_HEIGHT,
  backgroundColor: Colors.black,
  borderTopWidth: 0,
  paddingTop: ESpacings.s8,
  paddingBottom: ESpacings.s8,
};

export const AppNavigation: FC = () => {
  const { t } = useTranslation();

  const renderLabel = useCallback(
    (focused: boolean, color: string, title: string) => (
      <Label color={color} focused={focused} title={title} />
    ),
    [],
  );

  const renderIcon = useCallback(
    (icon: IconNames, color: string) => (
      <Icon size={ESize.s20} color={color} name={icon} />
    ),
    [],
  );

  const renderPaymentsScreenHeader = useCallback(
    () => <PaymentsScreenHeader title={t('paymentScreen:headerTitle')} />,
    [t],
  );

  const renderHomeScreenHeader = useCallback(
    () => <HomeScreenHeader title={t('homeScreen:headerTitle')} />,
    [t],
  );

  return (
    <>
      <StyledStatusBar />
      <Tab.Navigator
        initialRouteName={EScreens.HOME_SCREEN}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: tabBarStyle,
          tabBarItemStyle: {
            marginBottom: ESize.s20,
          },
          tabBarActiveTintColor: Colors.red,
          tabBarInactiveTintColor: Colors.white,
        }}
      >
        <Tab.Screen
          name={EScreens.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:home')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.home, color),
            header: () => renderHomeScreenHeader(),
            headerShown: true,
          }}
        />
        <Tab.Screen
          name={EScreens.PAYMENTS_SCREEN}
          component={PaymentsScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:payments')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.payments, color),
            header: () => renderPaymentsScreenHeader(),
            headerShown: true,
          }}
        />
        <Tab.Screen
          name={EScreens.HISTORY_SCREEN}
          component={HistoryScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:history')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.history, color),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={EScreens.ANALYTICS_SCREEN}
          component={AnalyticsScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:analytics')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.analytics, color),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={EScreens.CHATS_SCREEN}
          component={ChatsScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:chats')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.chats, color),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};
