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
  ScrollView,
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

const AgeVeri = ({ navigation }) => {
  const [is18Selected, set18] = useState(false);

  const handleProceed = () => {
    // Navigate to Home Screen
    if (is18Selected) {
      navigation.navigate("ScreenOne");
    } else {
      Alert.alert("Wait", "Please Confirm the  agreement");
    }
  };

  const handleExit = () => {
    // Exit App
    Alert.alert(
      "To exit",
      "please press the Home button or swipe up to close the app."
    );
  };
  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={false}
      />

      <ScreenWrapper edges={["top", "bottom"]}>
        <ScrollView
          style={[
            {
              flex: 1,
              padding: height * 0.015,
            },
          ]}
        >
          {/* 🔞 */}
          <Text style={styles.title}> Age Verification</Text>

          <Text style={styles.text}>
            This application contains information, content, and products related
            to vaping. It is strictly intended{"  "}
            <Text style={{ fontWeight: "bold" }}>
              only for adults of legal smoking age
            </Text>
            (18 years or older, or 21+ where required by local law).
          </Text>

          <Text style={styles.text}>
            By continuing, you acknowledge and agree that:
          </Text>
          <Text style={[styles.text, { paddingHorizontal: height * 0.015 }]}>
            1. You are of legal age to view, purchase, and use vaping-related
            products in your country, state, or region.
          </Text>
          <Text style={[styles.text, { paddingHorizontal: height * 0.015 }]}>
            2. You understand that vaping products may contain nicotine, which
            is an addictive chemical and can be harmful to your health.
          </Text>

          <Text style={[styles.text, { paddingHorizontal: height * 0.015 }]}>
            3. This application and its developers do not promote underage
            vaping and strictly prohibit use of this application by individuals
            below the legal age.
          </Text>

          <Text style={[styles.text, { paddingHorizontal: height * 0.015 }]}>
            4. The information and content provided in this application are for
            educational and commercial purposes only and should not be
            considered as medical advice.
          </Text>

          <Text style={[styles.text, { paddingHorizontal: height * 0.015 }]}>
            5. Neither the developers nor distributors of this application shall
            be held responsible for any misuse, health risks, or consequences
            arising from the use of vaping products.
          </Text>

          <Text style={[styles.text, { paddingHorizontal: height * 0.015 }]}>
            6. You agree to comply with all applicable laws and regulations
            regarding vaping in your jurisdiction.
          </Text>

          <Text style={[styles.text, {}]}>
            If you are under the legal age, or if such content is prohibited in
            your country/region, you must exit the application immediately.
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: height * 0.02,
              alignItems: "center",
              // justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginStart: height * 0.015,
            }}
          >
            {/* <checkedBox></checkedBox> */}
            <Pressable
              onPress={() => {
                set18(!is18Selected);
              }}
            >
              <Image
                // source={require("../../../../assets/checkT.png")}
                // style={{ height: height * 0.015 }}
                source={
                  is18Selected
                    ? require("../../../../assets/checkT.png")
                    : require("../../../../assets/checkF.png")
                }
                size={height * 0.03}
                style={{
                  marginEnd: height * 0.01,
                  height: height * 0.025,
                  width: height * 0.025,
                  tintColor: colors.white,
                }}
              ></Image>
            </Pressable>
            <Text style={{ fontSize: height * 0.02, color: colors.white }}>
              I Confirm it.
            </Text>
          </View>
          <View
            style={[
              styles.btnContainer,
              { flexDirection: "row", marginBottom: height * 0.05 },
            ]}
          >
            <TouchableOpacity
              style={[styles.btn, { flex: 1 }]}
              onPress={handleProceed}
            >
              <Text style={styles.btnText}>Yes, Continue</Text>
            </TouchableOpacity>
            <View style={[{ flex: 1 }]}></View>
            <TouchableOpacity
              style={[styles.btn, styles.exitBtn, { flex: 1 }]}
              onPress={handleExit}
            >
              <Text style={styles.btnText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.dark,
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
    // fontSize: width * 0.04,
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

  text: {
    letterSpacing: 1,
    fontSize: height * 0.02,
    color: colors.grey,
    marginBottom: 12,
    // textAlign: "center",
  },
  btnContainer: {
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  exitBtn: {
    backgroundColor: "#E53935",
  },
  btnText: {
    color: "#fff",
    fontSize: height * 0.017,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AgeVeri;
