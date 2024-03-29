import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  ImageStore,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Italy, NewsUpdate } from "./utils/components/newsUpdate";
import { Header } from "../../components/header";
import { Menu, ProfileIcon } from "../../../assets/svg";

export default function NewsPage() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="News" icon={<ProfileIcon />} leftIcon={<Menu />} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {Italy.map((item, index) => {
          return <NewsUpdate key={index} pic={item.pic} title={item.title} />;
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
});
