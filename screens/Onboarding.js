import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Images from "../assets/images";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    image: Images.Fever,
    title: "Fever",
    text: "He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.",
  },
  {
    key: 2,
    image: Images.Cough,
    title: "Cough",
    text: "Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.Other cool stuff",
  },
  {
    key: 3,
    image: Images.Breathing,
    title: "Breathing Difficulty",
    text: "Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.Other cool stuff",
  },
];

export default function Onboarding({ navigation }) {
  const _renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={styles.slide} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.titleInfo}>{item.text}</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Done</Text>
    );
  };

  const _renderNextButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Next</Text>
    );
  };

  const _renderSkipButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Skip</Text>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={{ backgroundColor: "grey" }}
        activeDotStyle={{ backgroundColor: "red" }}
        onDone={() => navigation.navigate("covid19")}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        showSkipButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 10,
  },
  slide: {
    width: 300,
    height: 300,
    marginTop: 250,
    marginBottom: 30,
    alignSelf: "center",
  },
  title: {
    color: "#171725",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  titleInfo: {
    color: "#999999",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.3,
  },
});
