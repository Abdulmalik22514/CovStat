import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackArrow, FrontArrow, Loading, ProfileIcon } from "../assets/svg";
import { CountryFlags, TopCountries } from "../components/flags";
import { Affected, CaseGraphs, GraphCard } from "../components/graphCards";
import { Header } from "../components/header";

export default function Covid19() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="COVID-19" icon={<ProfileIcon />} noIcon />
      <View style={styles.divider} />
      <ScrollView style={styles.graphCont} showsVerticalScrollIndicator={false}>
        <View style={styles.itemCont}>
          {CaseGraphs.map((item, index) => {
            return (
              <GraphCard
                key={index}
                title={item.title}
                icon={item.icon}
                record={item.record}
                graph={item.graph}
              />
            );
          })}
        </View>
        <View style={styles.bottomCont}>
          <View style={styles.recoveryRatio}>
            <Text style={styles.ratio}>Ratio of Recovery</Text>
            <Text style={{ fontSize: 11, color: "#151522" }}>View Details</Text>
          </View>
          <Loading style={{ alignSelf: "center" }} />
          <View style={styles.affectedRecovered}>
            <Affected title="Affected" amount="368226" />
            <Affected title="Recovered" amount="101069" diffColor diffDot />
          </View>
        </View>
        <View style={styles.liveReports}>
          <View style={styles.liveBox}>
            <Text style={{ color: "#171725", fontSize: 17, fontWeight: "600" }}>
              Live Reports
            </Text>
            <View style={styles.arrows}>
              <BackArrow />
              <FrontArrow />
            </View>
          </View>
          <Text style={{ color: "#999999", fontSize: 13 }}>
            Top five countries
          </Text>
          {CountryFlags.map((item, index) => {
            return (
              <TopCountries
                key={index}
                flag={item.flag}
                icon={item.icon}
                country={item.country}
                number={item.number}
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
  arrows: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    width: 56,
    height: 32,
    borderRadius: 8,
    borderColor: "#E4E4E4",
    borderWidth: 1,
  },
  liveBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  affectedRecovered: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 35,
  },
  ratio: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#171725",
  },
  liveReports: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    paddingVertical: 20,
    marginTop: 30,
    paddingHorizontal: 15,
  },
  recoveryRatio: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    marginBottom: 40,
  },
  bottomCont: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  graphCont: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
});
