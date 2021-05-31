import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Months = [
  { title: "Jan" },
  { title: "Feb" },
  { title: "Mar" },
  { title: "Apr" },
  { title: "May" },
  { title: "Jun" },
  { title: "Jul" },
];

export const MonthYear = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#999999",
    fontSize: 12,
  },
});
