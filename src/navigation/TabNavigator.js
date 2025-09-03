import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// navigation stacks
import HomeStack from "./stacks/HomeStack";
import CartStack from "./stacks/CartStack";
import WishListStack from "./stacks/WishListStack";
import ShopStack from "./stacks/ShopStack";
import ProfileStack from "./stacks/ProfileStack";

// colors
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Shop":
              iconName = "storefront-outline";
              break;
            case "Cart":
              iconName = "cart-outline";
              break;
            case "WishList":
              iconName = "heart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="WishList" component={WishListStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
