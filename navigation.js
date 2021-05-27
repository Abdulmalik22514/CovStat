import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/Onboarding";
import Covid19 from "./screens/covid19";
import WorldMap from "./screens/worldStat";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Covid19} />
        <Stack.Screen name="Map" component={WorldMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
