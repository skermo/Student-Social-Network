import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Switch,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  crimson,
  light,
  lightGrey,
  raisin,
  rounded2xl,
} from "../../assets/styles/variables";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import { getAllCategories } from "../services/CategoryService";
import { addNewPost } from "../services/PostService";
import { newPostValidationSchema } from "../utils/FormValidation";

const NewPost = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

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

  const handleSubmit = async (post) => {
    try {
      await addNewPost(post);
      navigation.navigate("Home");
    } catch (error) {
      if (!error?.response) {
        setError("Nema odgovora servera");
      } else if (error.response?.status === 400) {
        setError("Nevalidan post");
      } else {
        setError("Neuspješno postavljanje");
      }
    }
  };

  return (
    <SafeAreaView className="text-center bg-raisin-500 h-full flex items-center justify-center">
      <Formik
        initialValues={{
          title: "",
          description: "",
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
          setFieldValue,
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
              classes="text-center border border-crimson-500"
              placeholderTextColor={lightGrey}
            />
            {errors.title && touched.title && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.title}
              </CustomText>
            )}

            <CustomText classes="text-center text-crimson-500 uppercase">
              Opis
            </CustomText>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View>
                <CustomTextInput
                  placeholder="Podijelite svoje misli.."
                  name="description"
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                  multiline={true}
                  numberOfLines={4}
                  classes="text-center h-40 border border-crimson-500"
                  placeholderTextColor={lightGrey}
                  enterKeyHint="next"
                />
              </View>
            </TouchableWithoutFeedback>
            {errors.description && touched.description && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.description}
              </CustomText>
            )}
            <CustomText classes="text-center text-crimson-500 uppercase">
              Kategorija
            </CustomText>
            <View className="mt-2 mb-3">
              <SelectList
                setSelected={(category) =>
                  setFieldValue("categoryId", category)
                }
                data={categories}
                save="categoryId"
                placeholder="Izaberite kategoriju.."
                boxStyles={{ borderColor: crimson, borderRadius: rounded2xl }}
                dropdownStyles={{
                  borderColor: crimson,
                  borderRadius: rounded2xl,
                }}
                dropdownItemStyles={{
                  borderBottomWidth: light,
                  borderColor: crimson,
                }}
                dropdownTextStyles={{ textAlign: "center" }}
                arrowicon={
                  <Ionicons name="chevron-down" size={16} color={crimson} />
                }
                searchicon={
                  <Ionicons name="search" size={16} color={crimson} />
                }
                searchPlaceholder="Pretraži.."
                closeicon={<Ionicons name="close" size={16} color={crimson} />}
              />
            </View>
            {errors.categoryId && touched.categoryId && (
              <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">
                {errors.categoryId}
              </CustomText>
            )}
            <CustomText classes="text-center text-crimson-500 uppercase">
              Privatan post
            </CustomText>
            <CustomText classes="text-center text-xs">
              (Viđen samo u sklopu Vašeg fakulteta)
            </CustomText>
            <View className="flex items-center justify-center mt-2 mb-3">
              <Switch
                trackColor={{ false: raisin, true: crimson }}
                ios_backgroundColor={raisin}
                onValueChange={(isPrivate) => {
                  setFieldValue("isPrivate", isPrivate);
                }}
                value={values.isPrivate}
              />
            </View>
            <CustomText classes="text-barn-500 text-sm -mt-2 mb-2">{error}</CustomText>
            <CustomButton
              onPress={handleSubmit}
              title="Postavi"
              disabled={!isValid}
              classes={classNames(
                "border-light border-crimson-500 bg-crimson-500 mt-3",
                { "opacity-70": !isValid }
              )}
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
