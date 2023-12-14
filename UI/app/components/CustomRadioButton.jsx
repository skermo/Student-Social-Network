import React from "react";
import { TouchableOpacity, View } from "react-native";
import { crimson, slate } from "../../assets/styles/variables";
import CustomText from "./CustomText";

const CustomRadioButton = ({
  label,
  isSelected,
  onPress,
  textClasses,
  buttonClasses,
  classes,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
      className={classes}
    >
      <View
        className={buttonClasses}
        style={{
          height: 16,
          width: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: slate,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 8,
        }}
      >
        {isSelected && (
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 4,
              backgroundColor: crimson,
            }}
          />
        )}
      </View>
      <CustomText classes={textClasses}>{label}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
