import { FC, useCallback } from 'react';
import { Block, Colors, Row } from '@UIKit';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { NOTIFICATIONS } from '../constans.ts';
import { NotificationCard } from './NotificationCard.tsx';
import { FlatListType, NotificationType } from '../types.ts';
import styled from 'styled-components';

const keyExtractor = (item: NotificationType) => item.id.toString();

export const AllTabBarRoute: FC = () => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<NotificationType>) => (
      <NotificationCard notification={item} />
    ),
    [],
  );

  return (
    <Block flex={1} backgroundColor={Colors.black}>
      <NotificationsList
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={NOTIFICATIONS}
        ItemSeparatorComponent={Separator}
      />
    </Block>
  );
};

const Separator = styled(Row)({
  height: 1,
  backgroundColor: '#1F1F1F',
});

const NotificationsList: FlatListType = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))({});
