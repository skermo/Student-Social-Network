import classNames from "classnames";
import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, classes, fontFamily = "normal", onPress, hitSlop }) => {
  return (
    <Text
      style={{ fontFamily: fontFamily }}
      className={classNames("tracking-wider text-base", classes)}
      onPress={onPress}
      hitSlop={hitSlop}
    >
      {children}
    </Text>
  );
};

export default CustomText;
