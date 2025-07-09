import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const totalItems = 3; // This can be dynamic based on your cart state
  return (
    <TouchableOpacity className="cart-btn">
      <Image source={require("../assets/icons/cart.png")} className="w-6 h-6" />
      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="text-white text-sm font-bold">3</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
