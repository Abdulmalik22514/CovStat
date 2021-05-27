import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorldMap from "./screens/worldStat";
import Covid19 from "./screens/covid19";
import { Ionicons } from "@expo/vector-icons";
import { Home, Map } from "./assets/svg";
import Education from "./screens/education";
import ChinaStat from "./screens/chinaStat";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? <Home /> : "ios-information-circle-outline";
            } else if (route.name === "Map") {
              iconName = focused ? <Map /> : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF647C",
          inactiveTintColor: "#999999",
        }}
      >
        <Tab.Screen name="China" component={ChinaStat} />
        <Tab.Screen name="Home" component={Covid19} />
        <Tab.Screen name="Map" component={WorldMap} />
        <Tab.Screen name="Education" component={Education} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
