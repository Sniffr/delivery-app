import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme_color = "#00CCBB";
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}

      <View className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "https:links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          ></Image>
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now !
            </Text>
            <Text className="font-bold text-xl items-center">
              Current Location <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={30} color="#00CCBB"></UserIcon>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
            <MagnifyingGlassIcon size={20} color={theme_color} />
            <TextInput
              className="rounded"
              placeholder="Search for items "
            ></TextInput>
          </View>
          <AdjustmentsVerticalIcon color={"#00CCBB"}></AdjustmentsVerticalIcon>
        </View>
      </View>

      {/*Body */}
      <ScrollView>
        {/* Categories Componnent conatining food categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid Placement from partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Treats"
          description="Best rated foods"
        />
        <FeaturedRow
          id="3"
          title="Offers Near You"
          description="Near offers thata re made for you"
        />
        <FeaturedRow
          id="3"
          title="Offers Near You"
          description="Near offers thata re made for you"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
