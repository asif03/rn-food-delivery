import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signin = () => {
  return (
    <View className="bg-white flex flex-col gap-5 justify-center items-center px-5">
      <CustomInput
        placeholder="Enter your email"
        value={""}
        onChangeText={() => {}}
        label="Email"
        keyboardType="email-address"
      />
      <CustomButton />
      <Text className="text-lg font-medium text-black-100 font-quicksand">
        Don’t have an account?{" "}
        <Link href="/sign-up" className="text-primary font-bold">
          Signup
        </Link>
      </Text>
    </View>
  );
};

export default Signin;
