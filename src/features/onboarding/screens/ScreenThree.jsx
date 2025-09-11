import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  Pressable,
  Modal,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../constants/colors";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
// Calculate responsive sizes based on screen dimensions
const buttonWidth = Math.min(160, width * 0.45);
const buttonHeight = Math.max(40, height * 0.05);
const fontSize = Math.max(14, width * 0.04);
const iconSize = Math.max(18, width * 0.045);
const ScreenThree = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSkipPress = () => {
    navigation.replace("Auth");
  };

  const ageVerify = ({}) => {};
  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={false}
      />

      <ScreenWrapper edges={["top", "bottom"]}>
        <View style={styles.content}>
          <Text style={styles.title}>Why Choose Vaping Joint?</Text>
          <Text style={styles.subtitle}>
            Experience the difference with our premium selection and service
          </Text>
        </View>

        <View style={styles.checkedSection}>
          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="checkmark-circle"
                size={Math.min(width, height) * 0.1}
                color={colors.primary}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Premium Vapes</Text>
              <Text style={styles.featureDesc}>
                Top-quality devices from leading brands
              </Text>
            </View>
          </View>

          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="cash-outline"
                size={Math.min(width, height) * 0.1}
                color={colors.primary}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Cost Effective</Text>
              <Text style={styles.featureDesc}>
                Great value without compromising quality
              </Text>
            </View>
          </View>

          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="flask-outline"
                size={Math.min(width, height) * 0.1}
                color={colors.primary}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Lab Tested Products</Text>
              <Text style={styles.featureDesc}>
                Verified purity and safety standards
              </Text>
            </View>
          </View>

          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="shield-checkmark-outline"
                size={Math.min(width, height) * 0.1}
                color={colors.primary}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Clean & Discreet</Text>
              <Text style={styles.featureDesc}>
                Professional packaging for privacy
              </Text>
            </View>
          </View>
        </View>

        {/* Dot indicators */}
        <View style={styles.dotContainer}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={[styles.dot, styles.dotActive]}></View>
        </View>

        <LinearGradient
          colors={["transparent", colors.dark + "EE", colors.dark]}
          style={styles.gradientOverlay}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log("age Verification dialog is closed");
            setModalVisible(!modalVisible);
          }}
        >
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.modalBackdrop}
          >
            <Pressable onPress={() => {}}>
              <View
                style={[styles.modalView, { marginHorizontal: height * 0.015 }]}
              >
                <Text
                  style={{
                    color: colors.dark,
                    fontSize: height * 0.025,
                    marginBottom: height * 0.01,
                    marginTop: height * 0.015,
                    lineHeight: height * 0.035,
                    fontFamily: "KaiseiOpti_700Bold",
                  }}
                >
                  Sign Up to
                </Text>
                <Image
                  source={require("../../../../assets/vapingJoint.png")}
                  style={[
                    {
                      height: height * 0.04,
                      width: height * 0.23,
                      resizeMode: "stretch",
                    },
                  ]}
                ></Image>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      styles.txt_agever,
                      {
                        color: colors.dark,
                        marginEnd: height * 0.01,
                      },
                    ]}
                  >
                    AGE
                  </Text>
                  <Text
                    style={[
                      styles.txt_agever,
                      {
                        color: colors.secondary,
                      },
                    ]}
                  >
                    VERIFICATION
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: height * 0.023,
                    marginTop: height * 0.02,
                    textAlign: "center",
                    color: colors.grey2,
                  }}
                >
                  The products available on Vapingjoint are age-restricted and
                  intended for adults of legal smoking age only. By entering our
                  website, you affirm that you are of legal smoking age, and you
                  agree to be Age Verified.
                </Text>

                <View style={{ flexDirection: "row" }}>
                  {/* <checkedBox></checkedBox> */}
                </View>

                <View
                  style={
                    // ({ pressed }) =>
                    [
                      styles.btnContainer,
                      {
                        // marginHorizontal: 10,
                        // width: height * 0.38,
                        marginVertical: height * 0.04,
                        height: buttonHeight,
                        // opacity: pressed && Platform.OS === "ios" ? 0.7 : 1,
                        transform: [
                          // { scale: pressed && Platform.OS === "ios" ? 0.98 : 1 },
                        ],
                      },
                    ]
                  }
                  // onPress={onPress}
                  android_ripple={{
                    color:
                      Platform.OS === "android"
                        ? colors.primary + "80"
                        : undefined,
                    borderless: false,
                    radius: buttonHeight / 1,
                  }}
                >
                  {/* Left side with text */}
                  <TouchableOpacity
                    style={[styles.left, { backgroundColor: colors.primary }]}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate("Auth");
                      console.log("I am 18");
                    }}
                  >
                    <View
                    // style={[
                    //   styles.left,
                    //   { backgroundColor: colors.secondary },
                    // ]}
                    >
                      <Text
                        style={[
                          styles.text,
                          {
                            fontSize: height * 0.023,
                            // Adjust text alignment for RTL
                            // textAlign: isRTL ? "right" : "left",
                          },
                        ]}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                      >
                        I'm 18+
                        {/* {text} */}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/* Right side with icon */}
                  <TouchableOpacity
                    style={[
                      styles.right,
                      {
                        backgroundColor: colors.white,
                      },
                    ]}
                    onPress={() => {
                      Alert.alert(
                        "Not Allowed",
                        "You are not authorised to use this app. Please exit manually."
                      );
                      console.log("I am not 18");
                    }}
                  >
                    <View
                    // style={[
                    //   styles.right,
                    //   {
                    //     backgroundColor: colors.white,
                    //   },
                    // ]}
                    >
                      {/* <Ionicons
                      name={iconName}
                      size={iconSize}
                      color={colors.white}
                    /> */}
                      <Text
                        style={{
                          fontSize: height * 0.023,
                          // fontStyle: "normal",
                          fontWeight: "900",
                          color: colors.grey2,
                          // fontFamily: "KaiseiOpti_700Bold",
                          // lineHeight: height * 0.035,
                        }}
                      >
                        I'm not
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </Pressable>
        </Modal>

        <View style={styles.getStartedSection}>
          <Pressable
            style={({ pressed }) => [
              styles.getStartedButton,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            // onPress={handleSkipPress}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.white} />
          </Pressable>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dark overlay
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    width: "80%",
    elevation: 5, // shadow for Android
  },
  content: {
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginTop: Platform.OS === "ios" ? height * 0.05 : height * 0.03,
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.07,
    color: colors.white,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: height * 0.01,
    maxWidth: width * 0.9,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: colors.white + "CC",
    textAlign: "center",
    marginBottom: height * 0.02,
    fontFamily: "KaiseiOpti_400Regular",
    maxWidth: width * 0.8,
    lineHeight: height * 0.025,
  },
  checkedSection: {
    flex: 1,
    justifyContent: Platform.OS === "ios" ? "center" : "flex-start",
    paddingHorizontal: width * 0.08,
    marginTop: Platform.OS === "ios" ? 0 : height * 0.02,
    marginBottom: height * 0.02,
  },
  checkedBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.015,
    backgroundColor: colors.dark + "99",
    padding: width * 0.04,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary + "33",
    minHeight: height * 0.1,
  },
  iconContainer: {
    width: width * 0.12,
    alignItems: "center",
    marginRight: width * 0.04,
  },
  textContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: width * 0.045,
    color: colors.white,
    fontWeight: "600",
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: width * 0.035,
    color: colors.white + "99",
    fontFamily: "KaiseiOpti_400Regular",
    lineHeight: height * 0.02,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: height * 0.02,
    zIndex: 2,
  },
  dot: {
    width: width * 0.02,
    height: width * 0.02,
    backgroundColor: colors.white + "4D",
    borderRadius: width * 0.01,
  },
  dotActive: {
    backgroundColor: colors.white,
    // width: width * 0.04,
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.2,
    zIndex: 1,
  },
  getStartedSection: {
    alignItems: "center",
    marginBottom: Platform.OS === "ios" ? height * 0.04 : height * 0.03,
    zIndex: 2,
  },
  getStartedButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    borderRadius: 30,
    minWidth: width * 0.5,
  },
  getStartedText: {
    color: colors.white,
    fontSize: width * 0.045,
    marginRight: 8,
    fontWeight: "600",
  },
  modalView: {
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        // shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: { elevation: 0 },
    }),
  },
  left: {
    flex: 1,
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  right: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    // Better text scaling
    includeFontPadding: false,
  },
  txt_agever: {
    color: colors.dark,
    fontSize: height * 0.028,
    marginBottom: height * 0.01,
    fontStyle: "bold",
    fontWeight: "700",
  },
});

export default ScreenThree;
