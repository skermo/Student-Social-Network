import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { crimson, lightGrey } from "../../assets/styles/variables";
import { getCollegeById } from "../services/CollegeService";
import { getUserById } from "../services/UserService";
import {
  formatCollegeName,
  formatFullName,
  formatGoogleDriveImageSrc,
  formatTimePassed,
} from "../utils/Formatter";
import CustomText from "./CustomText";

const GridItem = ({ post }) => {
  const [user, setUser] = useState("");
  const [college, setCollege] = useState("");

  useEffect(() => {
    console.log(post);
    getUserById(post.userId).then((res) => setUser(res));
    getCollegeById(post.collegeId).then((res) => setCollege(res));
  }, [post]);

  return (
    <View>
      {post && user && (
        <>
          <View className="flex flex-row align-start justify-around mb-5">
            <Image
              source={{ uri: formatGoogleDriveImageSrc(user.imageUrl) }}
              className="h-12 w-12 rounded-full mr-2 mt-2"
            />
            <View className="bg-slate-50 border rounded-2xl border-slate-50 w-10/12 h-fit px-5 py-1">
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
              <CustomText>{post.title}</CustomText>
              <CustomText>{post.description}</CustomText>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default GridItem;
