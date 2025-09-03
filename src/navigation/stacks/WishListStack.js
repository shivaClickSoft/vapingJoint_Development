import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

import WishList from "../../features/wishList/screens/WishList";


const Stack = createNativeStackNavigator();

const WishListStack = () => {
    return (
        <Stack.Navigator initialRouteName="WishList" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WishList" component={WishList} />
        </Stack.Navigator>
    )
}      

export default WishListStack;