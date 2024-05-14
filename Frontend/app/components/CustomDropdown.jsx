import React from "react";
import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const CustomDropdown = ({ children, title, open, setOpen }) => {
  return (
    <>
      <TouchableOpacity
        className="flex flex-row"
        onPress={() => setOpen(!open)}
      >
        <CustomText classes="text-slate-50 ml-5 mt-5">{title}</CustomText>
        {open ? (
          <CustomText
            classes="text-slate-50 ml-5 mt-5"
            hitSlop={{ x: 200, y: 200 }}
          >
            -
          </CustomText>
        ) : (
          <CustomText
            classes="text-slate-50 ml-5 mt-5"
            hitSlop={{ x: 200, y: 200 }}
          >
            +
          </CustomText>
        )}
      </TouchableOpacity>
      {open && children}
    </>
  );
};

export default CustomDropdown;
