import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./tabNav";
import Onboarding from "./src/screens/onboarding";
import Symptoms from "./src/screens/symptoms";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="symptoms" component={Symptoms} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="mytabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
