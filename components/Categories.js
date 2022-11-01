import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}>
      {/* Category Card */}
      <CategoryCard title = "Testing 1" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 2" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 3" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 3" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 3" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 3" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 3" imgUrl="https:links.papareact.com/gn7"/>
      <CategoryCard title = "Testing 3" imgUrl="https:links.papareact.com/gn7"/>
    </ScrollView>
  );
};

export default Categories;
