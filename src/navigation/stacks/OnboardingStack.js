import { createNativeStackNavigator } from "@react-navigation/native-stack"


//screens
import ScreenOne from "../../features/onboarding/screens/ScreenOne"
import ScreenTwo from "../../features/onboarding/screens/ScreenTwo"
import ScreenThree from "../../features/onboarding/screens/ScreenThree"

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="ScreenOne" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  )
}

export default OnboardingStack