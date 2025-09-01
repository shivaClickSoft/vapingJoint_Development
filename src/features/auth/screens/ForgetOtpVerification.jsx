import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from "react-native";
import { Image } from "expo-image";
import colors from "../../../constants/colors";
import ScreenWrapper from "../../../components/ScreenWrapper";
import LoginSignUpButton from "../components/LoginSignUpButton";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ForgetOtpVerification = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus to next input
    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    navigation.navigate("ResetPassword");
    // Add OTP verification logic here
  };

  const handleResendOtp = () => {
    console.log("Resend OTP requested");
    // Add resend OTP logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={false}
      />

      {/* Full responsive background */}
      <Image
        source="https://vapingjoint.com/mob-app-assets/img/login-bg.gif"
        style={styles.background}
        contentFit="cover"
        cachePolicy="disk"
      />

      {/* Foreground content */}
      <ScreenWrapper edges={["top", "bottom"]}>
        <KeyboardAvoidingView 
          style={styles.keyboardAvoid}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Verify OTP</Text>

              <View style={styles.gifContainer}>
                {loading && (
                  <ActivityIndicator
                    size="large"
                    color={colors.white}
                    style={styles.loader}
                  />
                )}
                <Image
                  source="https://vapingjoint.com/mob-app-assets/img/signup-boy.gif"
                  style={styles.verificationGif}
                  contentFit="contain"
                  cachePolicy="disk"
                  onLoadStart={() => setLoading(true)}
                  onLoadEnd={() => setLoading(false)}
                />
              </View>

              <Text style={styles.description}>
                Enter the 6-digit code sent to your email address
              </Text>

              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInput}
                    value={digit}
                    onChangeText={(text) => handleOtpChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    selectTextOnFocus
                  />
                ))}
              </View>

              <LoginSignUpButton label="Verify OTP" onPress={handleVerifyOtp} />

              <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't receive the code? </Text>
                <TouchableOpacity onPress={handleResendOtp}>
                  <Text style={styles.resendLink}>Resend</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingHorizontal: height * 0.02,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    color: colors.white,
    fontSize: height * 0.05,
    fontWeight: "600",
    marginTop: height * 0.04,
    marginBottom: height * 0.03,
  },
  gifContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.05,
  },
  verificationGif: {
    height: height * 0.2,
    width: height * 0.25,
  },
  loader: {
    position: "absolute",
    zIndex: 1,
  },
  description: {
    color: colors.white,
    fontSize: height * 0.02,
    textAlign: "center",
    marginBottom: height * 0.04,
    paddingHorizontal: width * 0.05,
    lineHeight: height * 0.03,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: height * 0.08,
    gap: width * 0.02,
  },
  otpInput: {
    width: height * 0.06,
    height: height * 0.06,
    borderRadius: 8,
    backgroundColor: colors.white,
    textAlign: "center",
    fontSize: height * 0.025,
    fontWeight: "bold",
    color: colors.primary,
    borderWidth: height * 0.002,
    borderColor: colors.primary,
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: height * 0.03,
    marginBottom: height * 0.02,
  },
  resendText: {
    color: colors.white,
    fontSize: height * 0.018,
  },
  resendLink: {
    color: colors.primary,
    fontSize: height * 0.018,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  backButton: {
    marginTop: height * 0.15,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: height * 0.018,
    textDecorationLine: "underline",
  },
});

export default ForgetOtpVerification;