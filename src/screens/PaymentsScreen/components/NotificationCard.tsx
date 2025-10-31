import { FC, memo } from 'react';
import { Block, Colors, ERounding, ESpacings, Row, Typography } from '@UIKit';
import styled from 'styled-components';
import { Image } from 'react-native';
import { NotificationType } from '../types.ts';

type Props = {
  notification: NotificationType;
};

export const NotificationCard: FC<Props> = memo(({ notification }) => {
  const {
    date,
    receivedImage,
    receivedTitle,
    receivedSum,
    receivedCard,
    receivedTotalSum,
    receivedDate,
    receivedType,
    isOnline,
    subTitle,
    sentImage,
    sentTitle,
    sentSum,
    sentCard,
    sentTotalSum,
    sentDate,
    sentType,
  } = notification;

  return (
    <Block padding={ESpacings.s16} backgroundColor={Colors.black}>
      <TypographyB12Uppercase color={Colors.grey} marginBottom={ESpacings.s16}>
        {date}
      </TypographyB12Uppercase>
      {/*Receive block*/}
      {receivedTitle && receivedImage ? (
        <Block>
          <Row alignItems="flex-start">
            <StyledImage source={receivedImage} />
            <Block flex={1}>
              <Row
                flex={1}
                alignItems="center"
                justifyContent="space-between"
                marginBottom={ESpacings.s6}
              >
                <Typography.M14 color={Colors.white}>
                  {receivedTitle}
                </Typography.M14>
                {isOnline ? (
                  <Typography.B18 color={Colors.red} marginLeft={ESpacings.s16}>
                    •
                  </Typography.B18>
                ) : null}
              </Row>
              {subTitle ? (
                <TypographyR14WithLineHeight
                  color={Colors.grey}
                  marginBottom={ESpacings.s6}
                >
                  {subTitle}
                </TypographyR14WithLineHeight>
              ) : null}
              {receivedSum ? (
                <Typography.B21 color={Colors.red} marginBottom={ESpacings.s6}>
                  {receivedSum}
                </Typography.B21>
              ) : null}
              {receivedCard ? (
                <TypographyR14WithLineHeight
                  color={Colors.grey}
                  marginBottom={ESpacings.s4}
                >
                  {receivedCard}
                </TypographyR14WithLineHeight>
              ) : null}
              {receivedTotalSum ? (
                <TypographyR14WithLineHeight
                  color={Colors.grey}
                  marginBottom={ESpacings.s6}
                >
                  {receivedTotalSum}
                </TypographyR14WithLineHeight>
              ) : null}
              {receivedDate && receivedType ? (
                <Typography.R12 color={'#616161'}>
                  {receivedDate} · {receivedType}
                </Typography.R12>
              ) : null}
            </Block>
          </Row>
        </Block>
      ) : null}
      {/*Sent block*/}
      {sentImage && sentTitle ? (
        <Block marginTop={ESpacings.s16}>
          <Row alignItems="flex-start">
            <StyledImage source={sentImage} />
            <Block flex={1}>
              <Row
                flex={1}
                alignItems="center"
                justifyContent="space-between"
                marginBottom={ESpacings.s6}
              >
                <Typography.M14 color={Colors.white}>
                  {sentTitle}
                </Typography.M14>
              </Row>
              {sentSum ? (
                <Typography.B21 color={Colors.red} marginBottom={ESpacings.s6}>
                  {sentSum}
                </Typography.B21>
              ) : null}
              {sentCard ? (
                <TypographyR14WithLineHeight
                  color={Colors.grey}
                  marginBottom={ESpacings.s4}
                >
                  {sentCard}
                </TypographyR14WithLineHeight>
              ) : null}
              {sentTotalSum ? (
                <TypographyR14WithLineHeight
                  color={Colors.grey}
                  marginBottom={ESpacings.s6}
                >
                  {sentTotalSum}
                </TypographyR14WithLineHeight>
              ) : null}
              {sentDate && sentType ? (
                <Typography.R12 color={'#616161'}>
                  {sentDate} · {sentType}
                </Typography.R12>
              ) : null}
            </Block>
          </Row>
        </Block>
      ) : null}
    </Block>
  );
});

const TypographyB12Uppercase = styled(Typography.B12)({
  textTransform: 'uppercase',
});

const TypographyR14WithLineHeight = styled(Typography.R14)({
  lineHeight: '140%',
});

const StyledImage = styled(Image)({
  width: 42,
  height: 42,
  borderRadius: ERounding.r16,
  marginRight: ESpacings.s12,
});
