import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Buttons } from "../../components/buttons";
import { DiagnosisStyles as styles } from "../Education/utils/styles";

export const Diagnosis = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.basicMeasures}>Report my Status</Text>
      <Text style={styles.symptomCheck}>
        If you feel some symptoms or you are thinking that you may be infected.
        Please report your self so other people can be aware that someone who is
        in isolation is nearby them.
      </Text>
      <Text style={styles.opportunity}>
        <Text style={{ color: "#FF647C" }}>COVSTATS </Text>
        gives everyone the opportunity to report their symptoms anonymously for
        the benefit of others
      </Text>
      <Buttons
        onPress={() => navigation.navigate("locationOff")}
        title="Please report your status"
      />
    </View>
  );
};
