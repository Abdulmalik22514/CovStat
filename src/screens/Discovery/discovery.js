import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  ImageStore,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MapPin, Menu, ProfileIcon } from "../../../assets/svg";
import { Header, SearchBox } from "../../components/header";
import * as Images from "../../../assets/images";
import { DiscoveryStyles as styles } from "./styles";

export default function DiscoveryPage() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="Discovery" icon={<ProfileIcon />} leftIcon={<Menu />} />
      <ImageBackground style={styles.imgBg} source={Images.LocationArea}>
        <SearchBox />
        <View style={styles.mapArea}>
          <View style={styles.red}>
            <MapPin />
          </View>
        </View>
        <Text style={styles.available}> 7 spotted around you</Text>
      </ImageBackground>
    </View>
  );
}
