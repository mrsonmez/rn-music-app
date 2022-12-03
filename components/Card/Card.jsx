import { View, FlatList } from "react-native";
import React from "react";
import List from "./List/List";
import { data } from "./List/data/music_data";
import { useSelector } from "react-redux";
export default function Card() {
  const rendered = ({ item }) => {
    return (
      <List
        url={item.imageUrl}
        soldout={item.isSoldOut}
        artist={item.artist}
        title={item.title}
        year={item.year}
      />
    );
  };
  const search = useSelector((state) => state.search);
  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  return (
    <View>
      <FlatList
        data={filtered}
        contentContainerStyle={{ paddingBottom: 60 }}
        renderItem={rendered}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
