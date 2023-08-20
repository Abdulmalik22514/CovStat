import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LocationDisplay } from "./utils/locationCard";
import { StatusHeader } from "../../components/header";
import { ReportedSymptoms, SyptomsReport } from "./utils/components/report";
import { Buttons } from "../../components/buttons";

export default function LocationID({ navigation }) {
  const [checked, setChecked] = useState("Shortness of breath");
  const [modalState, setModalState] = useState(false);
  // const [selected, setSelected] = useState([SyptomsReport]);

  // const selectedItem = () => {
  //   selected = <SyptomsReport />;
  //   setSelected((prev) => [...prev, item.title]);
  // };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <StatusHeader title="Report my status" locOn />
      <View style={styles.divider} />
      <ScrollView
        style={styles.graphCont}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.opportunity}>
          <Text style={{ color: "#FF647C" }}>COVSTATS </Text>
          gives everyone the opportunity to report their symptoms anonymously
          for the benefit of others
        </Text>
        <LocationDisplay title="Your ID:" hotspot=" fa70361d-d5d1" />
        <LocationDisplay title="Your location:" hotspot=" Sarajevo" />
        <LocationDisplay title="Total hotspots near you: " hotspot={34} />
        <Text style={styles.symptomCheck}>
          You’ are anonymously connected to our network. We have associated an{" "}
          <Text style={{ fontWeight: "700" }}>ID number </Text>
          so next time when you come back and update your symptoms we will know
          where to update it.
        </Text>
        <Text style={styles.symptomReport}>Report your symptoms</Text>
        <View style={styles.divider} />
        <View style={{ marginBottom: 25 }}>
          {SyptomsReport.map((item, index) => {
            return (
              <ReportedSymptoms
                key={index}
                title={item.title}
                onPress={() => setChecked(item.title)}
                isChecked={item.title === checked}
                // onPress={() => setSelected((prev) => [...prev, item.title])}
                // isChecked={item.title === checked && selected.includes(item)}
              />
            );
          })}
        </View>

        <Buttons
          title="Submit information"
          onPress={() => setModalState(true)}
        />
      </ScrollView>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={{ padding: 10 }}>
              <Text style={styles.enable}>Ready to Report</Text>
              <Text
                style={{
                  color: "#FF647C",
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: 16,
                }}
              >
                Just a reminder
              </Text>
              <Text style={styles.notify}>
                You are anonymous and we cannot identify you. This data will be
                used to build a global map of infections, that can be used by
                you, emergency services, educational institutions and
                governments for greater good. By sending us this data - you are
                helping a global effort to map worldwide infections.
              </Text>
            </View>

            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => navigation.navigate("thanks")}
              style={styles.enableNow}
              disabled={!checked}
            >
              <Text
                style={{
                  color: "#FF647C",
                  fontSize: 18,
                  fontWeight: "400",
                }}
              >
                Send now
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
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  enableNow: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 12,
  },
  notify: {
    fontWeight: "300",
    fontSize: 16,
    textAlign: "center",
    color: "#151522",
    marginVertical: 5,
  },
  enable: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 27,
    marginTop: 10,
    textAlign: "center",
  },
  modalBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 330,
    width: 300,
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
  symptomReport: {
    color: "#151522",
    fontWeight: "600",
    fontSize: 23,
    marginTop: 10,
    marginBottom: 15,
  },
  symptomCheck: {
    color: "#999999",
    fontSize: 17,
    height: 110,
    width: "95%",
    lineHeight: 22,
    letterSpacing: 0.3,
    fontWeight: "300",
    marginTop: 20,
    marginBottom: 20,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  graphCont: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 100,
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
