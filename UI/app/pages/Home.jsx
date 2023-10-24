import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import useAuth from "../hooks/useAuth";

const Home = ({ navigation }) => {
  const { logoutUser } = useAuth();
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <CustomButton
          title="New Post"
          onPress={() => {
            navigation.navigate("NewPost");
          }}
        />
        <Button onPress={logoutUser} title="Logout" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
