import classNames from "classnames";
import React from "react";
import { TextInput } from "react-native";

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  name,
  onChangeText,
  onBlur,
  value,
  classes,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      name={name}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholderTextColor="#f7fafc33"
      className={classNames("rounded-2xl p-3 mt-2 mb-3", classes)}
    />
  );
};

export default CustomTextInput;
