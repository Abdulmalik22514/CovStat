import { StyleSheet } from "react-native";

export const OnboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
