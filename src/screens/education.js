import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ProfileIcon, SeeMore } from "../../assets/svg";
import { Header } from "../components/header";
import {
  BasicMeasures,
  Measures,
  Prevent,
  Prevention,
} from "../components/preventCard";
import * as Images from "../../assets/images";

const slope = { top: 10, bottom: 10, left: 10, right: 10 };

export default function Educate({ navigation, isActive, title, item }) {
  const [Active, SetActive] = useState("Prevention");
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="COVID-19" icon={<ProfileIcon />} noIcon />
      <View style={styles.divider} />
      <ScrollView style={styles.graphCont} showsVerticalScrollIndicator={false}>
        <Text style={styles.topic}>
          Coronavirus disease (COVID - 19) advice for the public
        </Text>
        <Text style={styles.details}>
          Stay aware of the latest information on the{" "}
          <Text style={{ fontWeight: "bold" }}>COVID-19 outbreak</Text> ,
          available on the WHO website and through your national and local
          public health authority. Most people who become infected experience
          mild illness and recover, but it can be more severe for others. Take
          care of your health and protect others by doing the following:
        </Text>
        <View style={styles.seeMoreCont}>
          <Text style={styles.seeMoreText}>See more</Text>
          <View style={styles.separator} />
          <TouchableOpacity hitSlop={slope}>
            <SeeMore />
          </TouchableOpacity>
        </View>
        <View style={styles.prevention}>
          {Prevent.map((item, index) => {
            return (
              <Prevention
                key={index}
                title={item.title}
                onPress={() => SetActive(item.title)}
                isActive={item.title === Active}
              />
            );
          })}
        </View>
        <Text style={styles.basicMeasures}>
          Basic protective measures against the new coronavirus
        </Text>
        {BasicMeasures.map((item, index) => {
          return (
            <Measures
              key={index}
              icon={item.icon}
              heading={item.heading}
              content={item.content}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  prevention: {
    marginTop: 40,
    flexDirection: "row",
    width: "100%",
    marginBottom: 40,
  },
  basicMeasures: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 34,
    width: 308,
    height: 102,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
  },
  seeMoreText: {
    color: "white",
    fontWeight: "300",
    fontSize: 16,
  },
  graphCont: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 100,
  },

  topic: {
    color: "#171725",
    fontSize: 28,
    fontWeight: "600",
    width: 308,
    height: 102,
    marginBottom: 20,
    lineHeight: 34,
  },
  details: {
    fontWeight: "300",
    color: "#999999",
    fontSize: 16,
    // width: 308,
    // height: 176,
    marginBottom: 25,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  seeMoreCont: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FF647C",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
});
