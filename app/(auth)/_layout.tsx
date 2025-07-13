import { Link, Slot } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function AuthLayout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className="h-full bg-white">
        <View
          className="w-full z-20"
          style={{
            height: Dimensions.get("screen").height / 2.25,
          }}
        >
          <ImageBackground
            source={require("../../assets/images/bg-auth.png")}
            resizeMode="cover"
            className="size-full flex"
          ></ImageBackground>
        </View>
        <View className="w-full bg-white rounded-t-[30px] -top-10 flex justify-start items-center flex-col z-30 relative">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="absolute -top-52"
          />
          <View className="top-20 bg-white w-full h-auto">
            <Text></Text>
            <Slot />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
