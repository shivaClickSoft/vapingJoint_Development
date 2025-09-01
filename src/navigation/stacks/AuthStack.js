import { createNativeStackNavigator } from "@react-navigation/native-stack"

// screens
import LoginScreen from "../../features/auth/screens/LoginScreen";
import RegisterScreen from "../../features/auth/screens/RegisterScreen";
import ForgetEmailVerification from "../../features/auth/screens/ForgetEmailVerification";
import ForgetOtpVerification from "../../features/auth/screens/ForgetOtpVerification";
import ResetPassword from "../../features/auth/screens/ResetPassword";
import MobileAndEmailOtpVerificationPage from "../../features/auth/screens/MobileAndEmailOtpVerificationPage";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgetEmailVerification" component={ForgetEmailVerification} />
      <Stack.Screen name="ForgetOtpVerification" component={ForgetOtpVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="MobileAndEmailOtpVerificationPage" component={MobileAndEmailOtpVerificationPage} />
    </Stack.Navigator>
  )
}

export default AuthStack