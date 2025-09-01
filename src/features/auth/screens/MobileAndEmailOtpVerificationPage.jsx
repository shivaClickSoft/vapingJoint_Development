import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
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
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const MobileAndEmailOtpVerificationPage = ({ navigation }) => {
  const [mobileOtp, setMobileOtp] = useState(["", "", "", "", "", ""]);
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const mobileInputRefs = useRef([]);
  const emailInputRefs = useRef([]);

  const handleOtpChange = (text, index, type) => {
    if (type === 'mobile') {
      const newOtp = [...mobileOtp];
      newOtp[index] = text;
      setMobileOtp(newOtp);

      // Auto focus to next input
      if (text && index < 5) {
        mobileInputRefs.current[index + 1].focus();
      }
    } else {
      const newOtp = [...emailOtp];
      newOtp[index] = text;
      setEmailOtp(newOtp);

      // Auto focus to next input
      if (text && index < 5) {
        emailInputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index, type) => {
    if (e.nativeEvent.key === "Backspace") {
      if (type === 'mobile') {
        if (!mobileOtp[index] && index > 0) {
          mobileInputRefs.current[index - 1].focus();
        }
      } else {
        if (!emailOtp[index] && index > 0) {
          emailInputRefs.current[index - 1].focus();
        }
      }
    }
  };

  const handleVerifyOtp = () => {
    const enteredMobileOtp = mobileOtp.join("");
    const enteredEmailOtp = emailOtp.join("");
    console.log("Mobile OTP:", enteredMobileOtp);
    console.log("Email OTP:", enteredEmailOtp);
    // Add OTP verification logic here
  };

  const handleResendOtp = (type) => {
    console.log(`Resend ${type} OTP requested`);
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
              <View style={styles.header}>
                <TouchableOpacity 
                  style={styles.backButton} 
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons name="arrow-back" size={24} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.title}>Verify OTP</Text>
                <View style={styles.backButtonPlaceholder} />
              </View>

              <View style={styles.iconContainer}>
                <Ionicons name="shield-checkmark" size={height * 0.1} color={colors.primary} />
              </View>

              <Text style={styles.description}>
                Enter the 6-digit verification codes sent to your mobile number and email address
              </Text>

              {/* Mobile OTP Section */}
              <View style={styles.otpSection}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="phone-portrait" size={20} color={colors.primary} />
                  <Text style={styles.sectionTitle}>Mobile Verification Code</Text>
                </View>
                <View style={styles.otpContainer}>
                  {mobileOtp.map((digit, index) => (
                    <TextInput
                      key={index}
                      style={styles.otpInput}
                      value={digit}
                      onChangeText={(text) => handleOtpChange(text, index, 'mobile')}
                      onKeyPress={(e) => handleKeyPress(e, index, 'mobile')}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={(ref) => (mobileInputRefs.current[index] = ref)}
                      selectTextOnFocus
                    />
                  ))}
                </View>
                <View style={styles.resendContainer}>
                  <Text style={styles.resendText}>Didn't receive the code? </Text>
                  <TouchableOpacity onPress={() => handleResendOtp('mobile')}>
                    <Text style={styles.resendLink}>Resend SMS</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Email OTP Section */}
              <View style={styles.otpSection}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="mail" size={20} color={colors.primary} />
                  <Text style={styles.sectionTitle}>Email Verification Code</Text>
                </View>
                <View style={styles.otpContainer}>
                  {emailOtp.map((digit, index) => (
                    <TextInput
                      key={index}
                      style={styles.otpInput}
                      value={digit}
                      onChangeText={(text) => handleOtpChange(text, index, 'email')}
                      onKeyPress={(e) => handleKeyPress(e, index, 'email')}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={(ref) => (emailInputRefs.current[index] = ref)}
                      selectTextOnFocus
                    />
                  ))}
                </View>
                <View style={styles.resendContainer}>
                  <Text style={styles.resendText}>Didn't receive the code? </Text>
                  <TouchableOpacity onPress={() => handleResendOtp('email')}>
                    <Text style={styles.resendLink}>Resend Email</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <LoginSignUpButton label="Verify OTP" onPress={handleVerifyOtp} />

              <Text style={styles.note}>
                Please check both your SMS messages and email inbox for the verification codes
              </Text>
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
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.03,
  },
  backButton: {
    padding: 10,
  },
  backButtonPlaceholder: {
    width: 44, // Same as back button for balance
  },
  title: {
    color: colors.white,
    fontSize: height * 0.035,
    fontWeight: "600",
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.04,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
  },
  description: {
    color: colors.white,
    fontSize: height * 0.02,
    textAlign: "center",
    marginBottom: height * 0.05,
    lineHeight: height * 0.03,
  },
  otpSection: {
    width: "100%",
    marginBottom: height * 0.04,
    backgroundColor: 'rgba(255,255,255,0.08)',
    padding: 20,
    borderRadius: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    justifyContent: 'center',
  },
  sectionTitle: {
    color: colors.primary,
    fontSize: height * 0.02,
    fontWeight: "600",
    marginLeft: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: height * 0.02,
  },
  otpInput: {
    width: height * 0.055,
    height: height * 0.055,
    borderRadius: 8,
    backgroundColor: colors.white,
    textAlign: "center",
    fontSize: height * 0.022,
    fontWeight: "bold",
    color: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  resendText: {
    color: colors.white,
    fontSize: height * 0.016,
  },
  resendLink: {
    color: colors.primary,
    fontSize: height * 0.016,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  note: {
    color: colors.white,
    fontSize: height * 0.015,
    textAlign: "center",
    marginTop: height * 0.03,
    fontStyle: 'italic',
    opacity: 0.8,
  },
});

export default MobileAndEmailOtpVerificationPage;