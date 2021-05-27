import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Images from "../assets/images";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  BackArrow,
  Bell,
  FrontArrow,
  Loading,
  Minus,
  Plus,
  ProfileIcon,
} from "../assets/svg";
import { CountryFlags, TopCountries } from "../components/flags";
import {
  Affected,
  AffectedRate,
  CaseGraphs,
  GraphCard,
} from "../components/graphCards";
import { Header } from "../components/header";
import { CountryPercent, GraphPies } from "../components/percentage";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

export default function WorldMap() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="World Wide Map" icon={<ProfileIcon />} />
      <View style={styles.divider} />
      <ScrollView style={styles.graphCont} showsVerticalScrollIndicator={false}>
        <View style={styles.bottomCont}>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={styles.topic}>COVID - 19 Affected Areas</Text>
            <View style={styles.affectedCont}>
              <AffectedRate title="Most Affected" />
              <AffectedRate title="Less Affected" isPink />
            </View>
          </View>
          <View style={styles.mapBackground}>
            <ImageBackground
              source={require("../assets/images/WorldMap.png")}
              style={{ width: "100%", height: "100%" }}
            >
              <View style={styles.cont}>
                <Plus />
                <Minus />
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.bottomCont}>
          <Text style={styles.ratio}>Top Countries</Text>
          {CountryPercent.map((item, index) => {
            return (
              <GraphPies
                key={index}
                percent={item.percent}
                contName={item.contName}
                affected={item.affected}
                recovered={item.recovered}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  ratio: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#171725",
  },

  cont: {
    borderRadius: 6,
    width: 28,
    height: 52,
    margin: 10,
    backgroundColor: "white",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  mapBackground: {
    marginTop: 20,
    width: "100%",
    padding: 1,
    height: 325,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
  },
  affectedCont: {
    flexDirection: "row",
    width: 240,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  topic: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 17,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  graphCont: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  bottomCont: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
