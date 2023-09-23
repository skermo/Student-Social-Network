import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .max(255, "Email must be less than 320 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(255, "Password must be less than 320 characters")
    .required("Password is required"),
});
