import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { DownArrow, UpArrow } from "../assets/svg";

export const CountryFlags = [
  {
    flag: require("../assets/images/China.png"),
    country: "China",
    number: 81054,
    icon: <DownArrow />,
  },
  {
    flag: require("../assets/images/Italy.png"),
    country: "Italy",
    number: 59138,
    icon: <UpArrow />,
  },
  {
    flag: require("../assets/images/USA.png"),
    country: "USA",
    number: 38167,
    icon: <UpArrow />,
  },
  {
    flag: require("../assets/images/Spain.png"),
    country: "Spain",
    number: 28603,
    icon: <UpArrow />,
  },
  {
    flag: require("../assets/images/Germany.png"),
    country: "Germany",
    number: 24806,
    icon: <UpArrow />,
  },
  {
    flag: require("../assets/images/Iran.png"),
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

export const Cases = ({ amount, reported, isRed, style, noMargBottom }) => {
  return (
    <View style={[styles.casesCont, noMargBottom && styles.noBottom]}>
      <Text style={[styles.cases, isRed && styles.Red, style]}>{amount}</Text>
      <Text style={styles.reported}>{reported}</Text>
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
  noBottom: {
    marginBottom: 5,
  },
  casesCont: {
    marginTop: 15,
    marginBottom: 15,
  },
  reported: {
    fontSize: 17,
    color: "#999999",
  },
  Red: {
    color: "#FF647C",
  },
  cases: {
    fontSize: 28,
    fontWeight: "600",
    color: "#00C48C",
    marginBottom: 5,
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
