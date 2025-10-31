import { FC, useCallback } from 'react';
import { SectionList } from 'react-native';
import { Colors, ESpacings, Row, Typography } from '@UIKit';
import styled from 'styled-components';
import { HistoryItemType, HistoryType } from '../types.ts';
import { HistoryItem } from './HistoryItem.tsx';

const keyExtractor = (item: HistoryItemType) => item.id.toString();

type Props = {
  history: HistoryType[];
};

const contentContainerStyle = {
  flexGrow: 1,
  paddingHorizontal: ESpacings.s16,
};

export const History: FC<Props> = ({ history }) => {
  const renderItem = useCallback(
    ({ item }: { item: HistoryItemType }) => <HistoryItem item={item} />,
    [],
  );

  const renderSectionHeader = useCallback(
    ({ section }: { section: HistoryType }) => {
      return (
        <Row marginBottom={ESpacings.s10} marginTop={ESpacings.s24}>
          <Typography.M16 color={Colors.white}>{section.title}</Typography.M16>
        </Row>
      );
    },
    [],
  );

  return (
    <SectionList
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      sections={history}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
    />
  );
};

const Separator = styled(Row)({
  height: 4,
});
