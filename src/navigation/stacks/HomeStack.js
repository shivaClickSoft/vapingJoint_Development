import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../../features/home/Screens/HomePage";
import Cart from "../../features/Cart/Screens/Cart";
import Profile from "../../features/profile/screens/Profile";
import WishList from "../../features/wishList/screens/WishList";
import Shop from "../../features/Shop/Screens/Shop";


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePage" component={HomePage} />
            {/* <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="WishList" component={WishList} />
            <Stack.Screen name="Shop" component={Shop} /> */}
        </Stack.Navigator>
    )
}

export default HomeStack;