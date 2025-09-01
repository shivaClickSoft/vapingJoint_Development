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

const RegisterScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone:", phone);
    navigation.navigate("MobileAndEmailOtpVerificationPage");
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
              <Text style={styles.title}>Sign Up</Text>

              <View style={styles.registerGifContainer}>
                {loading && (
                  <ActivityIndicator
                    size="large"
                    color={colors.white}
                    style={styles.loader}
                  />
                )}
                <Image
                  source="https://vapingjoint.com/mob-app-assets/img/signup-boy.gif"
                  style={styles.registerGif}
                  contentFit="contain"
                  cachePolicy="disk"
                  onLoadStart={() => setLoading(true)}
                  onLoadEnd={() => setLoading(false)}
                />
              </View>

              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>Full Name*</Text>
                  <InputField
                    isPassword={false}
                    value={name}
                    setValue={setName}
                    error={false}
                    icon="person-outline"
                    placeholder="Full Name"
                  />
                </View>
         
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>

              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>Email address*</Text>
                  <InputField
                    isPassword={false}
                    value={email}
                    setValue={setEmail}
                    error={false}
                    icon="mail-outline"
                    placeholder="Email address"
                  />
                </View>
         
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>
            
              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>Phone Number*</Text>
                  <InputField
                    isPassword={false}
                    value={phone}
                    setValue={setPhone}
                    error={false}
                    icon="call-outline"
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                  />
                </View>
         
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>

              <View style={styles.inputFormSection}>
                <View style={styles.oneInputForm}>
                  <Text style={styles.inputLabel}>Password*</Text>
                  <InputField
                    isPassword={true}
                    value={password}
                    setValue={setPassword}
                    error={false}
                    icon="lock-closed"
                    placeholder="Password"
                  />
                </View>
      
                <View style={styles.erroIndicatorConatainer}>
                  {false && <Text style={styles.errorIndicator}>Error Indicator</Text>}
                </View>
              </View>

              <LoginSignUpButton label="Sign Up" onPress={handleRegister} />

              <TouchableOpacity style={styles.switchLogin} onPress={() => navigation.navigate("Login")}>
                <View style={styles.switchLoginButton}>
                  <Text style={[styles.switchLoginButtonText, { color: colors.primary}]}>Sign In</Text>
                </View>
                <LinearGradient
                  colors={[colors.secondary, colors.primary]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }} 
                  style={styles.switchLoginButton}
                >
                  <Text style={styles.switchLoginButtonText}>Sign up</Text>
                </LinearGradient>
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
  registerGifContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.03,
  },
  registerGif: {
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
  switchLogin: {
    height: height * 0.05,
    width: "48%",
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: height * 0.05,
    borderRadius: width * 0.8,
    flexDirection: "row",
    alignItems: "center",
  },
  switchLoginButton:{
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.8,
  },
  switchLoginButtonText: {
    color: colors.white,
    fontSize: height * 0.015,
    lineHeight: height * 0.02,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default RegisterScreen;