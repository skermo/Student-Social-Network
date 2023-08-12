import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .max(255, "Email must be less than 320 characters")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
