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

const ResetPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Add your password reset logic here
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
              <Text style={styles.title}>Reset Password</Text>

              <View style={styles.loginGifContainer}>
                {loading && (
                  <ActivityIndicator
                    size="large"
                    color={colors.white}
                    style={styles.loader}
                  />
                )}
                <Image
                  source="https://vapingjoint.com/mob-app-assets/img/signup-boy.gif"
                  style={styles.loginGif}
                  contentFit="contain"
                  cachePolicy="disk"
                  onLoadStart={() => setLoading(true)}
                  onLoadEnd={() => setLoading(false)}
                />
              </View>

              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>New Password*</Text>
                  <InputField
                    isPassword={true}
                    value={password}
                    setValue={setPassword}
                    error={false}
                    icon="lock-closed"
                    placeholder="New Password"
                  />
                </View>
         
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>
            
              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>Confirm Password*</Text>
                  <InputField
                    isPassword={true}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    error={false}
                    icon="lock-closed"
                    placeholder="Confirm Password"
                  />
                </View>
      
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>

              <LoginSignUpButton label="Reset Password" onPress={handleResetPassword} />

              <TouchableOpacity 
                style={styles.backToLoginContainer} 
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.backToLogin}>Back to Login</Text>
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
  loginGifContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.05,
  },
  loginGif: {
    height: height * 0.2,
    width: height * 0.25,
  },
  loader: {
    position: "absolute",
    zIndex: 1,
  },
  inputFormSection: {
    width: "100%",
    marginBottom: height * 0.02,
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
  backToLoginContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: height * 0.04,
  },
  backToLogin: {
    color: colors.primary,
    fontSize: height * 0.015,
    lineHeight: height * 0.02,
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default ResetPassword;