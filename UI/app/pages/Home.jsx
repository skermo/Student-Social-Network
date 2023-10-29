import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../components/CustomText";
import GridItem from "../components/GridItem";
import useAuth from "../hooks/useAuth";
import { getPosts } from "../services/PostService";

const Home = ({ navigation }) => {
  const { auth, logoutUser, loading } = useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      getPosts(0).then((res) => {
        setPosts(res.data.content);
      });
    }
  }, [loading]);
  return (
    <ScrollView>
      <SafeAreaView className="text-center bg-raisin-500 h-full flex justify-center">
        <View className="flex-row items-center justify-between align-center flex">
          <Image
            source={require("../../assets/images/UNI-logo.png")}
            style={{ tintColor: "#FFFFFF" }}
            className="h-24 w-24"
          />
          <CustomText classes="text-slate-50">
            Zdravo, {auth.user.firstName}!
          </CustomText>
        </View>
        <View className="flex align-center justify-center mx-5">
          {posts &&
            posts.length > 0 &&
            posts.map((value, key) => <GridItem post={value} key={value.id} />)}
        </View>
        <Button onPress={logoutUser} title="Logout" />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
