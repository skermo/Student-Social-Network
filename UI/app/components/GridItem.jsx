import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { crimson, lightGrey, raisin } from "../../assets/styles/variables";
import { getCollegeById } from "../services/CollegeService";
import { likePost } from "../services/PostService";
import { getUserById } from "../services/UserService";
import {
  formatCollegeName,
  formatFullName,
  formatGoogleDriveImageSrc,
  formatTimePassed,
  truncateText,
} from "../utils/Formatter";
import CustomText from "./CustomText";

const GridItem = ({ post, navigation }) => {
  const [user, setUser] = useState("");
  const [college, setCollege] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log(post);
    if (userLikedPost(post.likes)) setLiked(true);

    getUserById(post.userId).then((res) => setUser(res));
    getCollegeById(post.collegeId).then((res) => setCollege(res));
  }, [post]);

  const like = () => {
    setLiked(!liked);
    likePost({ postId: post.id });
  };

  const userLikedPost = (likes) => {
    return likes.find((like) => like.userId == user.id);
  };

  return (
    <View>
      {post && user && (
        <>
          <View className="flex flex-row align-start justify-around mb-5">
            <Image
              source={{ uri: formatGoogleDriveImageSrc(user.imageUrl) }}
              className="h-10 w-10 rounded-full mr-2 mt-2"
            />
            <View className="bg-slate-50 border rounded-2xl border-slate-50 w-10/12 h-fit px-5 py-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Post", { post: post });
                }}
              >
                <View className="border-b-light border-raisin-500">
                  <View className="flex flex-row align-center justify-between">
                    <CustomText fontFamily="black">
                      {formatFullName(user)}
                    </CustomText>
                    <View className="flex flex-row items-center">
                      <Entypo name="back-in-time" size={12} color={lightGrey} />
                      <CustomText fontFamily="light" classes="text-xs ml-1">
                        {formatTimePassed(post.createdOn)} ago
                      </CustomText>
                    </View>
                  </View>
                  <View className="flex flex-row items-center">
                    <Entypo name="location-pin" size={12} color={crimson} />
                    <CustomText classes="text-xs">
                      {formatCollegeName(college)}
                    </CustomText>
                  </View>
                </View>
                <CustomText fontFamily="bold" classes="text-sm pt-2 pb-0.5">
                  {post.title}
                </CustomText>
                {post.description.length < 250 || readMore ? (
                  readMore ? (
                    <CustomText classes="text-sm">
                      {post.description}
                      <CustomText
                        classes="text-sm"
                        fontFamily="light"
                        onPress={() => setReadMore(!readMore)}
                      >
                        {" "}
                        Hide
                      </CustomText>
                    </CustomText>
                  ) : (
                    <CustomText classes="text-sm">
                      {post.description}
                    </CustomText>
                  )
                ) : (
                  <CustomText classes="text-sm">
                    {truncateText(post.description, 250)}
                    <CustomText
                      classes="text-sm"
                      fontFamily="light"
                      onPress={() => setReadMore(!readMore)}
                      hitSlop={{ x: 35, y: 45 }}
                    >
                      {" "}
                      Read more
                    </CustomText>
                  </CustomText>
                )}
                <View className="border-t-light border-raisin-500 flex flex-row items-center">
                  {liked ? (
                    <Ionicons
                      name="heart-sharp"
                      size={24}
                      color={crimson}
                      onPress={() => like()}
                    />
                  ) : (
                    <Ionicons
                      name="heart-outline"
                      size={24}
                      color={raisin}
                      onPress={() => like()}
                    />
                  )}
                  <CustomText classes="text-xs mx-1">
                    {post.likes.length}
                  </CustomText>
                  <FontAwesome name="comments-o" size={24} color={raisin} />
                  <CustomText classes="text-xs ml-1">
                    {post.comments.length}
                  </CustomText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default GridItem;
