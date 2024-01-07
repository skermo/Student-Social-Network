import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import useAuth from "../hooks/useAuth";
import { formatGoogleDriveImageSrc } from "../utils/Formatter";

const Account = () => {
  const { auth, logoutUser } = useAuth();

  return (
    <ScrollView>
      <SafeAreaView className="text-center bg-raisin-500 h-full flex justify-center">
        <View className="flex justify-center flex-row">
          <View className="mt-5 flex flex-row justify-center">
            <Image
              source={{
                uri: formatGoogleDriveImageSrc(auth.user.imageUrl),
              }}
              className="h-28 w-28 rounded-full bg-slate-50"
            />
          </View>
        </View>
        <View className="flex flex-row justify-center">
          <View className="w-3/4 border-b-light border-slate-50 pb-5 flex flex-row justify-center">
            <CustomText classes="uppercase text-slate-50 mt-2">
              {auth.user.university.abbreviation} /{" "}
              {auth.user.college.abbreviation}
            </CustomText>
          </View>
        </View>
        <View className="flex justify-center flex-row mt-5">
          <View className="w-3/4 border-b-light border-slate-50 pb-5">
            <View className="flex flex-row justify-start">
              <CustomText classes="text-slate-50">Ime: </CustomText>
              <CustomText classes="text-slate-50" fontFamily="bold">
                {auth.user.firstName}
              </CustomText>
            </View>
            <View className="flex flex-row justify-start">
              <CustomText classes="text-slate-50">Prezime: </CustomText>
              <CustomText classes="text-slate-50" fontFamily="bold">
                {auth.user.lastName}
              </CustomText>
            </View>
            <View className="flex flex-row justify-start">
              <CustomText classes="text-slate-50">Email: </CustomText>
              <CustomText classes="text-slate-50" fontFamily="bold">
                {auth.user.email}
              </CustomText>
            </View>
            <View className="flex flex-row justify-start">
              <CustomText classes="text-slate-50">Grad: </CustomText>
              <CustomText classes="text-slate-50" fontFamily="bold">
                {auth.user.university.city}
              </CustomText>
            </View>
            <View className="flex flex-row justify-start">
              <CustomText classes="text-slate-50">Država: </CustomText>
              <CustomText classes="text-slate-50" fontFamily="bold">
                {auth.user.university.country}
              </CustomText>
            </View>
            <CustomButton
              onPress={logoutUser}
              title="Logout"
              classes="border-light border-slate-50 bg-slate-50 mt-5"
              textClasses="text-raisin-500"
            />
          </View>
        </View>
        <View className="flex justify-center flex-row">
          <View className="mt-5 flex flex-row justify-center">
            <Image
              source={{
                uri: formatGoogleDriveImageSrc(auth.user.university.imageUrl),
              }}
              className="h-28 w-28 rounded-full"
            />
          </View>
        </View>
        <View className="flex flex-row justify-center">
          <View className="w-3/4 border-b-light border-slate-50 pb-5 flex flex-row justify-center">
            <CustomText classes="uppercase text-slate-50 mt-2">
              {auth.user.university.fullName}
            </CustomText>
          </View>
        </View>

        <View className="flex justify-center flex-row">
          <View className="mt-5 flex flex-row justify-center">
            <Image
              source={{
                uri: formatGoogleDriveImageSrc(auth.user.college.imageUrl),
              }}
              className="h-28 w-28 rounded-full bg-slate-50"
            />
          </View>
        </View>
        <View className="flex flex-row justify-center">
          <View className="w-3/4 mb-5 flex flex-row justify-center">
            <CustomText classes="uppercase text-slate-50 mt-2">
              {auth.user.college.fullName}
            </CustomText>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Account;
