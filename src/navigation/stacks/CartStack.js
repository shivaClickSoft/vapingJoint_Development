import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "../../features/Cart/Screens/Cart";

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator initialRouteName="Cart" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default CartStack;