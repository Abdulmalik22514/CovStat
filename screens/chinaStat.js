import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageStore,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Bell, ProfileIcon } from "../assets/svg";
import { Header } from "../components/header";
import * as Images from "../assets/images";
import { Cases } from "../components/flags";
import { AffectedDeath } from "../components/graphCards";
import { Months, MonthYear } from "../components/months";

export default function ChinaStat() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="China - statistic" icon={<ProfileIcon />} leftIcon />
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <View style={styles.contBox}>
          <View style={{ padding: 15 }}>
            <View style={styles.titleFlag}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={Images.China} style={styles.flag} />
                <Text style={styles.countryName}>China</Text>
              </View>
              <Bell />
            </View>
            <Cases amount="80,174" reported="1,478 Infected cases reported" />
            <View style={styles.divider} />
            <Cases
              amount="2,915"
              reported="550 Death cases reported"
              isRed
              noMargBottom
            />
          </View>
        </View>

        <View style={styles.contBox}>
          <Text style={styles.topic}>Curent affected and death people</Text>
          <View style={styles.affectedCont}>
            <AffectedDeath title="Death" />
            <AffectedDeath title="Affected" isPink />
          </View>
          <ImageBackground source={Images.StackedAreas} style={styles.stacked}>
            <View style={styles.moreAffected}>
              <Text style={{ color: "#151522", fontSize: 8 }}>80,174</Text>
              <View style={styles.more1} />
            </View>
            <View style={styles.moreAffected1}>
              <Text style={{ color: "#151522", fontSize: 8 }}>2915</Text>
              <View style={styles.more} />
            </View>
          </ImageBackground>
          <View style={styles.months}>
            {Months.map((item, index) => {
              return <MonthYear key={index} title={item.title} />;
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  months: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 18,
    marginBottom: 35,
  },
  moreAffected1: {
    flexDirection: "row",
    alignItems: "center",
    width: 40,
    height: 12,
    justifyContent: "space-between",
    marginTop: 72,
    marginLeft: 130,
  },
  moreAffected: {
    flexDirection: "row",
    alignItems: "center",
    width: 46,
    height: 12,
    justifyContent: "space-between",
    marginTop: 15,
    marginLeft: 120,
  },
  more: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF647C",
    marginRight: 5,
  },
  more1: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C48C",
    marginRight: 5,
  },
  stacked: {
    width: "100%",
    height: 180,
    marginTop: 40,
  },
  affectedCont: {
    flexDirection: "row",
    width: 130,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 15,
  },
  topic: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 15,
  },
  countryName: {
    color: "#151522",
    fontSize: 21,
  },
  titleFlag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flag: {
    width: 48,
    height: 48,
    marginRight: 20,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  contBox: {
    marginTop: 30,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
  },
});
