import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Image, Switch, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
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

  return (
    <SafeAreaView className="text-center bg-raisin-500 h-full flex items-center justify-center">
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
          <View className="border rounded-2xl my-2 p-6 border-light border-zinc-50 bg-zinc-50">
            <CustomText classes="text-center text-crimson-500 uppercase">
              Naslov
            </CustomText>
            <CustomTextInput
              placeholder="Mjesto za Vaš naslov.."
              name="title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              classes="text-center bg-gray-300"
              placeholderTextColor="#949aa6"
            />
            {errors.title && touched.title && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.title}
              </CustomText>
            )}

            <CustomText classes="text-center text-crimson-500 uppercase">Tekst</CustomText>
            <CustomTextInput
              placeholder="Podijelite svoje misli.."
              name="description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              multiline={true}
              numberOfLines={4}
              classes="text-center bg-gray-300 h-40"
              placeholderTextColor="#949aa6"
            />
            {errors.description && touched.description && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.description}
              </CustomText>
            )}
            <CustomText classes="text-center text-crimson-500 uppercase">Kategorija</CustomText>
            <View className="mt-2 mb-3">
            <SelectList
              setSelected={(value) => setSelected(value)}
              data={categories}
              save="value"
              placeholder="Izaberite kategoriju.."
            />
            </View>
            {errors.categoryId && touched.categoryId && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.categoryId}
              </CustomText>
            )}
            <CustomText classes="text-center text-crimson-500 uppercase">Privatan post</CustomText>
            <CustomText classes="text-center text-xs">
              (Viđen samo u sklopu Vašeg fakulteta)
            </CustomText>
            <View className="flex items-center justify-center mt-2 mb-3">
              <Switch
                trackColor={{ false: "#767577", true: "#D31336" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {}}
                value={true}
              />
            </View>
            <CustomButton
              onPress={handleSubmit}
              title="Postavi"
              disabled={!isValid}
              classes="border-light border-crimson-500 bg-crimson-500 mt-3"
              textClasses="text-slate-50"
            />
          </View>
        )}
      </Formik>
      <Image
        source={require("../../assets/images/UNI-logo.png")}
        style={{ tintColor: "#FFFFFF" }}
        className="h-28 w-3/6 p-0 m-0 mt-2"
      />
    </SafeAreaView>
  );
};

export default NewPost;
