import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Nevalidan email")
    .max(255, "Email mora biti kraći od 255 karaktera")
    .required("Unesite email"),
  password: yup
    .string()
    .min(8, "Šifra mora sadržavati bar 8 karaktera")
    .max(255, "Šifra mora biti kraći od 255 karaktera")
    .required("Unesite šifru"),
});

export const newPostValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(255, "Naslov mora biti kraći od 255 karaktera")
    .required("Unesite naslov"),
  description: yup
    .string()
    .max(255, "Opis mora biti kraći od 1000 karaktera")
    .required("Unesite opis"),
  categoryId: yup.string().required("Unesite kategoriju"),
  isPrivate: yup.bool().required(),
});
