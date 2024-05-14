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
  multiline = false,
  numberOfLines = 1,
  placeholderTextColor,
  keyboardType,
  returnKeyType,
  onSubmitEditing
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      name={name}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      blurOnSubmit={true}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      className={classNames("rounded-2xl p-3 mt-2 mb-3", classes)}
    />
  );
};

export default CustomTextInput;
