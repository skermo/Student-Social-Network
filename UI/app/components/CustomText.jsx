import React from "react";
import { Text } from "react-native";

const CustomText = ({ children }) => {
  return (
    <Text
      style={{ fontFamily: "mrt-mid" }}
      className="tracking-wider text-base"
    >
      {children}
    </Text>
  );
};

export default CustomText;
