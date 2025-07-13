import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = () => {
    const { email, password } = form;

    if (!email || !password)
      return Alert.alert(
        "Error",
        "Please enter valid email address & password."
      );

    setIsSubmitting(true);

    try {
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="bg-white flex flex-col gap-5 justify-center items-center px-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />
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
