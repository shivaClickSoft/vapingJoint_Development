import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../../constants/colors';

const { width, height } = Dimensions.get('window');

const LoginSignUpButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8} // ✅ nicer press effect
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: height * 0.054,
    // borderRadius: width * 0.025,
    overflow: 'hidden', // ✅ ensure gradient respects border radius
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.8, // same as container
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    fontSize: height * 0.02,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});

export default LoginSignUpButton;
