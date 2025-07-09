import CartButton from "@/components/CartButton";
import { offers } from "@/constants";
import cn from "clsx";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => (
          <View>
            <Pressable
              className={cn("offer-card")}
              style={{
                backgroundColor: item.color,
              }}
              android_ripple={{ color: "#fffff22" }}
            >
              <Fragment>
                <View
                  className={cn(
                    "w-full h-full flex",
                    (index + 1) % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <View className="w-1/2">
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      className="h-full w-full"
                    />
                  </View>
                  <View className="w-1/2 h-40 flex justify-center items-start px-4 gap-2">
                    <Text className="h1">{item.title}</Text>
                    <Image
                      source={require("../../assets/images/cta.png")}
                      className="w-10 h-5"
                    />
                  </View>
                </View>
              </Fragment>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-5 flex flex-col gap-4"
        ListHeaderComponent={() => (
          <View className="flex flex-row justify-between items-center px-5 pt-3">
            <View>
              <Text className="text-primary text-xs font-bold uppercase">
                Deliver TO
              </Text>
              <TouchableOpacity className="flex flex-row justify-center items-center gap-x-1">
                <Text className="text-primary text-lg font-bold">New York</Text>
                <Image
                  source={require("../../assets/icons/arrow-down.png")}
                  className="w-3 h-2"
                />
              </TouchableOpacity>
            </View>
            <CartButton />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
