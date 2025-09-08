import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../constants/colors";
// import {Ionicons} form "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomePage = () => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = height * 0.2;

  return (
    <View style={styles.container}>
      {/* StatusBar setup */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={true}
      />

      {/* Dark header background (status bar + header area) */}
      <View
        style={[
          styles.header,
          { paddingTop: insets.top, height: HEADER_HEIGHT + insets.top },
        ]}
      >
        <Image
          style={{ height: height * 0.048, width: width * 0.5 , marginStart:15}}
          source={require("../../../../assets/vapingJoint.png")}
        />
        <View style={styles.headerTop}>
          <Ionicons name="person-circle-outline" color={colors.white} size={35}></Ionicons>
        </View>

        <View style={styles.headerBottom}></View>
      </View>
      {/* Gradient background for rest of screen */}
      <LinearGradient
        colors={[
          colors.gradient1,
          colors.gradient2,
          colors.gradient3,
          colors.gradient4,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* page content */}
          <Text style={styles.text}>Main Content Area</Text>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  header: {
    backgroundColor: colors.dark,
    width: "100%",
    // justifyContent: "center",
    alignItems: "start",
    
  },
  headerText: {
    color: "#fff",
    fontSize: height * 0.028,
    fontWeight: "bold",
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },
  text: {
    color: colors.dark,
    fontSize: height * 0.025,
    fontWeight: "600",
    textAlign: "center",
    marginTop: height * 0.02,
  },
});

export default HomePage;
