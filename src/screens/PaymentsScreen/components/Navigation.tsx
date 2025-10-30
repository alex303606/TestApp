import React, { useCallback } from 'react';
import { ESpacings, Row } from '@UIKit';
import styled from 'styled-components';
import { NavigationItem } from './NavigationItem.tsx';
import { NavigationItemType } from '../types.ts';

type Props = {
  navigationItems: NavigationItemType[];
};

export const Navigation: React.FC<Props> = ({ navigationItems }) => {
  const [activeId, setActiveId] = React.useState<number>(0);

  const setActiveIdHandler = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  return (
    <StyledRow paddingHorizontal={ESpacings.s16} justifyContent="space-between">
      {navigationItems.map(item => (
        <NavigationItem
          isActive={item.id === activeId}
          item={item}
          key={item.id}
          setActiveId={setActiveIdHandler}
        />
      ))}
    </StyledRow>
  );
};

const StyledRow = styled(Row)({
  borderBottomColor: '#1F1F1F',
  borderBottomWidth: 1,
});
