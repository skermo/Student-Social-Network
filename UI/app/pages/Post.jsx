import React from "react";
import { Text, View } from "react-native";

const Post = ({ route }) => {
  const { post } = route.params;
  return (
    <View>
      <Text>{post.id}</Text>
    </View>
  );
};

export default Post;
