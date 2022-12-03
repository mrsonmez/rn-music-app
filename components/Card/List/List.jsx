import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function List({ url, title, artist, year, soldout }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} />

      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.artist}>{artist}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
        <View style={styles.soldoutContainer}>
          {soldout && <Text style={styles.soldout}>TÜKENDİ</Text>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    borderRadius: 100,
    height: 100,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 12,
    fontWeight: "bold",
  },
  year: {
    fontSize: 10,
    fontWeight: "300",
  },
  soldoutContainer: {
    alignItems: "flex-end",
  },
  soldout: {
    padding: 5,
    textAlign: "center",
    borderColor: "red",
    fontSize: 12,
    borderStyle: "solid",
    borderWidth: 1,
    color: "red",
    borderRadius: 4,
  },
});
