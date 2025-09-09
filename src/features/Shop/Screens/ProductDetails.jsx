import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
import colors from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ProductDetails = () => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = height * 0.2;

  const images = [
    require("../../../../assets/vapeDevice.png"),
    require("../../../../assets/vapeDevice.png"),
    require("../../../../assets/vapeDevice.png"),
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={true}
      />
      <View
        style={[
          {
            paddingTop: insets.top,
            paddingStart: width * 0.02,
            paddingEnd: width * 0.04,
            height: height * 0.15,
          },
        ]}
      >
        <View
          style={[
            styles.topContainer,
            {
              paddingTop: height * 0.02,
              paddingStart: width * 0.02,
              paddingEnd: width * 0.04,
              alignItems: "center",
            },
          ]}
        >
          <Ionicons name="arrow-back" color={colors.white} size={30}></Ionicons>
          <View style={[styles.searchContainer, { flexDirection: "row" }]}>
            <Ionicons name="search" color={colors.grey} size={30}></Ionicons>
            <TextInput
              style={{ fontSize: width * 0.05 }}
              placeholder="Search By Brand"
              placeholderTextColor={colors.grey}
            ></TextInput>
          </View>
          <Ionicons name="cart" color={colors.grey} size={30}></Ionicons>
        </View>
        {/* Gradient background for rest of screen */}
      </View>
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
          <View style={[styles.card, { height: height * 0.25 }]}>
            {/* Parent container with relative positioning */}
            <View
              style={{
                position: "relative",
                width: "100%",
                alignItems: "center",
              }}
            >
              {/* Image */}
              {/* <Image
                style={{
                  height: "85%",
                  width: "70%",
                  resizeMode: "stretch",
                  borderRadius: 10,
                  marginTop: 15,
                }}
                source={require("../../../../assets/vapeDevice.png")}
              /> */}

              <FlatList
                data={images}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Image
                    source={item}
                    style={{
                      height: height * 0.2,
                      width: width * 0.9,
                      resizeMode: "contain",
                      borderRadius: 10,
                      marginTop: 15,
                    }}
                  />
                )}
                onScroll={(e) => {
                  const slide = Math.round(
                    e.nativeEvent.contentOffset.x / width
                  );
                  setActiveIndex(slide);
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  // marginTop: ,
                }}
              >
                {images.map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor:
                        activeIndex === index ? colors.primary : "#ccc",
                      margin: 4,
                    }}
                  />
                ))}
              </View>
              {/* Overlay icons */}
              <View
                style={{
                  position: "absolute", // key part
                  top: 10,
                  right: 10,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.dark,
                    borderColor: colors.primary,
                    borderWidth: 1,
                    borderRadius: 100,
                    padding: 3,
                    marginRight: 5,
                  }}
                >
                  <Ionicons
                    name="heart-outline"
                    color={colors.grey}
                    size={25}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: colors.dark,
                    borderColor: colors.primary,
                    borderWidth: 1,
                    borderRadius: 100,
                    padding: 3,
                  }}
                >
                  <Ionicons name="cart" color={colors.grey} size={25} />
                </View>
              </View>
            </View>
          </View>
          {/* product part end */}

          <View style={[styles.card, { flex: 1 }]}>
            {/* <View
              style={[
                {
                  // flex: 1,
                  // height:height*0.05,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width:"95%",
                  marginLeft: width * 0.05,
                  marginRight: width * 0.05,
                  marginTop:height*0.01,
                  backgroundColor: colors.dark,
                },
              ]}
            >
              <Text
                style={[
                  {
                    fontSize: width * 0.055,
                    marginTop: 5,
                    color: colors.white,
                  },
                ]}
              >
                Zeus dodoberry\ 20mg e liq
              </Text>
              <View></View>
            </View> */}
          </View>

          {/* Bottom buttons add to cart and buy at price part  */}
          <View
            style={[
              { margin: 15, justifyContent: "center", flexDirection: "row" },
            ]}
          >
            <TouchableOpacity
              style={[
                {
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  margin: 15,
                  backgroundColor: colors.white + "00",
                  fontWeight: 800,
                  fontSize: width * 0.03,
                  padding: 10,
                  borderColor: colors.primary,
                  borderWidth: 1,
                  borderRadius: 10,
                },
              ]}
            >
              <Text
                style={[
                  {
                    color: colors.dark,
                    fontWeight: 800,
                    fontSize: width * 0.05,
                  },
                ]}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  flex: 1,
                  margin: 15,
                  //   backgroundColor: colors.dark,
                  fontWeight: 800,
                  fontSize: width * 0.03,
                  //   padding: 10,
                  //   borderColor: colors.primary,
                  //   borderWidth: 1,
                  borderRadius: 10,
                },
              ]}
            >
              <LinearGradient
                colors={[colors.secondary, colors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    // margin: 15,
                    //   backgroundColor: colors.dark,
                    fontWeight: 800,
                    fontSize: width * 0.03,
                    padding: 10,
                    // borderColor: colors.primary,
                    // borderWidth: 1,
                    borderRadius: 10,
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      color: colors.white,
                      fontWeight: 800,
                      fontSize: width * 0.05,
                    },
                  ]}
                >
                  Buy at + price
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.dark },
  topContainer: { flexDirection: "row", justifyContent: "space-between" },
  searchContainer: {
    height: height * 0.05,
    backgroundColor: colors.white,
    borderRadius: 5,
    width: width * 0.65,
    fontSize: width * 0.05,
    alignItems: "center",
    paddingStart: 10,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    // paddingHorizontal: width * 0.05,
  },
  itemContainer: {
    padding: 10,
  },
  card: {
    // flex: 1, // makes items share space equally
    marginStart: 20,
    marginTop: 10,
    marginBottom: 10,
    marginEnd: 20,
    // height: height * 0.35,
    // aspectRatio: 1, // square shape (auto height = width)
    backgroundColor: "#ffffffff",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,

    borderColor: colors.primary,
    borderWidth: 1,
    // width:width

    // 👇 Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // 👇 Shadow for Android
    elevation: 5,
  },
  itemName: {
    color: colors.dark,
    fontWeight: "bold",
    marginTop: -35,
    fontSize: width * 0.05,
    textAlign: "center",
  },
  itemPrice: {
    color: colors.dark,
    fontWeight: "bold",
    // marginTop: -40,
    fontSize: width * 0.045,
    textAlign: "center",
  },
  catItem: {
    height: height * 0.04,
    backgroundColor: colors.white,
    borderColor: colors.red,
    borderWidth: 1,
    borderRadius: 20,
    margin: 6,
    justifyContent: "center",
    // 👇 Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // 👇 Shadow for Android
    elevation: 5,
  },
  catName: { marginStart: 7, marginEnd: 7, fontSize: 20 },
  fsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: colors.white,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dark overlay
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.white,
    // borderRadius: 12,
    // borderTopLeftRadius:12,borderTopRightRadius:12,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    // padding: 20,
    width: "100%",
    elevation: 5, // shadow for Android
  },

  modalView: {
    // margin: 5,
    backgroundColor: colors.white,
    // borderRadius: 15,

    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    padding: 25,
    alignItems: "flex-start",
    justifyContent: "flex-start",

    width: width,
    // backgroundColor: colors.white,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.secondary,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: { elevation: 4 },
    }),
  },
  left: {
    flex: 1,
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  right: {
    width: "50%",
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
  container1: {
    padding: 20,
  },
  optionContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  outerCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#555",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#2196F3", // blue selected color
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProductDetails;
