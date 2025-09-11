import { createNativeStackNavigator } from "@react-navigation/native-stack"


import Shop from "../../features/Shop/Screens/Shop"
import ProductDetails from "../../features/Shop/Screens/ProductDetails";
import ProductCategory from "../../features/Shop/Screens/ProductCategory";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator initialRouteName="Shop" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name ="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name ="ProductCategory" component={ProductCategory}/>
        
        </Stack.Navigator>
    )
}

export default ShopStack;