import { Formik } from "formik";
import React, { useState } from "react";
import { TextInput } from "react-native";
import useAuth from "../hooks/useAuth";
import { loginValidationSchema } from "../utils/FormValidation";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { onLogin } = useAuth();

//   const login = async () => {
//     const result = await onLogin(email, password);
//     if (result && result.error) {
//       alert(result.msg);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry={true}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <Button onPress={login} title="Login" />
//     </View>
//   );
// };

const Login = () => {
  const { setAuth, loginUser } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (user) => {
    console.log(user);
    try {
      const data = await loginUser(user);
      setStatusBarHidden(data);
    } catch (error) {
      if (!error?.response) {
        setError("No Server response");
      } else if (error.response?.status == 404) {
        setError("Wrong email or password");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <TextInput
            placeholder="john@doe.com"
            keyboardType="email-address"
            name="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <TextInput
            placeholder="********"
            secureTextEntry
            name="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="LOGIN" />
        </>
      )}
    </Formik>
  );
};

export default Login;
