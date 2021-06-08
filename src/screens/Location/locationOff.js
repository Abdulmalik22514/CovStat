import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Buttons } from "../../../src/components/buttons";
import { StatusHeader } from "../../components/header";
import { LocationDisplay } from "./utils/locationCard";

export default function LocationOff({ navigation }) {
  const [modalState, setModalState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <StatusHeader title="Report my status" />
      <View style={styles.divider} />
      <View style={styles.graphCont}>
        <Text style={styles.opportunity}>
          <Text style={{ color: "#FF647C" }}>COVSTATS </Text>
          gives everyone the opportunity to report their symptoms anonymously
          for the benefit of others
        </Text>
        <LocationDisplay
          title="Your location:"
          hotspot=" Please enable location"
        />
        <LocationDisplay title="Total hotspots near you: " hotspot={34} />
        <Text style={styles.symptomCheck}>
          If you feel some symptoms or you are thinking that you may be
          infected. Please report your self so other people can be aware that
          someone who is in isolation is nearby them.
        </Text>
        <Buttons
          title="Connect to our Network"
          locOff
          onPress={() => setModalState(true)}
        />
      </View>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={{ padding: 10 }}>
              <Text style={styles.enable}>Enable location</Text>
              <Text style={styles.notify}>
                To know your location to generate hotspots around you please
                enable location on your phone.
              </Text>
            </View>

            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => navigation.navigate("locOn")}
              style={styles.enableNow}
            >
              <Text
                style={{ color: "#FF647C", fontSize: 16, fontWeight: "400" }}
              >
                Enable now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  enableNow: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  notify: {
    fontWeight: "300",
    fontSize: 15,
    textAlign: "center",
    // color: "#999999",
    marginBottom: 10,
  },
  enable: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 8,
    textAlign: "center",
  },
  modalBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 170,
    width: 290,
    borderRadius: 10,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    alignItems: "center",
    justifyContent: "center",
  },
});
