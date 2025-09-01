import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  useWindowDimensions,
  Platform,
  I18nManager 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const NextButton = ({ onPress, text = "Next" }) => {
  const { width, height } = useWindowDimensions();
  
  // Calculate responsive sizes based on screen dimensions
  const buttonWidth = Math.min(160, width * 0.45);
  const buttonHeight = Math.max(44, height * 0.06);
  const fontSize = Math.max(14, width * 0.04);
  const iconSize = Math.max(18, width * 0.045);
  
  // Handle RTL (Right-to-Left) layouts for languages like Arabic, Hebrew
  const isRTL = I18nManager.isRTL;
  const iconName = isRTL ? "chevron-back" : "chevron-forward";

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.container, 
        { 
          width: buttonWidth,
          height: buttonHeight,
          opacity: pressed && Platform.OS === 'ios' ? 0.7 : 1,
          transform: [{ scale: pressed && Platform.OS === 'ios' ? 0.98 : 1 }]
        }
      ]} 
      onPress={onPress}
      android_ripple={{ 
        color: Platform.OS === 'android' ? colors.primary + "80" : undefined,
        borderless: false,
        radius: buttonHeight / 2
      }}
    >
      {/* Left side with text */}
      <View style={[styles.left, { backgroundColor: colors.primary }]}>
        <Text 
          style={[
            styles.text, 
            { 
              fontSize: fontSize,
              // Adjust text alignment for RTL
              textAlign: isRTL ? 'right' : 'left'
            }
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {text}
        </Text>
      </View>

      {/* Right side with icon */}
      <View style={[styles.right, { backgroundColor: colors.dark }]}>
        <Ionicons 
          name={iconName} 
          size={iconSize} 
          color={colors.white} 
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100, // Using a high value for pill shape
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.primary,
    // Shadow for iOS
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  left: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  right: {
    width: 50, // Fixed width but will scale with button height
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
});

export default NextButton;