import classNames from "classnames";
import React from "react";
import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const CustomButton = ({ title, onPress, disabled, classes, textClasses }) => {
  return (
    <TouchableOpacity
      title={title}
      onPress={onPress}
      disabled={disabled}
      className={classNames("border rounded-2xl", classes)}
      style={{
        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      }}
    >
      <CustomText
        classes={classNames("text-center py-2 uppercase", textClasses)}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
