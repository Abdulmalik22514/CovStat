import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { PlayCircle } from "../../../../../assets/svg";
import * as Images from "../../../../../assets/images";

export const Italy = [
  {
    pic: Images.ItalyUpdate1,
    title: "Italy coronavirus deaths at 5,476 after 651 rise: Live updates",
  },
  {
    pic: Images.ItalyUpdate2,
    title: "Italy: Deaths rise by 651 in a day, bringing total to 5,476",
  },
];

export const NewsUpdate = ({ pic, title }) => {
  return (
    <View>
      <ImageBackground source={pic} style={styles.imgBg}>
        <TouchableOpacity style={styles.icon}>
          <PlayCircle />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.update}>{title}</Text>
      <View style={styles.readingTime}>
        <TouchableOpacity>
          <Text style={styles.continue}>CONTINUE READING</Text>
        </TouchableOpacity>

        <Text style={styles.time}>12 MIN READ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: "100%",
    height: 220,
  },
  icon: {
    marginTop: 160,
    marginLeft: 15,
  },
  time: {
    color: "#999999",
    fontSize: 14,
    fontWeight: "300",
  },
  readingTime: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  update: {
    color: "#151522",
    fontWeight: "600",
    fontSize: 24,
    marginHorizontal: 20,
    marginVertical: 25,
  },
  continue: {
    color: "#151522",
    fontSize: 14,
    fontWeight: "300",
  },
});
