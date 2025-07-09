import { Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text>Asif</Text>
      </View>
      <Slot />
    </SafeAreaView>
  );
}
