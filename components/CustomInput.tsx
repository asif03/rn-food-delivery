import { useState } from "react";
import { View, Text, TextInput } from "react-native";

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  label,
  secureTextEntry,
  keyboardType,
}: ICustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="w-full flex flex-col gap-2">
      <Text className="label">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        className="border-b-2 border-black-50 p-1"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="#888888"
      />
    </View>
  );
};

export default CustomInput;
