import React from "react";
import {
  Dimensions,
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
      <ScrollView className="h-full bg-white relative">
        <View
          className="w-full"
          style={{
            height: Dimensions.get("screen").height / 2.25,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/bg-auth.png")}
            resizeMode="cover"
            className="size-full"
          ></ImageBackground>
        </View>

        <View className="w-full bg-white rounded-t-[30px] -top-10 flex justify-start items-center flex-col z-10 ">
          <Text>Asif</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
