import { createNativeStackNavigator } from "@react-navigation/native-stack"


import Shop from "../../features/Shop/Screens/Shop"
import ProductDetails from "../../features/Shop/Screens/ProductDetails";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator initialRouteName="Shop" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name ="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
    )
}

export default ShopStack;