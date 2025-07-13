import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View className="bg-white flex flex-col gap-5 justify-center items-center">
      <Text>SignUp</Text>
      <Text className="text-lg font-medium text-black-100 font-quicksand">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-primary font-bold">
          Login
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;
