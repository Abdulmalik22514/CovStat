import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/onboarding";
import MyTabs from "./tabNav";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="mytabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
