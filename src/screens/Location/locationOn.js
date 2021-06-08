import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Buttons } from "../../../src/components/buttons";
import { StatusHeader } from "../../components/header";
import { LocationDisplay } from "./utils/locationCard";

export default function LocationOn({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <StatusHeader title="Report my status" locOn />
      <View style={styles.divider} />
      <View style={styles.graphCont}>
        <Text style={styles.opportunity}>
          <Text style={{ color: "#FF647C" }}>COVSTATS </Text>
          gives everyone the opportunity to report their symptoms anonymously
          for the benefit of others
        </Text>
        <LocationDisplay title="Your location:" hotspot=" Sarajevo" />
        <LocationDisplay title="Total hotspots near you: " hotspot={34} />
        <Text style={styles.symptomCheck}>
          If you feel some symptoms or you are thinking that you may be
          infected. Please report your self so other people can be aware that
          someone who is in isolation is nearby them.
        </Text>
        <Buttons
          title="Connect to our Network"
          onPress={() => navigation.navigate("locID")}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  symptomCheck: {
    color: "#999999",
    fontSize: 17,
    height: 110,
    width: "90%",
    lineHeight: 22,
    letterSpacing: 0.3,
    fontWeight: "300",
    marginTop: 30,
    marginBottom: 20,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  graphCont: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  opportunity: {
    fontWeight: "600",
    fontSize: 35,
    width: "100%",
    lineHeight: 40,
    height: 250,
    marginBottom: 30,
  },
});
