import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/Onboarding";
import Covid19 from "./screens/covid19";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="covid19" component={Covid19} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
