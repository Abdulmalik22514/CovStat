import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DownArrow, UpArrow } from "../../../../../assets/svg";
import * as Images from "../../../../../assets/images";

export const CountryFlags = [
  {
    flag: Images.China,
    country: "China",
    number: 81054,
    icon: <DownArrow />,
  },
  {
    flag: Images.Italy,
    country: "Italy",
    number: 59138,
    icon: <UpArrow />,
  },
  {
    flag: Images.USA,
    country: "USA",
    number: 38167,
    icon: <UpArrow />,
  },
  {
    flag: Images.Spain,
    country: "Spain",
    number: 28603,
    icon: <UpArrow />,
  },
  {
    flag: Images.Germany,
    country: "Germany",
    number: 24806,
    icon: <UpArrow />,
  },
  {
    flag: Images.Iran,
    country: "Iran",
    number: 21638,
    icon: <UpArrow />,
  },
];

export const TopCountries = ({ country, flag, icon, number }) => {
  return (
    <View style={styles.countryCont}>
      <View style={styles.rightSide}>
        <Image source={flag} style={styles.flag} />
        <Text style={styles.countryName}>{country}</Text>
      </View>
      <View style={styles.leftSide}>
        <Text style={styles.amount}>{number}</Text>
        {icon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countryCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 15,
    height: 80,
  },
  amount: {
    color: "#151522",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  countryName: {
    color: "#151522",
    fontSize: 21,
  },
  flag: {
    width: 48,
    height: 48,
    marginRight: 20,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
