import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const LocationDisplay = ({ title, hotspot }) => {
  return (
    <View>
      <View style={styles.locationHotspot}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.hotspot}>{hotspot}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#151522",
  },
  hotspot: {
    fontSize: 17,
    fontWeight: "300",
    color: "#666666",
  },
  locationHotspot: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
