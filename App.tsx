import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeView}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="login"
          component={LoginView}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="signup"
          component={SignupView}
          options={{ title: "Sign Up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
