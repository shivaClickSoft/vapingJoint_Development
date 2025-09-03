import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../../features/profile/screens/Profile";


const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default ProfileStack;