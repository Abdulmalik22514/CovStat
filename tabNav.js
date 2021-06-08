import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WorldMap from "./src/screens/Map/map";
import Covid19 from "./src/screens/Home/home";
import { Home, Map, Education, Book, Discovery } from "./assets/svg";
// import Educate from "./src/screens/education";
import ChinaStat from "./src/screens/Map/chinaStat";
import Educate from "./src/screens/Education/education";
import DiscoveryPage from "./src/screens/Discovery/discovery";
import NewsPage from "./src/screens/News/news";

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
          } else if (route.name === "Education") {
            return <Education color={focused ? "#FF647C" : "#999999"} />;
          } else if (route.name === "Discovery") {
            return <Discovery color={focused ? "#FF647C" : "#999999"} />;
          } else if (route.name === "News") {
            return <Book color={focused ? "#FF647C" : "#999999"} />;
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
      <Tab.Screen name="Education" component={Educate} />
      <Tab.Screen name="Discovery" component={DiscoveryPage} />
      <Tab.Screen name="News" component={NewsPage} />
    </Tab.Navigator>
  );
}
