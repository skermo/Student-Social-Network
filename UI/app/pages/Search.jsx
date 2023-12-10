import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import useAuth from "../hooks/useAuth";
import { getAllCategories } from "../services/CategoryService";

const Search = () => {
  const { loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      getAllCategories().then((res) => {
        setCategories(res);
      });
    }
  }, [loading]);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  return (
    <ScrollView>
      <SafeAreaView className="text-center bg-raisin-500 h-full flex justify-center">
        <View className="mx-5">
          <CustomTextInput
            placeholder="Pretraži.. "
            classes="w-full bg-slate-50"
          />
          <CustomText>Filter</CustomText>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Search;
