import classNames from "classnames";
import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, classes, fontFamily = "normal", onPress }) => {
  return (
    <Text
      style={{ fontFamily: fontFamily }}
      className={classNames("tracking-wider text-base", classes)}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export default CustomText;
