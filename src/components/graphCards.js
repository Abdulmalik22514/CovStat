import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Graph1,
  Graph2,
  Graph3,
  Graph4,
  GreenArrow,
  RedArrow,
} from "../../assets/svg";

export const CaseGraphs = [
  {
    title: "Total Cases",
    icon: <RedArrow />,
    record: `368,${226}`,
    graph: <Graph1 />,
  },
  {
    title: "Recorded",
    icon: <GreenArrow />,
    record: `101,${"069"}`,
    graph: <Graph2 />,
  },
  {
    title: "Active Cases",
    icon: <RedArrow />,
    record: `244,${375}`,
    graph: <Graph3 />,
  },
  {
    title: "Total Death",
    icon: <RedArrow />,
    record: `251,${"053"}`,
    graph: <Graph4 />,
  },
];

export const GraphCard = ({ icon, title, record, graph }) => {
  const getIconColor = () => {
    if (title === "Recorded") {
      return "green";
    }
  };

  const getNumColor = () => {
    switch (title) {
      case "Recorded":
        return "green";
      case "Total Death":
        return "red";

      default:
        return "black";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.totalCases}>
        <Text style={styles.title}>{title}</Text>
        <RedArrow color={getIconColor()} />
      </View>
      <Text style={[styles.record, { color: getNumColor() }]}>{record}</Text>
      {graph}
    </View>
  );
};

export const Affected = ({ amount, title, style, diffDot, diffColor }) => {
  return (
    <View style={styles.affected}>
      <View style={styles.affectedDot1}>
        <View style={[styles.dot1, diffDot && styles.dot2, style]} />
        <Text style={styles.affectedNumber}>{amount}</Text>
      </View>
      <Text style={[styles.caseType, diffColor && styles.textColor, style]}>
        {title}
      </Text>
    </View>
  );
};

export const AffectedRate = ({ title, isPink }) => {
  return (
    <View style={styles.moreAffected}>
      <View style={[styles.more, isPink && styles.pink]} />
      <Text style={{ color: "#999999", fontSize: 13 }}>{title}</Text>
    </View>
  );
};

export const AffectedDeath = ({ title, isPink }) => {
  return (
    <View style={styles.moreAffected}>
      <View style={[styles.more1, isPink && styles.green]} />
      <Text style={{ color: "#151522", fontSize: 12 }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#151522",
  },
  pink: {
    backgroundColor: "#FF98A8",
  },
  green: {
    backgroundColor: "#00C48C",
  },
  moreAffected: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  more1: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF647C",
    marginRight: 5,
  },
  more: {
    width: 11,
    height: 11,
    backgroundColor: "#FF647C",
    marginRight: 12,
  },
  caseType: {
    fontSize: 11,
    color: "#44444F",
    textAlign: "center",
  },
  dot2: {
    backgroundColor: "#FFCBD3",
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 25,
    // alignItems: "center",
    width: 158,
    height: 207,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 30,
  },
  record: {
    fontWeight: "600",
    color: "#151522",
    fontSize: 28,
    marginBottom: 25,
  },
  title: {
    color: "#999999",
    fontSize: 17,
  },
  totalCases: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  affectedNumber: {
    fontSize: 12,
    color: "#151522",
  },
  affectedDot1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  affectedRecovered: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 35,
  },
  affected: {
    width: 62,
    height: 34,
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF647C",
  },
});
