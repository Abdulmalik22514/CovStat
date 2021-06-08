// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckCircle } from "../../../assets/svg";
import { Buttons } from "../../components/buttons";

export default function ThankYou({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <CheckCircle />
      <Text style={styles.thanks}>Thank you!</Text>
      <Text style={styles.symptomCheck}>
        Thank you for reporting this. You’re helping create a global movement to
        map infections globally.
      </Text>
      <Buttons
        title="See the new stats"
        onPress={() => navigation.navigate("Discovery")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 320,
    paddingHorizontal: 25,
  },
  thanks: {
    fontSize: 35,
    fontWeight: "400",
    color: "#151522",
    marginVertical: 15,
  },
  symptomCheck: {
    color: "#999999",
    fontSize: 17,
    height: 66,
    width: 325,
    lineHeight: 22,
    letterSpacing: 0.3,
    fontWeight: "300",
    // marginTop: 20,
    marginBottom: 100,
    textAlign: "center",
  },
});
