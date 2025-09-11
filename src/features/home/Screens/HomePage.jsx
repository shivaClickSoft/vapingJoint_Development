import React, { useRef, useState, useEffect } from "react";
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
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import OneProduct from "../components/oneProduct";
import CustomDropdown from "../components/customDropdown";

const { width, height } = Dimensions.get("window");
const MAX_HEADER_HEIGHT = height * 0.18;
const MIN_HEADER_HEIGHT = height * 0.1;

// const cateList = Array.from({ length: 5 }).map((_, j) => ({
//   id: j,
//   catName: ``,
// }));

const HomePage = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const carisol = [
    {
      id: 1,
      name: "MASSiVE OFFER LIMITED SALE",
      image: require("../../../../assets/carisolImage.png"),
    },
    {
      id: 2,
      name: "BIG DISCOUNT ON ALL VAPES",
      image: require("../../../../assets/vape.png"),
    },
  ];

  const statusBarHeight =
    Platform.OS === "ios" ? insets.top : StatusBar.currentHeight || 0;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
    outputRange: [
      MAX_HEADER_HEIGHT + statusBarHeight,
      MIN_HEADER_HEIGHT + statusBarHeight,
    ],
    extrapolate: "clamp",
  });

  const topSectionOpacity = scrollY.interpolate({
    inputRange: [0, (MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) * 0.5],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const topSectionScale = scrollY.interpolate({
    inputRange: [0, (MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) * 0.5],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });

  const topSectionTranslateY = scrollY.interpolate({
    inputRange: [0, (MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) * 0.5],
    outputRange: [0, -10],
    extrapolate: "clamp",
  });

  const searchBarTranslateY = scrollY.interpolate({
    inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
    outputRange: [0, 5],
    extrapolate: "clamp",
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (carisol.length > 1) {
        const nextIndex = (currentCarouselIndex + 1) % carisol.length;
        setCurrentCarouselIndex(nextIndex);

        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentCarouselIndex, carisol.length]);

  const flavours = [
    {
      id: 1,
      name: "Menthol E-Liquid",
      icon: require("../../../../assets/flavours/image1.png"),
    },
    {
      id: 2,
      name: "BlueBerry E-Liquid",
      icon: require("../../../../assets/flavours/image2.png"),
    },
    {
      id: 3,
      name: "Strawberry E-Liquid",
      icon: require("../../../../assets/flavours/image3.png"),
    },
    {
      id: 4,
      name: "Grapes E-Liquid",
      icon: require("../../../../assets/flavours/image4.png"),
    },
    {
      id: 5,
      name: "Raspberry E-Liquid",
      icon: require("../../../../assets/flavours/image5.png"),
    },
    ,
    {
      id: 6,
      name: "Tobacco E-Liquid",
      icon: require("../../../../assets/flavours/image6.png"),
    },
  ];
  const blogs = [
    {
      id: 1,
      name: "Important Pod Safety Tips",
      icon: require("../../../../assets/blog/imgg1.png"),
      description:
        " Lorem Impsum a demo text written to desribe the content in the style",
    },
    {
      id: 2,
      name: "10 facts about vaping",
      icon: require("../../../../assets/blog/imgg2.png"),
      description:
        " Lorem Impsum a demo text written to desribe the content in the style",
    },
    {
      id: 3,
      name: "The best E-Liquid Prices",
      icon: require("../../../../assets/blog/imgg3.png"),
      description:
        " Lorem Impsum a demo text written to desribe the content in the style",
    },
    {
      id: 4,
      name: "Top 5 Best Pod System",
      icon: require("../../../../assets/blog/imgg4.png"),
      description:
        " Lorem Impsum a demo text written to desribe the content in the style",
    },
  ];
  const explore = [
    {
      id: 1,
      name: "Menthol E-Liquid",
      icon: require("../../../../assets/explore/img1.png"),
    },
    {
      id: 2,
      name: "BlueBerry E-Liquid",
      icon: require("../../../../assets/explore/img2.png"),
    },
    {
      id: 3,
      name: "BlueBerry E-Liquid",
      icon: require("../../../../assets/explore/img3.png"),
    },
    {
      id: 4,
      name: "BlueBerry E-Liquid",
      icon: require("../../../../assets/explore/img4.png"),
    },
    {
      id: 5,
      name: "BlueBerry E-Liquid",
      icon: require("../../../../assets/explore/img5.png"),
    },
  ];
  const categories = [
    {
      id: 1,
      name: "E-LIQUID",
      icon: require("../../../../assets/categories/8.png"),
    },
    {
      id: 2,
      name: "VAPE KITS",
      icon: require("../../../../assets/categories/7.png"),
    },
    {
      id: 3,
      name: "VAPE COILS",
      icon: require("../../../../assets/categories/6.png"),
    },
    {
      id: 4,
      name: "ACCESSORIES",
      icon: require("../../../../assets/categories/5.png"),
    },
    {
      id: 5,
      name: "DISPOSABLE VAPES",
      icon: require("../../../../assets/categories/4.png"),
    },
    {
      id: 6,
      name: "MULTIBUYS",
      icon: require("../../../../assets/categories/3.png"),
    },
    {
      id: 7,
      name: "CLEARANCE SALE",
      icon: require("../../../../assets/categories/2.png"),
    },
    {
      id: 8,
      name: "DEALS & OFFERS",
      icon: require("../../../../assets/categories/1.png"),
    },
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <LinearGradient
        colors={[colors.primary, colors.dark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.carouselGradient}
      >
        <View style={styles.carouselTextContainer}>
          <Text style={[styles.carouselText, { fontSize: width * 0.06 }]}>
            {item.name}
          </Text>
          <Pressable style={styles.carouselButton}>
            <Text style={styles.carouselButtonText}>SHOP NOW</Text>
          </Pressable>
        </View>

        <Image
          source={item.image}
          style={styles.carouselImage}
          resizeMode="contain"
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
            currentCarouselIndex === index
              ? styles.activeIndicator
              : styles.inactiveIndicator,
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

      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          },
        ]}
      >
        <LinearGradient
          colors={[colors.dark, colors.dark]}
          style={[StyleSheet.absoluteFill, {}]}
        />

        <Animated.View
          style={[
            styles.headerTop,
            {
              opacity: topSectionOpacity,
              transform: [
                { translateY: topSectionTranslateY },
                { scale: topSectionScale },
              ],
            },
          ]}
        >
          <Pressable style={styles.iconButton}>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
          </Pressable>
          <Image
            source={require("../../../../assets/vapingJoint.png")}
            style={styles.logo}
          />
          <View style={styles.iconRow}>
            <Pressable style={styles.iconButton}>
              <Ionicons name="cart-outline" size={22} color="#fff" />
            </Pressable>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.headerBottom,
            {
              transform: [{ translateY: searchBarTranslateY }],
            },
          ]}
        >
          <Pressable style={styles.searchButton}>
            <Ionicons name="search" size={20} color={colors.dark} />
            <Text style={styles.searchText}>Search by Brand</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>

      <LinearGradient
        colors={[
          colors.gradient1,
          colors.gradient2,
          colors.gradient3,
          colors.gradient4,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <Animated.ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              {
                paddingTop:
                  MAX_HEADER_HEIGHT +
                  statusBarHeight +
                  (Platform.OS === "ios" ? -5 : 10),
              },
            ]}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.carouselContainer}>
              <FlatList
                ref={flatListRef}
                data={carisol}
                renderItem={renderCarouselItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(e) => {
                  const contentOffsetX = e.nativeEvent.contentOffset.x;
                  const index = Math.floor((contentOffsetX / width) * 0.94);
                  setCurrentCarouselIndex(index);
                }}
                onScrollToIndexFailed={() => {
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

            {/* Horizontal scrollable categories */}
            <View style={styles.categoryWrapper}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryContainer}
              >
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductCategory", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <View style={styles.categoryItem}>
                      {/* <Ionicons
                      name={category.icon}
                      size={55}
                      color={colors.primary}
                    /> */}
                      {/* Dev */}
                      <Image
                        source={category.icon}
                        style={{
                          height: height * 0.1,
                          width: height * 0.2,
                          resizeMode: "contain",
                        }}
                      />
                      <Text style={styles.categoryText}>{category.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Recently Viewed */}
            <LinearGradient
              colors={[
                // colors.secondary,
                // colors.primary,
                "#D31174",
                "#fe0083ff",
                // colors.gradient3,
                // colors.gradient4,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.recentlyViewed, { maxWidth: height * 0.2 }]}
            >
              <Text
                style={[
                  {
                    fontSize: height * 0.022,
                    color: colors.white,
                    fontWeight: "800",
                    // fontFamily: "KaiseiOpti_400Regular",
                  },
                ]}
              >
                Recently Viewed
              </Text>
            </LinearGradient>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.productWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductDetails", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <OneProduct isNew={false} />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            {/* New Arrivals */}
            <View
              style={[
                {
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  fontSize: height * 0.022,
                  justifyContent: "space-between",
                },
              ]}
            >
              <LinearGradient
                colors={["#D31174", "#fe0083ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.recentlyViewed,
                  {
                    width: height * 0.2, // width fix rakhna ok hai
                    maxWidth: height * 0.23,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 8,
                    // ❌ height mat do
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: height * 0.022,
                    fontWeight: "800",
                    color: colors.fullwhite,
                    letterSpacing: 2,
                    flexWrap: "wrap", // ensure wrapping
                  }}
                >
                  New Arrivals
                </Text>
              </LinearGradient>

              <CustomDropdown
                placeholder="select"
                data={[
                  { label: "E-liquid", value: 1 },
                  { label: "VAPE KITS", value: 2 },
                  { label: "VAPE COILS", value: 3 },
                  { label: "ACCESSORIES", value: 4 },
                  { label: "DISPOSABLE VAPES", value: 5 },
                  { label: "MULTIBUYS", value: 6 },
                ]}
                onChange={(val) => console.log("picked", val)}
              />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.productWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductDetails", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <OneProduct />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            {/* New Arrivals */}
            <View
              style={[
                {
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  // height: height * 0.05,
                  justifyContent: "space-between",
                },
              ]}
            >
              <LinearGradient
                colors={["#D31174", "#fe0083ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.recentlyViewed,
                  {
                    width: height * 0.2, // width fix rakhna ok hai
                    maxWidth: height * 0.23,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 8,
                    // ❌ height mat do
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: height * 0.022,
                    fontWeight: "800",
                    color: colors.fullwhite,
                    letterSpacing: 0,
                    flexWrap: "wrap", // ensure wrapping
                  }}
                >
                  E-Liquid Brand Collection
                </Text>
              </LinearGradient>

              <CustomDropdown
                placeholder="select"
                data={[
                  { label: "CloudAlchemy", value: 10 },
                  { label: "FrostFuel", value: 20 },
                  { label: "VelvetVapor", value: 30 },
                  { label: "DripVerse", value: 40 },
                  { label: "NectarNova", value: 50 },
                ]}
                onChange={(val) => console.log("picked", val)}
              />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.productWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductDetails", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <OneProduct />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            {/* Deals of the Day */}

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[colors.dealsGradient1, colors.dealsGradient2]}
              style={[{ borderRadius: 20, paddingStart: 10, paddingEnd: 10 }]}
            >
              <View
                style={[
                  {
                    flexDirection: "row",
                    // justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    height: height * 0.05,
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: height * 0.02,
                      color: colors.fullwhite,
                      // marginStart: 10,
                      fontWeight: "700",
                    },
                  ]}
                >
                  DEALS OF THE DAY
                </Text>
                <Text
                  style={[
                    {
                      fontSize: height * 0.02,
                      fontWeight: "800",
                      color: colors.fullwhite,
                      // marginStart: 10,
                    },
                  ]}
                >
                  1 D 15 Hr 30 Min
                </Text>
                {/* <CustomDropdown
                  placeholder="Choose nicotine"
                  options={[
                    { label: "10 mg", value: 10 },
                    { label: "20 mg", value: 20 },
                    { label: "30 mg", value: 30 },
                  ]}
                  onChange={(val) => console.log("picked", val)}
                /> */}
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.recentlyViewedList}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <View key={index} style={styles.productWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Shop", {
                          screen: "ProductDetails", // nested screen ka naam
                          // params: {
                          //   // agar kuch data bhejna ho to yaha
                          //   categoryId: 5,
                          // },
                        });
                      }}
                    >
                      <OneProduct />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </LinearGradient>

            {/* New Arrivals */}
            <View
              style={[
                {
                  marginTop: 20,
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  // height: height * 0.05,
                  justifyContent: "space-between",
                },
              ]}
            >
              <LinearGradient
                colors={["#D31174", "#fe0083ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.recentlyViewed,
                  {
                    width: height * 0.2, // width fix rakhna ok hai
                    maxWidth: height * 0.23,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 8,
                    // ❌ height mat do
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: height * 0.018,
                    fontWeight: "800",
                    color: colors.fullwhite,
                    letterSpacing: 0,
                    flexWrap: "wrap", // ensure wrapping
                  }}
                >
                  VAPING PRODUCTS & HARDWARE
                </Text>
              </LinearGradient>

              <CustomDropdown
                placeholder="select"
                data={[
                  { label: "IronPulse", value: 10 },
                  { label: "VortexGear", value: 20 },
                  { label: "TitanVape", value: 30 },
                  { label: "IgnisCore", value: 40 },
                  { label: "AeroForge", value: 50 },
                ]}
                onChange={(val) => console.log("picked", val)}
              />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.productWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductDetails", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <OneProduct />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            {/* Top Selling Flavours */}
            <View style={{ position: "relative" }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#01ccac", colors.primary]}
                style={[
                  {
                    // justifyContent:"flex-start",
                    // alignItems:"stretch",
                    height: height * 0.15,
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingStart: 10,
                    paddingEnd: 10,
                    marginBottom: 100,
                  },
                ]}
              >
                <View
                  style={[
                    {
                      flexDirection: "row",
                      // justifyContent: "center",
                      // alignItems: "center",
                      flex: 1,
                      marginTop: 10,
                      height: height * 0.05,
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text
                    style={[
                      {
                        // alignSelf:"center",
                        fontSize: width * 0.05,
                        color: colors.fullwhite,
                        // marginStart: 10,
                        fontWeight: "700",
                        width: "100%",
                        textAlign: "center",
                      },
                    ]}
                  >
                    TOP SELLING FRAVOURS
                  </Text>
                </View>
              </LinearGradient>
              <ScrollView
                style={{ position: "absolute", top: 32 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.recentlyViewedList}
              >
                {flavours.map((flavours) => (
                  <TouchableOpacity
                    key={flavours.id}
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductCategory", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <View
                      style={[
                        styles.productWrapper,
                        {
                          flexDirection: "column",
                          backgroundColor: colors.fullwhite,
                          borderRadius: 15,
                          width: width * 0.3,
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 10,
                        },
                      ]}
                    >
                      <Image
                        style={[
                          {
                            height: height * 0.12,
                            width: width * 0.275,
                            // borderWidth: 1,
                            margin: 5,
                            resizeMode: "stretch",
                            borderRadius: 10,
                            marginBottom: height * 0.01,
                          },
                        ]}
                        source={flavours.icon}
                        // source={require("../../../../assets/vapeDevice.png")}
                      ></Image>
                      <Text
                        style={{
                          color: colors.dark,
                          marginBottom: height * 0.01,
                          fontSize: height * 0.015,
                        }}
                      >
                        {flavours.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            {/* Top Rated Product */}

            <LinearGradient
              colors={["#D31174", "#fe0083ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.recentlyViewed,
                {
                  width: height * 0.2, // width fix rakhna ok hai
                  maxWidth: height * 0.23,
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 8,
                  // ❌ height mat do
                },
              ]}
            >
              <Text
                style={{
                  fontSize: height * 0.022,
                  fontWeight: "800",
                  color: colors.fullwhite,
                  letterSpacing: 2,
                  flexWrap: "wrap", // ensure wrapping
                }}
              >
                Top Rated Products
              </Text>
            </LinearGradient>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.productWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Shop", {
                        screen: "ProductDetails", // nested screen ka naam
                        // params: {
                        //   // agar kuch data bhejna ho to yaha
                        //   categoryId: 5,
                        // },
                      });
                    }}
                  >
                    <OneProduct />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <Image
              style={{ alignSelf: "center", borderRadius: 5 }}
              source={require("../../../../assets/video.png")}
            ></Image>
            {/* Explore More */}

            <LinearGradient
              colors={[
                colors.secondary,
                colors.primary,

                // colors.gradient3,
                // colors.gradient4,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.recentlyViewed,
                { marginTop: 20, maxWidth: height * 0.18 },
              ]}
            >
              <Text style={[{ fontSize: 18, color: colors.fullwhite }]}>
                Explore More
              </Text>
            </LinearGradient>

            <ScrollView
              style={{ top: 1 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {explore.map((explore) => (
                <TouchableOpacity
                  key={explore.id}
                  onPress={() => {
                    navigation.navigate("Shop", {
                      screen: "ProductCategory", // nested screen ka naam
                      // params: {
                      //   // agar kuch data bhejna ho to yaha
                      //   categoryId: 5,
                      // },
                    });
                  }}
                >
                  <View
                    style={[
                      styles.productWrapper,
                      {
                        // flexDirection: "column",
                        // backgroundColor: colors.fullwhite,
                        // borderRadius: 15,
                        // width: width * 0.3,
                        // alignItems: "center",
                        // justifyContent: "center",
                        // margin: 10,
                      },
                    ]}
                  >
                    <Image
                      style={[
                        {
                          borderColor: colors.fullwhite,
                          borderWidth: 3,
                          height: height * 0.14,
                          width: width * 0.275,
                          // borderWidth: 1,
                          margin: 3,
                          resizeMode: "stretch",
                          borderRadius: 10,
                          // marginBottom: height * 0.01,
                        },
                      ]}
                      source={explore.icon}
                      // source={require("../../../../assets/vapeDevice.png")}
                    ></Image>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* From our Blog */}

            <LinearGradient
              colors={[
                colors.secondary,
                colors.primary,

                // colors.gradient3,
                // colors.gradient4,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.recentlyViewed,
                {
                  marginTop: 20,
                  maxWidth: height * 0.18,
                  color: colors.fullwhite,
                },
              ]}
            >
              <Text style={[{ fontSize: 18, color: colors.fullwhite }]}>
                From Our Blog
              </Text>
            </LinearGradient>

            {/* </View> */}
            <ScrollView
              style={{ top: 2 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentlyViewedList}
            >
              {blogs.map((blogs) => (
                <View
                  key={blogs.id}
                  style={[
                    styles.productWrapper,
                    {
                      flexDirection: "column",
                      backgroundColor: colors.fullwhite,
                      borderRadius: 15,
                      width: width * 0.5,
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 10,
                    },
                  ]}
                >
                  <Image
                    style={[
                      {
                        height: height * 0.2,
                        width: width * 0.48,
                        // borderWidth: 1,
                        margin: 5,
                        resizeMode: "stretch",
                        borderRadius: 10,
                        marginBottom: height * 0.01,
                      },
                    ]}
                    source={blogs.icon}
                    // source={require("../../../../assets/vapeDevice.png")}
                  ></Image>
                  <Text
                    style={{
                      alignSelf: "flex-start",
                      color: colors.dark,
                      marginLeft: 7,
                      // marginBottom: height * 0.02,
                      fontWeight: "900",
                      fontStyle: "bold",
                      fontSize: width * 0.04,
                    }}
                  >
                    {blogs.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      alignSelf: "flex-start",
                      color: colors.grey,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: height * 0.02,
                      fontWeight: "900",
                      fontStyle: "bold",
                      fontSize: width * 0.03,
                    }}
                  >
                    {blogs.description}
                  </Text>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.dark,
                        marginLeft: 15,
                        marginBottom: height * 0.02,
                        fontWeight: "700",
                        // fontStyle: "bold",
                        fontSize: width * 0.04,
                      }}
                    >
                      Read More
                    </Text>
                    <Ionicons name="arrow-forward" size={25}></Ionicons>
                  </View>
                </View>
              ))}
            </ScrollView>
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerTop: {
    position: "absolute",
    top: Platform.OS === "ios" ? height * 0.05 : height * 0.04,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
  },
  logo: {
    width: width * 0.35,
    height: Platform.OS === "ios" ? height * 0.055 : height * 0.06,
    resizeMode: "contain",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.03,
  },
  iconButton: {
    padding: width * 0.015,
  },
  headerBottom: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? height * 0.03 : height * 0.025,
    width: "90%",
    alignItems: "center",
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: width * 0.015,
    paddingVertical: Platform.OS === "ios" ? height * 0.012 : height * 0.015,
    paddingHorizontal: width * 0.05,
    width: "100%",
  },
  searchText: {
    marginLeft: width * 0.03,
    fontSize: height * 0.018,
    color: colors.dark,
    fontWeight: "500",
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
    overflow: "hidden",
    marginBottom: 10,
  },
  carouselItem: {
    width: width * 0.94,
    height: height * 0.25,
  },
  carouselGradient: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  carouselImage: {
    width: "40%",
    height: "100%",
    borderRadius: 8,
  },
  carouselTextContainer: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  carouselText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  carouselButton: {
    backgroundColor: colors.dark,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: colors.white,
  },
  carouselButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 12,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignSelf: "center",
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
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  categoryWrapper: {
    marginTop: 0,
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  categoryItem: {
    backgroundColor: colors.dark,
    borderRadius: 5,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    width: height * 0.145,
    paddingTop: 10,
    paddingBottom: 10,
  },
  categoryText: {
    marginTop: 8,
    fontSize: height * 0.014,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
  },
  recentlyViewed: {
    borderWidth: 0.7,
    borderColor: colors.red,
    padding: height * 0.01,
    // height: height * 0.045,
    // width: height * 0.,
    // marginBottom: 10,
    // maxWidth:height*0.3
    // backgroundColor: colors.primary,

    borderRadius: 10,
    borderColor: "#FFC0CB",
    borderWidth: 2,

    elevation: 5,
  },
  sectionText: {
    fontSize: 12,
    color: colors.dark,
    fontFamily: "KaiseiOpti_400Regular",
    fontWeight: "500",
  },
  recentlyViewedList: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  productWrapper: {
    marginRight: 12,
  },
});

export default HomePage;
