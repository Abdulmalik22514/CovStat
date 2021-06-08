import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  BasicSymptoms,
  Legend,
  LegendCard,
  OverallSymptoms,
  SymptomCard,
} from "./utils/components/symptomsCard";
import { SymptomStyles as styles } from "../Education/utils/styles";
import { Cold, Crown, Flu } from "../../../assets/svg";

export const Symptoms = () => {
  return (
    <View>
      <Text style={styles.basicMeasures}>Symptom Check</Text>
      <Text style={styles.symptomCheck}>Check your symptoms for</Text>
      <View style={styles.overallSymptoms}>
        <OverallSymptoms icon={<Cold />} title="Cold" />
        <OverallSymptoms icon={<Flu />} title="Flu" />
        <OverallSymptoms icon={<Crown />} title="COVID-19" />
      </View>
      <View style={styles.symptomBox}>
        <Cold color={"#151522"} width={12} height={17} />
        <Flu color={"#151522"} width={15} height={16} />
        <Crown color={"#151522"} width={17} height={13} />
      </View>
      <View style={styles.divider} />

      {BasicSymptoms.map((item, index) => {
        return <SymptomCard key={index} title={item.title} />;
      })}
      <Text style={styles.legend}>Legend</Text>
      <View style={styles.legendCont}>
        {Legend.map((item, index) => {
          return <LegendCard key={index} title={item.title} />;
        })}
      </View>
    </View>
  );
};
