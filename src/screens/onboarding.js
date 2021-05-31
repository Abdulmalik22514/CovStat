import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Images from "../../assets/images";
import AppIntroSlider from "react-native-app-intro-slider";
import { OnboardingStyles as styles } from "./styles";

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
        onDone={() => navigation.navigate("mytabs")}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        showSkipButton
      />
    </View>
  );
}
