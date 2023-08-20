import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { Minus, Plus, ProfileIcon } from "../../../assets/svg";
import { RestFlags, RestWorld } from "./utils/components/flags";
import { AffectedRate } from "../Home/utils/components/graphCards";
import { Header } from "../../components/header";
import { CountryPercent, GraphPies } from "./utils/components/percentage";
import { MapStyles as styles } from "./styles";
import * as Images from "../../../assets/images";

export default function WorldMap({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="World Wide Map" icon={<ProfileIcon />} />
      <View style={styles.divider} />
      <ScrollView
        style={styles.graphCont}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
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
              source={Images.WorldMap}
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
                onPress={() => navigation.navigate("China")}
              />
            );
          })}
        </View>
        <View style={styles.liveReports}>
          <View style={styles.liveBox}>
            <Text style={styles.restWorld}>Rest of the world</Text>
          </View>
          <Text style={styles.countryList}>List of all Affected Countries</Text>
          {RestFlags.map((item, index) => {
            return (
              <RestWorld
                key={index}
                flag={item.flag}
                country={item.country}
                amt={item.amt}
                number={item.number}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
