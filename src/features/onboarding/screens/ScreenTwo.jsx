import 
{ 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Pressable
} from 'react-native'
import colors from '../../../constants/colors'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from "@expo/vector-icons";
import NextButton from '../../../components/NextButton';



const { width, height } = Dimensions.get('window')

const ScreenTwo = ({ navigation }) => {

  const handleNextPress = () => {
    navigation.navigate("ScreenThree");
  };

  const handleSkipPress = () => {
    navigation.replace("Auth");
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={false} // explicit for Android
      />

      <ScreenWrapper edges={['top', 'bottom']}>
        <View style={styles.content}>
          <Text style={styles.title}> From Vape Devices to CBD & More</Text>
          <Text style={styles.subtitle}>Discover disposables, eliquids, nicotine salts, CBD oils, skincare, and accessories.</Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.upperRow}>
            <View style={styles.oneBox}>
              <Image source={require('../../../../assets/vapeDevice.png')} style={styles.image} />
              <Text style={styles.imageText}>Vape Devices</Text>
            </View>
            <View style={styles.oneBox}>
              <Image source={require('../../../../assets/eLequid.png')} style={styles.image} />
              <Text style={styles.imageText}>E-Liquids</Text>
            </View>
          </View>

          <View style={[  styles.upperRow, { marginTop: height * 0.01 }]}>
            <View style={styles.oneBox}>
              <Image source={require('../../../../assets/nickotin.png')} style={styles.image} />
              <Text style={styles.imageText}>Nicotine Pouches</Text>
            </View>
            <Pressable style={styles.more}>
              <LinearGradient
                colors={[colors.secondary, colors.primary]}
                style={styles.gradient}
              >
                <View style={styles.moreContainer}>
                  <Text style={styles.moreText}>More</Text>
                  <Ionicons name="chevron-forward" size={20} color={colors.white} />
                </View>

              </LinearGradient>
            </Pressable>
          </View>


        </View>


        <View style={styles.dotAndNext}>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
            <View style={[styles.dot, styles.dotActive]}></View>
            <View style={styles.dot}></View>
          </View>
          <NextButton onPress={handleNextPress} />
        </View>

        <View style={styles.skipButtonSection}>
          <Pressable 
            style={({pressed}) => [
              styles.skipButtonContainer,
              { opacity: pressed ? 0.7 : 1 }
            ]}
            onPress={handleSkipPress}
          >
            <Text style={styles.skipButton}>Skip</Text>
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
    backgroundColor: colors.dark,
    paddingHorizontal: width * 0.05
  },
  content: {
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.05 
  },
  title:{
    fontSize: width * 0.08, // Responsive font size
    color: colors.white,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: height * 0.03,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto', // Consistent font
  },
  subtitle: {
    fontSize: width * 0.040, // Responsive font size
    color: colors.white,
    textAlign: "center",
    lineHeight: height * 0.03,
    fontFamily: 'KaiseiOpti_400Regular', // KaiseiOpti font applied here
  },
  imageContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height * 0.01 // Reduced margin to make more space for larger image
  },
  upperRow:{
    flexDirection: "row",
    gap: width * 0.02,
  },
  oneBox:{
    // width:,
    // height: 133,
    // borderRadius: 15,
    // backgroundColor: colors.white,
    // alignItems: "center",
    // justifyContent: "center"
    height: height * 0.2,
    width: width * 0.35,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.006,
    borderRadius: 15
  },
  more:{
     height: height * 0.2,
    width: width * 0.35,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.006,
    borderRadius: 15
  },
  gradient:{
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13
  },
  image:{
    width: "80%",
    height: "80%",
    borderRadius: 15
  },
  imageText:{
    fontSize: width * 0.02,
    color: colors.dark,
    textAlign: "center",
    marginTop: height * 0.01,
    fontFamily: 'KaiseiOpti_400Regular',
  },
  moreContainer: {
    flexDirection: "row",
    alignItems: "center", // vertically center text + icon
    justifyContent: "center", // center horizontally
    marginTop: 10, // optional spacing
  },
  moreText: {
    fontSize: width * 0.04,
    color: colors.white,
    fontWeight: "500",
    marginRight: 5, // spacing between text and icon
  },
  dotAndNext:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: width * 0.05,
      marginBottom: height * 0.03
    },
    dotContainer:{
      flexDirection: 'row',
      gap: 8
    },
    dot:{
      width: width * 0.02,
      height: width * 0.02,
      backgroundColor: colors.white + '4D', // 30% opacity
      borderRadius: width * 0.01
    },
    dotActive: {
      backgroundColor: colors.white,
    },
    skipButtonSection: {
      alignItems: "center",
      marginBottom: height * 0.03
    },
    skipButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    skipButton: {
      color: colors.white,
      fontSize: width * 0.045,
      marginRight: 5
    },
     skipButtonSection: {
        alignItems: "center",
        marginBottom: height * 0.03
      },
      skipButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      skipButton: {
        color: colors.white,
        fontSize: width * 0.045,
        marginRight: 5
      }

})

export default ScreenTwo 