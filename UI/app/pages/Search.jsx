import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropdown";
import CustomModal from "../components/CustomModal";
import CustomRadioButton from "../components/CustomRadioButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import GridItem from "../components/GridItem";
import useAuth from "../hooks/useAuth";
import { getAllCategories } from "../services/CategoryService";
import { getCollegesByUniversityId } from "../services/CollegeService";
import { searchPosts } from "../services/PostService";
import { getAllUniversities } from "../services/UniversityService";

const Search = ({ navigation }) => {
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
  const [sortDirection, setSortDirection] = useState("desc");
  const [sortBy, setSortBy] = useState("createdOn");
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);
  const [last, setLast] = useState(true);

  useEffect(() => {
    search();
  }, [category, university, college, sortBy, sortDirection]);

  const sortOptions = [
    { key: "title", value: "Naziv" },
    { key: "createdOn", value: "Datum" },
    { key: "numberOfLikes", value: "Lajkovi" },
    { key: "numberOfComments", value: "Komentari" },
  ];

  const search = () => {
    searchPosts(
      0,
      searchInput,
      category,
      university,
      college,
      sortBy,
      sortDirection
    ).then((res) => {
      setPosts(res.data.content);
      setLast(res.data.last);
      setPage(0);
    });
  };

  const fetchData = () => {
    searchPosts(
      page + 1,
      searchInput,
      category,
      university,
      college,
      sortBy,
      sortDirection
    ).then((res) => {
      setPosts([...posts, ...res.data.content]);
      setLast(res.data.last);
      setPage(page + 1);
    });
  };

  const onCategoryRadioPress = (value) => {
    if (category && value.name == category) setCategory("");
    else setCategory(value.name);
  };

  const onUniversityRadioPress = (value) => {
    if (university && value.fullName == university) setUniversity("");
    else {
      getCollegesByUniversityId(value.id).then((res) => setColleges(res));
      setUniversity(value.fullName);
      setCollege("");
    }
  };

  const onCollegeRadioPress = (value) => {
    if (college && value.fullName == college) setCollege("");
    else setCollege(value.fullName);
  };

  return (
    <View className="bg-raisin-500 h-full">
      <CustomModal
        title="Filter"
        openModal={openFilter}
        setOpenModal={setOpenFilter}
      >
        <CustomDropdown
          title="Kategorija"
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
          title="Univerzitet"
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
            title="Fakultet"
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
        title="Sortiranje"
        openModal={openSort}
        setOpenModal={setOpenSort}
      >
        <CustomText classes="text-slate-50 ml-5 mt-5">Sortiraj po</CustomText>
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
          Smjer soritanja
        </CustomText>
        <View className="border-l-light border-slate-50 pl-4 ml-10 mt-2">
          <CustomRadioButton
            key={"asc"}
            label="Rastući"
            isSelected={"asc" == sortDirection}
            onPress={() => {
              setSortDirection("asc");
            }}
            classes="py-0.5"
            textClasses="text-slate-50 text-s"
          />
          <CustomRadioButton
            key={"desc"}
            label="Opadajući"
            isSelected={"desc" == sortDirection}
            onPress={() => {
              setSortDirection("desc");
            }}
            classes="py-0.5"
            textClasses="text-slate-50 text-s"
          />
        </View>
      </CustomModal>
      <SafeAreaView className="text-center bg-raisin-500 h-full flex justify-center">
        <ScrollView>
          <View className="mx-5 mt-5">
            <CustomTextInput
              placeholder="Pretraži.. "
              classes="w-full bg-slate-50"
              onSubmitEditing={() => search()}
              value={searchInput}
              onChangeText={setSearchInput}
              returnKeyType="done"
            />
            <View className="flex flex-row justify-end mb-5">
              <CustomText
                classes="text-slate-50 text-right underline mr-4"
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
          </View>
          <View className="flex align-center justify-center mx-4 mb-10">
            {posts &&
              posts.length > 0 &&
              posts.map((value, key) => (
                <GridItem post={value} navigation={navigation} key={value.id} />
              ))}
            {posts && posts.length == 0 && (
              <CustomText
                classes="text-slate-50 text-xl text-center pb-2 mt-36"
                fontFamily="bold"
              >
                Nema postova na uneseni filter.
              </CustomText>
            )}
          </View>
          {!last && (
            <View className="mb-32 flex flex-row justify-center align-center -mt-5">
              <CustomButton
                title="Učitaj još"
                onPress={() => {
                  fetchData();
                }}
                classes="bg-slate-50 w-60"
                textClasses="text-crimson-500"
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Search;
