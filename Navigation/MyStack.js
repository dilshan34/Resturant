import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
