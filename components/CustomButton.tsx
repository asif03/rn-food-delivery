import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import cn from "clsx";

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: ICustomButtonProps) => {
  return (
    <TouchableOpacity className={cn("custom-btn", style)} onPress={onPress}>
      {leftIcon}

      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text
            className={cn(
              "text-white-100 text-base font-quicksand-semibold",
              textStyle
            )}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
