import { createStackNavigator } from '@react-navigation/stack';
import TealScreen from '../screens/TealScreen';
import DarkScreen from '../screens/DarkScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TealScreen"
        component={TealScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DarkScreen"
        component={DarkScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
