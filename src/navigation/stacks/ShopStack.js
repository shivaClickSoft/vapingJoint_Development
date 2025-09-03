import { createNativeStackNavigator } from "@react-navigation/native-stack"


import Shop from "../../features/Shop/Screens/Shop"

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator initialRouteName="Shop" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Shop" component={Shop} />
        </Stack.Navigator>
    )
}

export default ShopStack;