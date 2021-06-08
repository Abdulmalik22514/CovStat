import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DropDown, LeftIcon, Location } from "../../assets/svg";

export const Header = ({ icon, title, noIcon, leftIcon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {leftIcon ? leftIcon : <View />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>{icon}</TouchableOpacity>
    </View>
  );
};

export const StatusHeader = ({ leftIcon, title, onPress, locOn }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {leftIcon ? <LeftIcon /> : <View />}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      {locOn ? (
        <View style={styles.locationView}>
          <Location color={"#00C48C"} />
        </View>
      ) : (
        <View style={styles.locationView}>
          <View style={styles.indicator} />
          <Location />
        </View>
      )}
    </View>
  );
};

export const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <TextInput
        style={styles.input}
        placeholder="Discover Corona Virus by"
        placeholderTextColor="#151522"
      />
      <TouchableOpacity>
        <DropDown />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontWeight: "300",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 20,
    width: "90%",
    height: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 5,
    alignItems: "center",
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    color: "#151522",
    fontSize: 20,
  },
  indicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "red",
  },
});
