import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Images from "../../../../../assets/images";

export const BasicMeasures = [
  {
    icon: Images.WashHand,
    heading: "Clean your hands regularly",
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

const styles = StyleSheet.create({
  measuresCont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
  rightSide: {
    width: 85,
    height: 85,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    marginRight: 15,
  },
  leftSide: {
    width: 250,
  },
  preventImage: {
    width: 75,
    height: 83,
    alignSelf: "center",
  },
  content: {
    color: "#999999",
    fontSize: 15,
  },

  heading: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0.5,
    marginBottom: 15,
  },
});
