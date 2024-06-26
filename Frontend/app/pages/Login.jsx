import { loginValidationSchema } from "../utils/FormValidation";

import classNames from "classnames";
import { Formik } from "formik";
import { useState } from "react";
import {
  Image,
  StatusBar,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (user) => {
    try {
      await loginUser(user);
    } catch (error) {
      if (!error?.response) {
        setError("Nema odgovora servera");
      } else if (error.response?.status === 404) {
        setError("Pogreašan email ili šifra");
      } else {
        setError("Neuspješan login");
      }
    }
  };

  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-raisin-500"
      style={{ fontFamily: "normal" }}
    >
      <StatusBar barStyle="light-content" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <Image
              source={require("../../assets/images/UNI-logo.png")}
              style={{ tintColor: "#FFFFFF" }}
              className="h-36 w-4/6 p-0 m-0"
            />
            <CustomText classes="uppercase text-slate-50 mb-10 shadow-2xl">
              Universities United
            </CustomText>
            <View className="w-10/12 border px-4 py-8 rounded-2xl bg-raisin-600 border-raisin-600 shadow-2xl">
              <CustomText classes="text-slate-50 font-black">Korisnički Email</CustomText>
              <CustomTextInput
                placeholder="johndoe@mail.com"
                keyboardType="email-address"
                name="email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                classes="border-slate-50 border border-light text-slate-50"
                placeholderTextColor="#f7fafc33"
              />
              {errors.email && touched.email && (
                <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                  {errors.email}
                </CustomText>
              )}
              <CustomText classes="text-slate-50 font-black">Korisnička šifra</CustomText>
              <CustomTextInput
                placeholder="********"
                secureTextEntry
                name="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                classes="border-slate-50 border border-light text-slate-50"
                placeholderTextColor="#f7fafc33"
              />
              {errors.password && touched.password && (
                <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                  {errors.password}
                </CustomText>
              )}
             <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">{error}</CustomText>
              <CustomButton
                onPress={handleSubmit}
                title="Prijava"
                disabled={!isValid}
                classes={classNames("border-light border-raisin-500 bg-raisin-500 disabled:opacity-75", {"opacity-70": !isValid} )}
                textClasses="text-slate-50"
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
