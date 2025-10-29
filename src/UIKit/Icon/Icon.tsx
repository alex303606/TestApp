import React from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { IconProps } from "react-native-vector-icons/Icon";

import config from "./selection.json";

export enum IconNames {}

export const IconSet = createIconSetFromIcoMoon(config);

export const Icon: React.FC<IconProps> = ({ size = 24, ...rest }) => {
  return <IconSet size={size} {...rest} style={{ lineHeight: size }} />;
};
