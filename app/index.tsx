import { offers } from "@/constants";
import cn from "clsx";
import { Fragment } from "react";
import { FlatList, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <View>
            <Pressable
              className={cn("offer-card")}
              style={{
                backgroundColor: item.color,
              }}
              android_ripple={{ color: "#fffff22" }}
            >
              <Fragment>
                <ImageBackground
                  source={item.image}
                  resizeMode="contain"
                  imageStyle={{ flex: 1, justifyContent: "flex-end" }}
                >
                  <View className="h-full w-1/2">
                    <Text>{item.title}</Text>
                  </View>
                </ImageBackground>
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
