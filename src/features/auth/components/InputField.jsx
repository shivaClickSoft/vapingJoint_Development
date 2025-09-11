import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import colors from "../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const InputField = ({
  isPassword,
  value,
  setValue,
  placeholder,
  icon,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, error && styles.errorBorder]}>
      {/* Left Icon */}
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={Math.min(width, height) * 0.06}
          color={colors.primary}
        />
      </View>

      {/* Text Input */}
      <TextInput
        style={[styles.input, { width: isPassword ? "70%" : "85%" }]} // Moved the conditional width here
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        value={value}
        onChangeText={setValue}
        secureTextEntry={isPassword && !showPassword} // Fixed the secureTextEntry logic
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"} // Fixed the icon logic
            size={Math.min(width, height) * 0.06}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.fullwhite,
    borderRadius: width * 0.02,
    width: "100%",
    height: height * 0.065,
    overflow: "hidden",
  },
  iconContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: colors.primary,
    height: "100%",
  },
  input: {
    height: "100%",
    paddingHorizontal: width * 0.04,
    fontSize: height * 0.018,
    color: colors.dark,
  },
  errorBorder: {
    borderColor: "red",
  },
});

export default InputField;
