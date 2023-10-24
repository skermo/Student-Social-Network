import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .max(255, "Email must be less than 255 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(255, "Password must be less than 255 characters")
    .required("Password is required"),
});

export const newPostValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(255, "Title must be less than 255 characters")
    .required("Title is required"),
  description: yup
    .string()
    .max(255, "Description must be less than 1000 characters")
    .required("Description is required"),
  categoryId: yup.string().required("Category is required"),
  isPrivate: yup.bool().required(),
});
