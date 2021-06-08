import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ProfileIcon, SeeMore } from "../../../assets/svg";
import { Header } from "../../components/header";
import { Prevent, Tabs } from "./utils/components/preventCard";
import { Symptoms } from "./symptoms";
import { Diagnosis } from "./diagnosis";
import { Prevention } from "./prevention";
import { EducationStyles as styles } from "../Education/utils/styles";

const slope = { top: 10, bottom: 10, left: 10, right: 10 };

export default function Educate({ navigation }) {
  const [Active, SetActive] = useState("Prevention");

  const getActiveView = () => {
    switch (Active) {
      case "Symptoms":
        return <Symptoms />;
      case "Diagnosis":
        return <Diagnosis />;

      default:
        return <Prevention />;
    }
  };
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
              <Tabs
                key={index}
                title={item.title}
                onPress={() => SetActive(item.title)}
                isActive={item.title === Active}
              />
            );
          })}
        </View>
        {getActiveView()}
      </ScrollView>
    </View>
  );
}
