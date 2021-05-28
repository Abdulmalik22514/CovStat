import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WorldMap from "./screens/map";
import Covid19 from "./screens/home";
import { Home, Map } from "./assets/svg";
import Education from "./screens/education";
import ChinaStat from "./screens/chinaStat";

const Tab = createBottomTabNavigator();
const MapStack = createStackNavigator();

function MapStackScreen() {
  return (
    <MapStack.Navigator headerMode={"none"}>
      <MapStack.Screen name="Map" component={WorldMap} />
      <MapStack.Screen name="China" component={ChinaStat} />
    </MapStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Home color={focused ? "#FF647C" : "#999999"} />;
          } else if (route.name === "Map") {
            return <Map color={focused ? "#FF647C" : "#999999"} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF647C",
        inactiveTintColor: "#999999",
      }}
    >
      <Tab.Screen name="Home" component={Covid19} />
      <Tab.Screen name="Map" component={MapStackScreen} />
      <Tab.Screen name="Education" component={Education} />
    </Tab.Navigator>
  );
}
