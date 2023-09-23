import React from "react";
import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity title={title} onPress={onPress} disabled={disabled}>
      <CustomText>{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
