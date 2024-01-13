import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import GridItem from "../components/GridItem";
import useAuth from "../hooks/useAuth";
import { getPosts } from "../services/PostService";

const Home = ({ navigation }) => {
  const { auth, loading } = useAuth();

  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!loading) {
      getPosts(page).then((res) => {
        setPosts(res.data.content);
        setLast(res.data.last);
      });
    }
  }, [loading]);

  const fetchData = () => {
    getPosts(page + 1).then((res) => {
      setPosts([...posts, ...res.data.content]);
      setLast(res.data.last);
      setPage(page + 1);
    });
  };

  return (
    <SafeAreaView className="text-center bg-raisin-500 h-full flex justify-center">
      <View>
        <ScrollView>
          <View className="flex-row items-center justify-between align-center flex">
            <Image
              source={require("../../assets/images/UNI-logo.png")}
              style={{ tintColor: "#FFFFFF" }}
              className="h-24 w-24"
            />
            <CustomText classes="text-slate-50 pr-5">
              Zdravo, {auth.user.firstName}!
            </CustomText>
          </View>
          <View className="flex align-center justify-center mx-4 mb-10">
            {posts &&
              posts.length > 0 &&
              posts.map((value, key) => (
                <GridItem post={value} navigation={navigation} key={value.id} />
              ))}
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
        <CustomButton
          onPress={() => {
            navigation.navigate("NewPost");
          }}
          title="+ Novi Post"
          classes="absolute bg-crimson-500 bottom-14 right-2 border-crimson-500 px-4 py-1"
          textClasses="text-slate-50 uppercase"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
