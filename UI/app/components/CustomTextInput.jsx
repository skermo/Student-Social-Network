import React from "react";
import { TextInput } from "react-native";

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  name,
  onChangeText,
  onBlur,
  value,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      name={name}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      className="rounded-full bg-red-200 p-2"
    />
  );
};

export default CustomTextInput;
