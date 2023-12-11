import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomModal from "../components/CustomModal";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import useAuth from "../hooks/useAuth";
import { getAllCategories } from "../services/CategoryService";

const Search = () => {
  const { loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      getAllCategories().then((res) => {
        setCategories(
          res.map((cat) => ({ id: cat.name, label: cat.name, value: cat.name }))
        );
      });
    }
  }, [loading]);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [openCategories, setOpenCategories] = useState(false);
  const [university, setUniversity] = useState("");
  const [college, setCollege] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <View>
      <CustomModal
        title="Filter"
        openModal={openFilter}
        setOpenModal={setOpenFilter}
      >
        <TouchableOpacity
          className="flex flex-row"
          onPress={() => setOpenCategories(!openCategories)}
        >
          <CustomText classes="text-slate-50 ml-5 mt-5">Category</CustomText>
          {openCategories ? (
            <CustomText
              classes="text-slate-50 ml-5 mt-5"
              hitSlop={{ x: 200, y: 200 }}
            >
              -
            </CustomText>
          ) : (
            <CustomText
              classes="text-slate-50 ml-5 mt-5"
              hitSlop={{ x: 200, y: 200 }}
            >
              +
            </CustomText>
          )}
        </TouchableOpacity>
        {openCategories && <View></View>}
        <CustomText classes="text-slate-50 ml-5 mt-5">University</CustomText>
        <CustomText classes="text-slate-50 ml-5 mt-5">College</CustomText>
      </CustomModal>
      <ScrollView>
        <SafeAreaView className="text-center bg-raisin-500 h-full flex justify-center">
          <View className="mx-5">
            <CustomTextInput
              placeholder="Pretraži.. "
              classes="w-full bg-slate-50"
            />
            <CustomText
              classes="text-slate-50 text-right underline"
              fontFamily="light"
              onPress={() => setOpenFilter(true)}
            >
              Filter
            </CustomText>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Search;
