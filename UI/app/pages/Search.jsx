import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomDropdown from "../components/CustomDropdown";
import CustomModal from "../components/CustomModal";
import CustomRadioButton from "../components/CustomRadioButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import useAuth from "../hooks/useAuth";
import { getAllCategories } from "../services/CategoryService";
import { getCollegesByUniversityId } from "../services/CollegeService";
import { getAllUniversities } from "../services/UniversityService";

const Search = () => {
  const { loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      getAllCategories().then((res) => setCategories(res));
      getAllUniversities().then((res) => setUniversities(res));
    }
  }, [loading]);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [openCategories, setOpenCategories] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [university, setUniversity] = useState("");
  const [openUniversities, setOpenUniversities] = useState(false);
  const [openColleges, setOpenColleges] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [college, setCollege] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortBy, setSortBy] = useState("createdOn");

  const sortOptions = [
    { key: "title", value: "Title" },
    { key: "createdOn", value: "Date" },
    { key: "likes", value: "Likes" },
    { key: "comments", value: "Comments" },
  ];

  const onCategoryRadioPress = (value) => {
    if (category && value.name == category) setCategory("");
    else setCategory(value.name);
  };

  const onUniversityRadioPress = (value) => {
    if (university && value.fullName == university) setUniversity("");
    else {
      getCollegesByUniversityId(value.id).then((res) => setColleges(res));
      setUniversity(value.fullName);
      setCollege(null);
    }
  };

  const onCollegeRadioPress = (value) => {
    if (college && value.fullName == college) setCollege("");
    else setCollege(value.fullName);
  };

  return (
    <View>
      <CustomModal
        title="Filter"
        openModal={openFilter}
        setOpenModal={setOpenFilter}
      >
        <CustomDropdown
          title="Category"
          open={openCategories}
          setOpen={setOpenCategories}
        >
          {openCategories && categories && (
            <View className="border-l-light border-slate-50 pl-4 ml-10 mt-2">
              {categories.map((value, key) => (
                <CustomRadioButton
                  key={value.id}
                  label={value.name}
                  isSelected={value.name == category}
                  onPress={() => {
                    onCategoryRadioPress(value);
                  }}
                  classes="py-0.5"
                  textClasses="text-slate-50 text-s"
                />
              ))}
            </View>
          )}
        </CustomDropdown>
        <CustomDropdown
          title="University"
          open={openUniversities}
          setOpen={setOpenUniversities}
        >
          {openUniversities && universities && (
            <View className="border-l-light border-slate-50 pl-4 ml-10 mt-2">
              {universities.map((value, key) => (
                <CustomRadioButton
                  key={value.id}
                  label={value.fullName}
                  isSelected={value.fullName == university}
                  onPress={() => {
                    onUniversityRadioPress(value);
                  }}
                  classes="py-0.5"
                  textClasses="text-slate-50 text-s"
                />
              ))}
            </View>
          )}
        </CustomDropdown>
        {university && (
          <CustomDropdown
            title="College"
            open={openColleges}
            setOpen={setOpenColleges}
          >
            {openColleges && colleges && (
              <View className="border-l-light border-slate-50 pl-4 ml-10 mt-2">
                {colleges.map((value, key) => (
                  <CustomRadioButton
                    key={value.id}
                    label={value.fullName}
                    isSelected={value.fullName == college}
                    onPress={() => {
                      onCollegeRadioPress(value);
                    }}
                    classes="py-0.5"
                    textClasses="text-slate-50 text-s"
                  />
                ))}
              </View>
            )}
          </CustomDropdown>
        )}
      </CustomModal>
      <CustomModal
        title="Sort options"
        openModal={openSort}
        setOpenModal={setOpenSort}
      >
        <CustomText classes="text-slate-50 ml-5 mt-5">Sort by</CustomText>
        <View className="border-l-light border-slate-50 pl-4 ml-10 mt-2">
          {sortOptions.map((value, key) => (
            <CustomRadioButton
              key={value.key}
              label={value.value}
              isSelected={value.key == sortBy}
              onPress={() => {
                setSortBy(value.key);
              }}
              classes="py-0.5"
              textClasses="text-slate-50 text-s"
            />
          ))}
        </View>
        <CustomText classes="text-slate-50 ml-5 mt-5">
          Sort direction
        </CustomText>
        <View className="border-l-light border-slate-50 pl-4 ml-10 mt-2">
          <CustomRadioButton
            key={"asc"}
            label="Ascending"
            isSelected={"asc" == sortDirection}
            onPress={() => {
              setSortDirection("asc");
            }}
            classes="py-0.5"
            textClasses="text-slate-50 text-s"
          />
          <CustomRadioButton
            key={"desc"}
            label="Descending"
            isSelected={"desc" == sortDirection}
            onPress={() => {
              setSortDirection("desc");
            }}
            classes="py-0.5"
            textClasses="text-slate-50 text-s"
          />
        </View>
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
            <CustomText
              classes="text-slate-50 text-right underline"
              fontFamily="light"
              onPress={() => setOpenSort(true)}
            >
              Sort
            </CustomText>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Search;
