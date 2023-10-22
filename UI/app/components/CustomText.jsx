import classNames from "classnames";
import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, classes }) => {
  return (
    <Text
      style={{ fontFamily: "mrt-mid" }}
      className={classNames("tracking-wider text-base", classes)}
    >
      {children}
    </Text>
  );
};

export default CustomText;
