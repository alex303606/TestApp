import React from 'react';
import {
  Block,
  Colors,
  ERounding,
  ESize,
  ESpacings,
  Row,
  Typography,
} from '@UIKit';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ExpenseType } from '../types.ts';
import { Dimensions } from 'react-native';

type Props = {
  expenses: ExpenseType[];
};

const calculateWidth = (expenses: ExpenseType[]) => {
  const expensesWithWidth =
    Dimensions.get('window').width - (expenses.length - 1) * 2 - 32;

  return expenses.map((expense: ExpenseType) => ({
    ...expense,
    width: Math.round((expensesWithWidth / 100) * expense.percent),
  }));
};

export const ExpensesBlock: React.FC<Props> = ({ expenses }) => {
  const { t } = useTranslation();

  return (
    <Block marginBottom={ESpacings.s8}>
      <Row
        alignItems={'center'}
        justifyContent="space-between"
        marginBottom={ESpacings.s16}
      >
        <Typography.M21 color={Colors.white}>
          {t('homeScreen:expensesIn')}
          <Typography.M21 color={Colors.red}>
            {t('homeScreen:june')}
          </Typography.M21>
        </Typography.M21>
        <Typography.R18 color={Colors.grey}>$5,091</Typography.R18>
      </Row>
      <Row marginBottom={ESpacings.s16}>
        {calculateWidth(expenses).map((expense, index) => (
          <ExpensesItem
            isLastExpense={index === expenses.length - 1}
            key={Math.random().toString() + expense.percent.toString()}
            width={expense.width}
            backgroundColor={expense.backgroundColor}
          />
        ))}
      </Row>
    </Block>
  );
};

const ExpensesItem = styled(Block)<{
  width: number;
  backgroundColor: string;
  isLastExpense: boolean;
}>(({ width, backgroundColor, isLastExpense }) => ({
  height: ESize.s8,
  width,
  backgroundColor,
  borderRadius: ERounding.r3,
  marginRight: isLastExpense ? ESpacings.s0 : ESpacings.s2,
}));
