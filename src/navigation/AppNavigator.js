import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "expo-image";  // ✅ expo-image
import {
  useFonts,
  KaiseiOpti_400Regular,
  KaiseiOpti_500Medium,
  KaiseiOpti_700Bold,
} from "@expo-google-fonts/kaisei-opti";

import TabNavigator from "./TabNavigator";
import AuthStack from "./stacks/AuthStack";
import OnboardingStack from "./stacks/OnboardingStack";
import Splash from "../features/splash/screens/SplashScreen";

const Stack = createNativeStackNavigator();

// Cache object to track preloading status
const preloadCache = {
  gifPreloaded: false,
};

export default function AppNavigator() {
  const isAuthenticated = true;
  const isFirstLaunch = true;

  const [fontsLoaded] = useFonts({
    KaiseiOpti_400Regular,
    KaiseiOpti_500Medium,
    KaiseiOpti_700Bold,
  });

  const [isLoading, setIsLoading] = useState(true);

  // ✅ Preload assets (background GIF) with caching fix
  async function preloadAssets() {
    // If already preloaded, skip
    if (preloadCache.gifPreloaded) {
      console.log("GIF already preloaded, skipping");
      return;
    }

    try {
      await Image.prefetch("https://vapingjoint.com/mob-app-app-assets/img/login-bg.gif");
      console.log("GIF preloaded");
      preloadCache.gifPreloaded = true;
    } catch (err) {
      console.log("Image prefetch failed:", err);
    }
  }

  useEffect(() => {
    const loadApp = async () => {
      await preloadAssets(); // preload image before navigation
      setIsLoading(false);   // once done → hide splash
    };

    loadApp();
  }, []);

  // ---------------- Future Logic (keep for later use) ----------------
  // const [isLoading, setIsLoading] = useState(true);
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // const isAuthenticated = false; // later from redux / context
  //
  // useEffect(() => {
  //   const checkFirstLaunch = async () => {
  //     const hasLaunched = await Storage.getItem("isFirstLaunch");
  //
  //     if (hasLaunched === null) {
  //       // First time launch
  //       setIsFirstLaunch(true);
  //       await Storage.setItem("isFirstLaunch", false); // store as boolean
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //
  //     setIsLoading(false);
  //   };
  //
  //   checkFirstLaunch();
  // }, []);
  // -------------------------------------------------------------------

  // simulate splash delay (3s)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  if (!fontsLoaded || isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          isFirstLaunch ? "Onboarding" : isAuthenticated ? "Tabs" : "Auth"
        }
      >
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}