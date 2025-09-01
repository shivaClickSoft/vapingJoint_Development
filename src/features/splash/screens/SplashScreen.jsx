import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenWrapper from "../../../components/ScreenWrapper";
import colors from "../../../constants/colors";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
  // Joint animation (drop in from top)
  const jointAnimation = useRef(new Animated.Value(-height)).current;
  // Background animation (fade + zoom + drift)
  const bgAnim = useRef(new Animated.Value(0)).current;

  // Interpolations for background girl
  const girlOpacity = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const girlScale = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.05], // subtle zoom-in
  });

  const girlTranslateY = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15], // drift slightly upward
  });

  useEffect(() => {
    // Run both animations together
    Animated.parallel([
      // Girl fade-in + zoom-in + drift
      Animated.timing(bgAnim, {
        toValue: 1,
        duration: 2500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),

      // Joint dropping with smoother bounce
      Animated.spring(jointAnimation, {
        toValue: 0,
        speed: 2,
        bounciness: 20,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={Platform.OS === "android" ? false : true}
      />

      <ScreenWrapper edges={["top", "bottom"]}>
        <View style={styles.container}>
          {/* Background girl centered */}
          <Animated.Image
            style={[
              styles.vapingGirl,
              {
                opacity: girlOpacity,
                transform: [
                  { scale: girlScale },
                  { translateY: girlTranslateY },
                ],
              },
            ]}
            source={require("../../../../assets/vapingGirl.png")}
            resizeMode="contain"
          />

          {/* Animated joint drops from top */}
          <Animated.Image
            style={[
              styles.vapingJoint,
              {
                transform: [
                  { translateY: jointAnimation },
                  { rotate: "-15deg" },
                ],
              },
            ]}
            source={require("../../../../assets/vapingJoint.png")}
            resizeMode="contain"
          />
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  container: {
    flex: 1,
    justifyContent: "center", // centers girl vertically
    alignItems: "center", // centers girl horizontally
    backgroundColor: colors.dark,
  },
  vapingGirl: {
    width: width * 0.7, // max 70% screen width
    height: height * 0.9, // max 90% screen height
  },
  vapingJoint: {
    position: "absolute",
    top: height * 0.7,     // ✅ placement from top of screen
    left: width * 0.1,     // ✅ placement from left side
    width: width * 0.8,    // ✅ responsive scaling
    height: height * 0.12, // ✅ responsive height
    maxWidth: 400,
    maxHeight: 120,
  },
});

export default SplashScreen;
