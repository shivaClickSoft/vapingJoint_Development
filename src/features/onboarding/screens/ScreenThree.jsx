import { 
  View, 
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  Pressable
} from 'react-native'
import React from 'react'
import colors from '../../../constants/colors'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window')

const ScreenThree = ({navigation}) => {

  const handleSkipPress = () => {
    navigation.replace("Auth");
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={false}
      />

      <ScreenWrapper edges={['top', 'bottom']}>
        <View style={styles.content}>
          <Text style={styles.title}>Why Choose Vaping Joint?</Text>
          <Text style={styles.subtitle}>Experience the difference with our premium selection and service</Text>
        </View>
       
        <View style={styles.checkedSection}>
          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons name="checkmark-circle" size={Math.min(width, height) * 0.1} color={colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Premium Vapes</Text>
              <Text style={styles.featureDesc}>Top-quality devices from leading brands</Text>
            </View>
          </View>
          
          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons name="cash-outline" size={Math.min(width, height) * 0.1} color={colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Cost Effective</Text>
              <Text style={styles.featureDesc}>Great value without compromising quality</Text>
            </View>
          </View>
          
          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons name="flask-outline" size={Math.min(width, height) * 0.1} color={colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Lab Tested Products</Text>
              <Text style={styles.featureDesc}>Verified purity and safety standards</Text>
            </View>
          </View>
          
          <View style={styles.checkedBox}>
            <View style={styles.iconContainer}>
              <Ionicons name="shield-checkmark-outline" size={Math.min(width, height) * 0.1} color={colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.featureTitle}>Clean & Discreet</Text>
              <Text style={styles.featureDesc}>Professional packaging for privacy</Text>
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
          colors={['transparent', colors.dark + 'EE', colors.dark]}
          style={styles.gradientOverlay}
        />

        <View style={styles.getStartedSection}>
          <Pressable 
            style={({pressed}) => [
              styles.getStartedButton,
              { opacity: pressed ? 0.7 : 1 }
            ]}
            onPress={handleSkipPress}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.white} />
          </Pressable>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.dark
  },
  content: {
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginTop: Platform.OS === 'ios' ? height * 0.05 : height * 0.03,
    marginBottom: height * 0.02
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
    color: colors.white + 'CC',
    textAlign: "center",
    marginBottom: height * 0.02,
    fontFamily: 'KaiseiOpti_400Regular',
    maxWidth: width * 0.8,
    lineHeight: height * 0.025,
  },
  checkedSection: {
    flex: 1,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
    paddingHorizontal: width * 0.08,
    marginTop: Platform.OS === 'ios' ? 0 : height * 0.02,
    marginBottom: height * 0.02
  },
  checkedBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.015,
    backgroundColor: colors.dark + '99',
    padding: width * 0.04,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary + '33',
    minHeight: height * 0.1,
  },
  iconContainer: {
    width: width * 0.12,
    alignItems: 'center',
    marginRight: width * 0.04
  },
  textContainer: {
    flex: 1
  },
  featureTitle: {
    fontSize: width * 0.045,
    color: colors.white,
    fontWeight: "600",
    marginBottom: 4
  },
  featureDesc: {
    fontSize: width * 0.035,
    color: colors.white + '99',
    fontFamily: 'KaiseiOpti_400Regular',
    lineHeight: height * 0.02,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: height * 0.02,
    zIndex: 2
  },
  dot: {
    width: width * 0.02,
    height: width * 0.02,
    backgroundColor: colors.white + '4D',
    borderRadius: width * 0.01
  },
  dotActive: {
    backgroundColor: colors.white,
    // width: width * 0.04,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.2,
    zIndex: 1
  },
  getStartedSection: {
    alignItems: "center",
    marginBottom: Platform.OS === 'ios' ? height * 0.04 : height * 0.03,
    zIndex: 2
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
    fontWeight: '600'
  }
})

export default ScreenThree