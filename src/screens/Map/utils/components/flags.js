import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { UpArrow } from "../../../../../assets/svg";
import * as Images from "../../../../../assets/images";

export const RestFlags = [
  {
    flag: Images.France,
    country: "France",
    amt: "562 - Death cases reported",
    number: 14459,
  },
  {
    flag: Images.SKorea,
    country: "S.Korea",
    amt: "104 - Death cases reported",
    number: 8897,
  },
  {
    flag: Images.Switzerland,
    country: "Switzerland",
    amt: "98 - Death cases reported",
    number: 7474,
  },
  {
    flag: Images.UK,
    country: "UK",
    amt: "281 - Death cases reported",
    number: 5683,
  },
  {
    flag: Images.Netherlands,
    country: "Netherlands",
    amt: "179 - Death cases reported",
    number: 4204,
  },
  {
    flag: Images.Belgium,
    country: "Belgium",
    amt: "75 - Death cases reported",
    number: 3401,
  },
  {
    flag: Images.Austria,
    country: "Austria",
    amt: "16 - Death cases reported",
    number: 3302,
  },
  {
    flag: Images.Norway,
    country: "Norway",
    amt: "7 - Death cases reported",
    number: 2263,
  },
  {
    flag: Images.Sweden,
    country: "Sweden",
    amt: "21 - Death cases reported",
    number: 1931,
  },
];

export const RestWorld = ({ flag, country, amt, number }) => {
  return (
    <View>
      <View style={styles.allCountries}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={flag} style={styles.worldFlag} />
          <View>
            <Text style={styles.affectContName}>{country}</Text>
            <Text style={styles.contAmt}>{amt}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.contNumber}>{number}</Text>
          <UpArrow />
        </View>
      </View>
      <View style={styles.divider} />
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
  contAmt: {
    color: "#999999",
    fontWeight: "400",
    fontSize: 12,
  },
  contNumber: {
    color: "#151522",
    fontWeight: "400",
    fontSize: 14,
  },
  allCountries: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  affectContName: {
    color: "#151522",
    fontWeight: "400",
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
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
  worldFlag: {
    width: 33,
    height: 33,
    marginRight: 15,
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
