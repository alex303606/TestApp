import { Text } from 'react-native';
import styled from 'styled-components';

import { spacings, SpacingsProps } from '../helpers';
import { Colors } from './Colors';

export interface ColoredTextProps {
  color?: string;
  textAlign?: string;
  flexShrink?: number;
}

const coloredText = styled(Text)<ColoredTextProps & SpacingsProps>`
  color: ${({ color }) => color || Colors.black};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  ${({ flexShrink }) =>
    typeof flexShrink === 'number' ? `flex-shrink: ${flexShrink}` : ''}
  ${props => spacings(props)}
`;

const regular = styled(coloredText)`
  font-family: 'Inter-Regular';
`;

const medium = styled(coloredText)`
  font-family: 'Inter-Bold';
`;

// const bold = styled(coloredText)`
//   font-family: 'Inter-Bold';
// `;

const R12 = styled(regular)`
  font-size: 12px;
  line-height: 16px;
`;

const M16 = styled(medium)`
  font-size: 16px;
  line-height: 16px;
`;

export const Typography = {
  // REGULAR
  R12,
  // MEDIUM
  M16,
};
