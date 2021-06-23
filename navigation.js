import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LocationOn from "./src/screens/Location/locationOn";
import LocationID from "./src/screens/Location/locationID";
import LocationOff from "./src/screens/Location/locationOff";
import MyTabs from "./tabNav";
import Onboarding from "./src/screens/Onboarding/onboarding";
import ThankYou from "./src/screens/Location/thanks";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="mytabs" component={MyTabs} />

        <Stack.Screen name="locationOff" component={LocationOff} />
        <Stack.Screen name="locOn" component={LocationOn} />
        <Stack.Screen name="locID" component={LocationID} />
        <Stack.Screen name="thanks" component={ThankYou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
