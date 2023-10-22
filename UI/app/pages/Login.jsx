import { loginValidationSchema } from "../utils/FormValidation";

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
        setError("No Server Response");
      } else if (error.response?.status === 404) {
        setError("Wrong email or password");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-raisin-500"
      style={{ fontFamily: "mrt-mid" }}
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
              <CustomText classes="text-slate-50 font-black">Email</CustomText>
              <CustomTextInput
                placeholder="johndoe@mail.com"
                keyboardType="email-address"
                name="email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                classes="border-slate-50 border border-light text-slate-50"
              />
              {errors.email && touched.email && (
                <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                  {errors.email}
                </CustomText>
              )}
              <CustomText classes="text-slate-50">Password</CustomText>
              <CustomTextInput
                placeholder="********"
                secureTextEntry
                name="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                classes="border-slate-50 border border-light text-slate-50"
              />
              {errors.password && touched.password && (
                <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                  {errors.password}
                </CustomText>
              )}
             <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">{error}</CustomText>
              <CustomButton
                onPress={handleSubmit}
                title="Login"
                disabled={!isValid}
                classes="border-light border-raisin-500 bg-raisin-500"
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
