import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Image, Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import GestureRecognizer from "react-native-swipe-gestures";
import { crimson, lightGrey, raisin } from "../../assets/styles/variables";
import { getCollegeById } from "../services/CollegeService";
import { commentPost, likePost } from "../services/PostService";
import { getUserById } from "../services/UserService";
import {
  formatCollegeName,
  formatFullName,
  formatGoogleDriveImageSrc,
  formatTimePassed,
  truncateText,
} from "../utils/Formatter";
import CustomText from "./CustomText";
import CustomTextInput from "./CustomTextInput";

const GridItem = ({ post, navigation }) => {
  const [user, setUser] = useState("");
  const [college, setCollege] = useState("");
  const [readMore, setReadMore] = useState(false);
  const [liked, setLiked] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const [isScrolling, setScrolling] = useState(false);
  const scrollViewRef = useRef(null);

  const onSwipeDown = () => {
    if (!isScrolling) {
      setOpenComments(false);
    }
  };

  const onScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrolling(offsetY > 0);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {
    if (userLikedPost(post.likes)) setLiked(true);
    setComments(post.comments);

    getUserById(post.userId).then((res) => setUser(res));
    getCollegeById(post.collegeId).then((res) => setCollege(res));
  }, [post]);

  const like = () => {
    setLiked(!liked);
    likePost({ postId: post.id });
  };

  const comment = () => {
    commentPost({ postId: post.id, text: text });
    setText("");
  };

  const userLikedPost = (likes) => {
    return likes.find((like) => like.userId == user.id);
  };

  return (
    <View>
      <GestureRecognizer onSwipeDown={onSwipeDown} config={config}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openComments}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView
              contentContainerStyle={{ flex: 1 }}
              keyboardDismissMode="interactive"
              keyboardShouldPersistTaps="always"
              extraScrollHeight={-10}
            >
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View className="bg-raisin-600 w-full h-4/6 rounded-2xl">
                  <CustomText classes="text-lg text-center py-3 text-slate-50">
                    Komentari
                  </CustomText>
                  <View className="border-b-light border-slate-50" />
                  {post.comments && post.comments.length > 0 ? (
                    <ScrollView
                      className="w-full"
                      ref={scrollViewRef}
                      onScroll={onScroll}
                    >
                      {comments &&
                        comments.map((comment, key) => (
                          <View className="bg-slate-50 rounded-2xl m-3 p-3" key={comment.id}>
                            <View className="border-b-light border-raisin-500">
                              <View className="flex flex-row align-center justify-between">
                                <CustomText fontFamily="black">
                                  {formatFullName(comment.user)}
                                </CustomText>
                                <View className="flex flex-row items-center">
                                  <Entypo
                                    name="back-in-time"
                                    size={12}
                                    color={lightGrey}
                                  />
                                  <CustomText
                                    fontFamily="light"
                                    classes="text-xs ml-1"
                                  >
                                    {formatTimePassed(comment.createdOn)} ago
                                  </CustomText>
                                </View>
                              </View>
                              <View className="flex flex-row items-center">
                                <Entypo
                                  name="location-pin"
                                  size={12}
                                  color={crimson}
                                />
                                <CustomText classes="text-xs">
                                  {formatCollegeName(comment.user.college)}
                                </CustomText>
                              </View>
                            </View>
                            <CustomText>{comment.text}</CustomText>
                          </View>
                        ))}
                    </ScrollView>
                  ) : (
                    <View className="h-4/6 w-full">
                      <View className="flex justify-center h-full">
                        <View>
                          <CustomText
                            classes="text-slate-50 text-xl text-center pb-2"
                            fontFamily="bold"
                          >
                            Nema komentara
                          </CustomText>
                          <CustomText
                            classes="text-slate-50 text-center"
                            onPress={() => setOpenComments(!openComments)}
                          >
                            Započni razgovor
                          </CustomText>
                        </View>
                      </View>
                    </View>
                  )}
                  <CustomTextInput
                    returnKeyType="done"
                    onSubmitEditing={() => comment()}
                    value={text}
                    onChangeText={setText}
                    classes="border border-slate-50 w-screen mt-8 mb-8"
                    placeholder="Dodaj komentar..."
                  ></CustomTextInput>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </Modal>
      </GestureRecognizer>
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
                  <FontAwesome
                    name="comments-o"
                    size={24}
                    color={raisin}
                    onPress={() => setOpenComments(!openComments)}
                  />
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
