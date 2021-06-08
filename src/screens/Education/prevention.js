import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicMeasures, Measures } from "./utils/components/preventionCard";

export const Prevention = () => {
  return (
    <View>
      <Text style={styles.basicMeasures}>
        Basic protective measures against the new coronavirus
      </Text>
      {BasicMeasures.map((item, index) => {
        return (
          <Measures
            key={index}
            icon={item.icon}
            heading={item.heading}
            content={item.content}
            // onPress={()=>setSelected(pre=>[...prev,item.title])}
            // isChecked={selected.includes(item)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  basicMeasures: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 34,
    width: 308,
    height: 102,
  },
});
