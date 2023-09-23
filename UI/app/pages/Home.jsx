import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../components/CustomText";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <CustomText>Home</CustomText>
      </View>
    </SafeAreaView>
  );
};

export default Home;
