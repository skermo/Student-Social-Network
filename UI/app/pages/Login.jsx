import { loginValidationSchema } from "../utils/FormValidation";

import { Formik } from "formik";
import { useState } from "react";
import { Image, Text } from "react-native";
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
      alert(error);
    }
  };

  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-white"
      style={{ fontFamily: "mrt-mid" }}
    >
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
              style={{ width: 250, height: 250 }}
            />
            <CustomText>Email</CustomText>
            <CustomTextInput
              placeholder="john@doe.com"
              keyboardType="email-address"
              name="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <CustomText>Password</CustomText>
            <CustomTextInput
              placeholder="********"
              secureTextEntry
              name="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <CustomText>{errors.password}</CustomText>
            )}
            <CustomText>{error}</CustomText>
            <CustomButton
              onPress={handleSubmit}
              title="LOGIN"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
