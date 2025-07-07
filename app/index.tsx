import { offers } from "@/constants";
import cn from "clsx";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
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
                      source={require("../assets/images/cta.png")}
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
      />
    </SafeAreaView>
  );
}
