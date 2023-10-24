import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Switch } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import { getAllCategories } from "../services/CategoryService";
import { newPostValidationSchema } from "../utils/FormValidation";

const NewPost = () => {
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(
        res.map((category) => ({
          key: category.id,
          value: category.name,
        }))
      );
    });
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
  };

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: "",
          descripion: ",",
          isPrivate: false,
          categoryId: "",
        }}
        validationSchema={newPostValidationSchema}
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
            <CustomText>Title</CustomText>
            <CustomTextInput
              placeholder="johndoe@mail.com"
              name="title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {errors.title && touched.title && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.title}
              </CustomText>
            )}

            <CustomText>Description</CustomText>
            <CustomTextInput
              placeholder="johndoe@mail.com"
              name="description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.title}
            />
            {errors.description && touched.description && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.description}
              </CustomText>
            )}
            <CustomText>Category</CustomText>
            <SelectList
              setSelected={(value) => setSelected(value)}
              data={categories}
              save="value"
            />
            {errors.categoryId && touched.categoryId && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.categoryId}
              </CustomText>
            )}
            <CustomText>Is Private?</CustomText>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {}}
              value={true}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default NewPost;
