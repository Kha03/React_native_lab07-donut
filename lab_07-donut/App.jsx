import DonutDetail from "./displays/DonutDetail";
import ListDonut from "./displays/ListDonut";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListDonut" component={ListDonut} />
        <Stack.Screen name="DonutDetail" component={DonutDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
