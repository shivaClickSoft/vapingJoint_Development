import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Pressable,
  Dimensions
} from "react-native";
import ScreenWrapper from "../../../components/ScreenWrapper";
import colors from "../../../constants/colors";
import NextButton from "../../../components/NextButton";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ScreenOne = ({ navigation }) => {

  const handleNextPress = () => {
    navigation.navigate("ScreenTwo");
  };

  const handleSkipPress = () => {
    navigation.replace("Auth");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar: consistent across Android & iOS */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={false} // explicit for Android
      />

      {/* Screen Wrapper handles SafeArea + KeyboardAvoiding */}
      <ScreenWrapper edges={["top", "bottom"]}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.brandName}>Vaping Joint</Text>
          <Text style={styles.subtitle}>Your all-in-one destination for premium vaping, CBD, and accessories.</Text>
        </View>

        {/* image section - Increased size */}
        <View style={styles.imageContainer}>
          <Image 
            source={require("../../../../assets/vape.png")} 
            style={styles.vapeImage} 
            resizeMode="contain"
          />
        </View>
        
        {/* dot indicator and next button */}
        <View style={styles.dotAndNext}>
          <View style={styles.dotContainer}>
            <View style={[styles.dot, styles.dotActive]}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
          </View>
          <NextButton onPress={handleNextPress} />
        </View>

        <View style={styles.skipButtonSection}>
          <Pressable 
            style={({pressed}) => [
              styles.skipButtonContainer,
              { opacity: pressed ? 0.7 : 1 }
            ]}
            onPress={handleSkipPress}
          >
            <Text style={styles.skipButton}>Skip</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.white} />
          </Pressable>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingHorizontal: width * 0.05 // Responsive horizontal padding
  },
  content: {
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.05 // Responsive top margin
  },
  title: {
    fontSize: width * 0.08, // Responsive font size
    color: colors.white,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: height * 0.001,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto', // Consistent font
  },
  brandName: {
    fontSize: width * 0.11, // Responsive font size
    color: colors.white,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: height * 0.03,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto', // Consistent font
  },
  subtitle: {
    fontSize: width * 0.040, // Responsive font size
    color: colors.white,
    textAlign: "center",
    lineHeight: height * 0.03,
    fontFamily: 'KaiseiOpti_400Regular', // KaiseiOpti font applied here
  },
  imageContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height * 0.01 // Reduced margin to make more space for larger image
  },
  vapeImage:{
    width: width * 0.95, // Increased from 0.8 to 0.95 (95% of screen width)
    height: height * 0.45, // Increased from 0.35 to 0.45 (45% of screen height)
  },
  dotAndNext:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.03
  },
  dotContainer:{
    flexDirection: 'row',
    gap: 8
  },
  dot:{
    width: width * 0.02,
    height: width * 0.02,
    backgroundColor: colors.white + '4D', // 30% opacity
    borderRadius: width * 0.01
  },
  dotActive: {
    backgroundColor: colors.white,
  },
  skipButtonSection: {
    alignItems: "center",
    marginBottom: height * 0.03
  },
  skipButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  skipButton: {
    color: colors.white,
    fontSize: width * 0.045,
    marginRight: 5
  }
});

export default ScreenOne;