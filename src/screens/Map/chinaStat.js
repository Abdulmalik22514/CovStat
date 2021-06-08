import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Bell, LeftIcon, ProfileIcon } from "../../../assets/svg";
import { Header } from "../../components/header";
import * as Images from "../../../assets/images";
import { Cases } from "./utils/components/flags";
import { AffectedDeath } from "../Home/utils/components/graphCards";
import { Months, MonthYear } from "./utils/components/months";
import { ChinaStyles as styles } from "./styles";

export default function ChinaStat({ navigation }) {
  const [modalState, setModalState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Header
        title="China - statistic"
        icon={<ProfileIcon />}
        leftIcon={<LeftIcon />}
        onPress={() => navigation.pop()}
      />
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <View style={styles.contBox}>
          <View style={{ padding: 15 }}>
            <View style={styles.titleFlag}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={Images.China} style={styles.flag} />
                <Text style={styles.countryName}>China</Text>
              </View>
              <TouchableOpacity onPress={() => setModalState(true)}>
                <Bell />
              </TouchableOpacity>
            </View>
            <Cases amount="80,174" reported="1,478 Infected cases reported" />
            <View style={styles.divider} />
            <Cases
              amount="2,915"
              reported="550 Death cases reported"
              isRed
              noMargBottom
            />
          </View>
        </View>

        <View style={styles.contBox}>
          <Text style={styles.topic}>Curent affected and death people</Text>
          <View style={styles.affectedCont}>
            <AffectedDeath title="Death" />
            <AffectedDeath title="Affected" isPink />
          </View>
          <ImageBackground source={Images.StackedAreas} style={styles.stacked}>
            <View style={styles.moreAffected}>
              <Text style={{ color: "#151522", fontSize: 8 }}>80,174</Text>
              <View style={styles.more1} />
            </View>
            <View style={styles.moreAffected1}>
              <Text style={{ color: "#151522", fontSize: 8 }}>2915</Text>
              <View style={styles.more} />
            </View>
          </ImageBackground>
          <View style={styles.months}>
            {Months.map((item, index) => {
              return <MonthYear key={index} title={item.title} />;
            })}
          </View>
        </View>
      </View>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={{ padding: 10 }}>
              <Text style={styles.enable}>Enable notification</Text>
              <Text style={styles.notify}>
                Enable notification so you can always be up to date with new
                information.
              </Text>
            </View>

            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => navigation.navigate("Education")}
              style={styles.enableNow}
            >
              <Text
                style={{ color: "#FF647C", fontSize: 17, fontWeight: "400" }}
              >
                Enable now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
