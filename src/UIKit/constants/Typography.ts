import { Text } from "react-native";
import styled from "styled-components";

import { spacings, SpacingsProps } from "../helpers";
import { Colors } from "./Colors";

export interface ColoredTextProps {
  color?: string;
  textAlign?: string;
  flexShrink?: number;
}

const coloredText = styled(Text)<ColoredTextProps & SpacingsProps>`
  color: ${({ color }) => color || Colors.black};
  text-align: ${({ textAlign }) => textAlign || "left"};
  ${({ flexShrink }) => (typeof flexShrink === "number" ? `flex-shrink: ${flexShrink}` : "")}
  ${(props) => spacings(props)}
`;

const semiBold = styled(coloredText)`
  font-family: "Inter-SemiBold";
`;

const medium = styled(coloredText)`
  font-family: "Inter-Medium";
`;

const bold = styled(coloredText)`
  font-family: "Inter-Bold";
`;

const B14 = styled(bold)`
  font-size: 14px;
  line-height: 18px;
`;

const S14 = styled(semiBold)`
  font-size: 14px;
  line-height: 20px;
`;

const M14 = styled(medium)`
  font-size: 14px;
  line-height: 20px;
`;

export const Typography = {
  // SEMIBOLD
  S14,
  // BOLD
  B14,
  //Medium
  M14,
};
