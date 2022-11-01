import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestuarantCard from "./RestuarantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      {/* Featured Items */}

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizonal: 15 }}
        showsVerticalScrollIndicator={false}
        className="pt-4 px-4"
      >
        {/* Restuarant Cards  */}
        {/* Add dummy data to the Restuarant card props  */}
        <RestuarantCard
          id={123}
          imgUrl={
            "https://links.papareact.com/gn7"
          }
          title={"Yo Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"1234 Main Street"}
          short_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          dishes={["Sushi", "Ramen", "Sashimi"]}
          Long={20.123}
          lat={34.123}
        />
        <RestuarantCard
          id={123}
          imgUrl={
            "https://links.papareact.com/gn7"
          }
          title={"Yo Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"1234 Main Street"}
          short_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          dishes={["Sushi", "Ramen", "Sashimi"]}
          Long={20.123}
          lat={34.123}
        />
        <RestuarantCard
          id={123}
          imgUrl={
            "https://links.papareact.com/gn7"
          }
          title={"Yo Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"1234 Main Street"}
          short_description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          dishes={["Sushi", "Ramen", "Sashimi"]}
          Long={20.123}
          lat={34.123}
        />
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
