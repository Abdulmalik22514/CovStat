import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackArrow, FrontArrow, Loading, ProfileIcon } from "../../assets/svg";
import { CountryFlags, TopCountries } from "../components/flags";
import { Affected, CaseGraphs, GraphCard } from "../components/graphCards";
import { Header } from "../components/header";
import { HomeStyles as styles } from "./styles";

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
