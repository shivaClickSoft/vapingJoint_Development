import React, { useState } from "react";
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
  Platform
} from "react-native";
import { Image } from "expo-image";
import colors from "../../../constants/colors";
import ScreenWrapper from "../../../components/ScreenWrapper";
import InputField from "../components/InputField";
import LoginSignUpButton from "../components/LoginSignUpButton";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ForgetEmailVerification = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
    console.log("Email:", email);
    navigation.navigate("ForgetOtpVerification");
    // Add OTP sending logic here
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
              <Text style={styles.title}>Verify Email</Text>

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
                Please enter your email address. We'll send you a verification code to reset your password.
              </Text>

              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>Email address*</Text>
                  <InputField
                    isPassword={false}
                    value={email}
                    setValue={setEmail}
                    error={false}
                    icon="mail-outline"
                    placeholder="Enter your email"
                  />
                </View>
         
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>

              <LoginSignUpButton label="Send OTP" onPress={handleSendOTP} />

              <TouchableOpacity 
                style={styles.backToLogin} 
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backToLoginText}>Back to Login</Text>
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
  inputFormSection: {
    width: "100%",
    marginBottom: height * 0.03,
  },
  oneInputForm: {
    width: "100%",
    alignItems: "flex-start",
  },
  inputLabel: {
    color: colors.primary,
    fontSize: height * 0.019,
    lineHeight: height * 0.02,
    fontWeight: "600",
    fontFamily: "KaiseiOpti_400Regular",
    textAlign: "left",
    marginBottom: height * 0.005,
  },
  erroIndicatorConatainer:{
    height: height * 0.02,
    width: "100%",
    marginTop: height * 0.005,
    marginBottom: height * 0.01
  },
  errorIndicator: {
    color: colors.red,
    fontSize: height * 0.012,
    lineHeight: height * 0.02,
    fontWeight: "600",
    textAlign: "left",
  },
  backToLogin: {
    marginTop: height * 0.04,
  },
  backToLoginText: {
    color: colors.primary,
    fontSize: height * 0.018,
    textDecorationLine: "underline",
  },
});

export default ForgetEmailVerification;