import React, { useCallback } from 'react';
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
import { HomeScreen } from '@screens';
import { RootTabParamList } from './navigationTypes.ts';
import { useTranslation } from 'react-i18next';

type LabelProps = {
  focused: boolean;
  title: string;
  color: string;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Label: React.FC<LabelProps> = ({ focused, title, color }) => {
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

export const AppNavigation = () => {
  const { t } = useTranslation();

  const renderLabel = useCallback(
    (focused: boolean, color: string, title: string) => {
      return <Label color={color} focused={focused} title={title} />;
    },
    [],
  );

  const renderIcon = useCallback((icon: IconNames, color: string) => {
    return <Icon size={ESize.s20} color={color} name={icon} />;
  }, []);

  return (
    <>
      <StyledStatusBar />
      <Tab.Navigator
        initialRouteName={EScreens.HOME_SCREEN}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarStyle: tabBarStyle,
          tabBarItemStyle: {
            marginBottom: 20,
          },
          tabBarActiveTintColor: Colors.red,
          tabBarInactiveTintColor: Colors.white,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={EScreens.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:home')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.home, color),
          }}
        />
        <Tab.Screen
          name={EScreens.PAYMENTS_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:payments')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.payments, color),
          }}
        />
        <Tab.Screen
          name={EScreens.HISTORY_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:history')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.history, color),
          }}
        />
        <Tab.Screen
          name={EScreens.ANALYTICS_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:analytics')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.analytics, color),
          }}
        />
        <Tab.Screen
          name={EScreens.CHATS_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color }) =>
              renderLabel(focused, color, t('tabs:chats')),
            tabBarIcon: ({ color }) => renderIcon(IconNames.chats, color),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
