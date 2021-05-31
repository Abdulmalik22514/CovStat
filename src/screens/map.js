import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { Minus, Plus, ProfileIcon } from "../../assets/svg";
import { AffectedRate } from "../components/graphCards";
import { Header } from "../components/header";
import { CountryPercent, GraphPies } from "../components/percentage";
import { MapStyles as styles } from "./styles";

export default function WorldMap({ navigation }) {
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
              source={require("../../assets/images/WorldMap.png")}
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
      </ScrollView>
    </View>
  );
}
