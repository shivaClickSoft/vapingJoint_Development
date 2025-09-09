import React, { useRef, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  StyleSheet, 
  SafeAreaView, 
  Dimensions,
  Image,
  Pressable,
  Animated,
  ScrollView,
  Platform,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../../constants/colors';
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');
const MAX_HEADER_HEIGHT = height * 0.18;
const MIN_HEADER_HEIGHT = height * 0.10;

const HomePage = () => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  
  // Carousel data - MOVED BEFORE useEffect
  const carisol = [
    { 
      id: 1, 
      name: "MASSiVE OFFER LIMITED SALE",
      image: require('../../../../assets/carisolImage.png')
    },
    {
      id: 2, 
      name: "BIG DISCOUNT ON ALL VAPES",
      image: require('../../../../assets/carisolImage.png')
    }
  ];
  
  const statusBarHeight = Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight || 0;
  
  const headerHeight = scrollY.interpolate({
    inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
    outputRange: [MAX_HEADER_HEIGHT + statusBarHeight, MIN_HEADER_HEIGHT + statusBarHeight],
    extrapolate: 'clamp',
  });

  const topSectionOpacity = scrollY.interpolate({
    inputRange: [0, (MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) * 0.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const topSectionScale = scrollY.interpolate({
    inputRange: [0, (MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) * 0.5],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const topSectionTranslateY = scrollY.interpolate({
    inputRange: [0, (MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) * 0.5],
    outputRange: [0, -10],
    extrapolate: 'clamp',
  });

  const searchBarTranslateY = scrollY.interpolate({
    inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
    outputRange: [0, 5],
    extrapolate: 'clamp',
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (carisol.length > 1) { // Only auto-scroll if we have multiple items
        const nextIndex = (currentCarouselIndex + 1) % carisol.length;
        setCurrentCarouselIndex(nextIndex);
        
        // Scroll to the next item
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
      }
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [currentCarouselIndex, carisol.length]);

  // Sample categories
  const categories = [
    { id: 1, name: "E-LIQUID", icon: "water" },
    { id: 2, name: "VAPE KITS", icon: "hardware-chip" },
    { id: 3, name: "VAPE COILS", icon: "construct" },
    { id: 4, name: "ACCESS", icon: "extension-puzzle" },
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <LinearGradient
        colors={[colors.primary, colors.dark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0., y: 1 }}
        style={styles.carouselGradient}
      >
        <View style={styles.carouselTextContainer}>
          <Text style={styles.carouselText}>{item.name}</Text>
          <Pressable style={styles.carouselButton}>
            <Text style={styles.carouselButtonText}>SHOP NOW</Text>
          </Pressable>
        </View>

         <Image 
          source={item.image} 
          style={styles.carouselImage}
          resizeMode="cover"
        />
      </LinearGradient>
    </View>
  );

  const renderCarouselIndicators = () => (
    <View style={styles.indicatorContainer}>
      {carisol.map((_, index) => (
        <View 
          key={index} 
          style={[
            styles.indicator, 
            currentCarouselIndex === index ? styles.activeIndicator : styles.inactiveIndicator
          ]} 
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={true}
      />

      {/* Main Header with animated height */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <LinearGradient
          colors={[colors.dark, colors.dark]}
          style={StyleSheet.absoluteFill}
        />
        
        {/* Top section with logo and icons - fades out on scroll */}
        <Animated.View style={[
          styles.headerTop, 
          { 
            opacity: topSectionOpacity,
            transform: [
              { translateY: topSectionTranslateY },
              { scale: topSectionScale }
            ]
          }
        ]}>
          <Image 
            source={require('../../../../assets/vapingJoint.png')} 
            style={styles.logo}  
          />
          <View style={styles.iconRow}>
            <Pressable style={styles.iconButton}>
              <Ionicons name="cart-outline" size={22} color="#fff" />
            </Pressable>
            <Pressable style={styles.iconButton}>
              <Ionicons name="person-circle-outline" size={24} color="#fff" />
            </Pressable>
          </View>
        </Animated.View>

        {/* Search bar - moves up as header height decreases */}
        <Animated.View style={[
          styles.headerBottom, 
          { 
            transform: [{ translateY: searchBarTranslateY }]
          }
        ]}>
          <Pressable style={styles.searchButton}>
            <Ionicons name="search" size={20} color={colors.dark} />
            <Text style={styles.searchText}>Search by Brand</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>

      {/* Gradient background for rest of screen */}
      <LinearGradient
        colors={[colors.gradient1, colors.gradient2, colors.gradient3, colors.gradient4]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Scrollable content */}
          <Animated.ScrollView
            contentContainerStyle={[
              styles.scrollContent, 
              { 
                paddingTop: MAX_HEADER_HEIGHT + statusBarHeight + (Platform.OS === 'ios' ? -5 : 20)
              }
            ]}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            showsVerticalScrollIndicator={false}
          >

            {/* Carousel Section */}
            <View style={styles.carouselContainer}>
              <FlatList
                ref={flatListRef}
                data={carisol}
                renderItem={renderCarouselItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                  const contentOffsetX = e.nativeEvent.contentOffset.x;
                  const index = Math.floor(contentOffsetX / width * 0.94);
                  setCurrentCarouselIndex(index);
                }}
                onScrollToIndexFailed={() => {
                  // Fallback in case scrollToIndex fails
                  setTimeout(() => {
                    if (flatListRef.current) {
                      flatListRef.current.scrollToIndex({
                        index: currentCarouselIndex,
                        animated: true,
                      });
                    }
                  }, 100);
                }}
              />
              {renderCarouselIndicators()}
            </View>

          </Animated.ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTop: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? height * 0.05 : height * 0.04,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
  },
  logo: {
    width: width * 0.35,
    height: Platform.OS === 'ios' ? height * 0.055 : height * 0.06,
    resizeMode: 'contain',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
  },
  iconButton: {
    padding: width * 0.015,
  },
  headerBottom: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? height * 0.03 : height * 0.025,
    width: '90%',
    alignItems: 'center',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: width * 0.015,
    paddingVertical: Platform.OS === 'ios' ? height * 0.012 : height * 0.015,
    paddingHorizontal: width * 0.05,
    width: '100%',
  },
  searchText: {
    marginLeft: width * 0.03,
    fontSize: height * 0.018,
    color: colors.dark,
    fontWeight: '500',
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: width * 0.03,
    paddingBottom: 20,
  },
  carouselContainer: {
    height: height * 0.25,
    width: width * 0.94,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  carouselItem: {
    width: width * 0.94,
    height: height * 0.25,
  },
  carouselGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  carouselImage: {
    width: '40%',
    height: '100%',
    borderRadius: 8,
  },
  carouselTextContainer: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  carouselText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  carouselButton: {
    backgroundColor: colors.dark,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.white,
  },
  carouselButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: colors.white,
    width: 16,
  },
  inactiveIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default HomePage;