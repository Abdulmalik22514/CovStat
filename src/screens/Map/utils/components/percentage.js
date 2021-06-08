import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Images from "../../../../../assets/images";
import { Bell } from "../../../../../assets/svg";

export const CountryPercent = [
  {
    percent: Images.GraphPie1,
    contName: "China",
    affected: "Affected - 81.05k",
    recovered: "Recovered - 72,44k",
    bell: <Bell />,
  },
  {
    percent: Images.GraphPie2,
    contName: "Italy",
    affected: "Affected - 53.5k",
    recovered: "Recovered - 6.07k",
    bell: <Bell />,
  },
  {
    percent: Images.GraphPie3,
    contName: "USA",
    affected: "Affected - 26.892",
    recovered: "Recovered - 178",
    bell: <Bell />,
  },
];

export const GraphPies = ({
  percent,
  contName,
  affected,
  recovered,
  onPress,
}) => {
  return (
    <View style={styles.graphPies}>
      <Image source={percent} style={styles.pie1} />
      <View style={styles.pieView}>
        <Text style={styles.china}>{contName}</Text>
        <Text style={styles.affected}>{affected}</Text>
        <Text style={styles.affected}>{recovered}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Bell />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  china: {
    color: "#151522",
    fontSize: 17,
    marginBottom: 10,
  },
  affected: {
    color: "#999999",
    fontSize: 13,
  },
  pie1: {
    width: 70,
    height: 70,
    marginLeft: 7,
  },
  pieView: {
    marginLeft: 15,
    marginRight: 85,
    width: 130,
  },
  graphPies: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    marginTop: 30,
    padding: 10,
    height: 90,
  },
});
