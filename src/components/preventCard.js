import React from "react";
import * as Images from "../../assets/images";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Symptoms from "../screens/symptoms";
import Educate from "../screens/education";

export const Prevent = [
  { title: "Prevention" },
  { title: "Symptoms" },
  { title: "Diagnosis" },
];

export const BasicMeasures = [
  {
    icon: Images.WashHand,
    heading: "Wash your hands regularly",
    content: "Wash hands often with soap and water for at least 20s.",
  },
  {
    icon: Images.FaceMask,
    heading: "Wear a facemask",
    content: "You should wear facemask when you are around other people.",
  },
  {
    icon: Images.AvoidTouch,
    heading: "Avoid touching your face",
    content: "Hands touch many surfaces and can pick up viruses.",
  },
  {
    icon: Images.SocialDistancing,
    heading: "Avoid close contact",
    content: "Put distance between yourself and other people.",
  },
];

export const BasicSymptoms = [
  { title: "Shortness of breath" },
  { title: "Fever" },
  { title: "Fatigue, weakness" },
  { title: "Shortness of breath" },
  { title: "Aches" },
  { title: "Chills" },
  { title: "Headache" },
  { title: "Aches" },
  { title: "Sore throat" },
  { title: "Sneezing" },
  { title: "Stuffy, runny nose" },
];

export const Legend = [
  { title: "Common" },
  { title: "Sometimes" },
  { title: "Rare" },
];

export const LegendCard = ({ title }) => {
  return (
    <View style={styles.legendCont}>
      <View style={styles.legend}>
        <View style={styles.circle} />
        <Text style={styles.legendTitle}>{title}</Text>
      </View>
    </View>
  );
};

export const Prevention = ({ title, onPress, isActive, style }) => {
  //     const getActiveView = () => {
  // switch (title) {
  //     case "Symptoms":
  //         return <Symptoms />
  //         case "Diagnosis":
  //             return <Symptoms />

  //     default:
  //         return <Educate />
  // }
  //     }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.overall}>
        <Text style={[styles.title, isActive && styles.activeTitle, style]}>
          {title}
        </Text>
      </View>

      {isActive ? (
        <View style={styles.backGreen}>
          <View style={styles.activeGreen} />
        </View>
      ) : (
        <View style={styles.backGreen} />
      )}
    </TouchableOpacity>
  );
};

export const Measures = ({ icon, heading, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.measuresCont}>
        <View style={styles.rightSide}>
          <Image
            source={icon}
            style={styles.preventImage}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.leftSide}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export const SymptomCard = ({ title }) => {
  return (
    <View>
      <View style={styles.symtomCont}>
        <View style={styles.circlesCont}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
        <Text style={{ fontSize: 17, color: "#999999" }}>{title}</Text>
      </View>

      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  measuresCont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  legendTitle: {
    fontSize: 17,
    color: "#999999",
    marginLeft: 7,
  },
  legend: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 40,
  },
  //   legendCont: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //   },
  circlesCont: {
    flexDirection: "row",
    width: 114,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
  },
  symtomCont: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 15,
    marginVertical: 15,
  },
  circle: {
    width: 20,
    height: 20,
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 10,
  },
  content: {
    color: "#999999",
    fontSize: 15,
  },
  leftSide: {
    width: 250,
  },
  heading: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
  preventImage: {
    width: 75,
    height: 83,
    alignSelf: "center",
  },
  rightSide: {
    width: 85,
    height: 85,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    marginRight: 15,
  },
  backGreen: {
    width: "100%",
    height: 5,
    backgroundColor: "#96FFE1",
    marginTop: 12,
  },
  activeTitle: {
    color: "#151522",
  },
  title: {
    color: "#999999",
    fontSize: 16,
    fontWeight: "400",
  },
  activeGreen: {
    width: 110,
    height: 5,
    backgroundColor: "#00C48C",
  },
  overall: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
