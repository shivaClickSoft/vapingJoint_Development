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
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../../constants/colors";
// import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import OneProduct from "../../home/components/oneProduct";
import WishProduct from "../wishProduct";
// import { green } from "react-native-reanimated/lib/typescript/Colors";
// import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const modifiedData = [];
const interval = 6;

const data = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  title: `item number ${i + 1}`,
  star: "4",
  price: `INR ${12 * i}`,
}));
data.forEach((item, index) => {
  modifiedData.push(item);
  if ((index + 1) % interval === 0) {
    modifiedData.push({ type: "custom", id: `custom-${index}` });
  }
});
const cateList = Array.from({ length: 5 }).map((_, j) => ({
  id: j,
  catName: `category1321312 ${j + 1}`,
}));

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

// const cateList = [{id:1, catName:`Category`},]
const WishList = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = height * 0.2;

  const options = ["Popularity", "Price hight to low", "Price low to high"];
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.dark}
        translucent={true}
      />
      {/* this is for search bar */}
      <View
        style={[
          // styles.topContainer,
          {
            paddingTop: insets.top,
            paddingStart: width * 0.02,
            paddingEnd: width * 0.04,
            height: height * 0.15, //changed the height according to the design
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
              // height: HEADER_HEIGHT + insets.top,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
              //
            }}
          >
            <Ionicons
              name="arrow-back"
              color={colors.white}
              size={30}
            ></Ionicons>
          </TouchableOpacity>
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
        {/* <Text>Shop</Text> */}
      </View>
      {/* Gradient background for rest of screen */}
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
          {/* <Text
            style={[
              {
                color: colors.dark,
                fontSize: height * 0.025,
                fontWeight: "800",
              },
            ]}
          >
            My wishlist22
          </Text> */}
          <View
            style={[
              {
                flexDirection: "row",
                marginTop: height * 0.015,
                marginStart: height * 0.015,
                marginEnd: height * 0.015,
                justifyContent: "space-between",
              },
            ]}
          >
            <View style={[{ flexDirection: "column" }]}>
              <Text
                style={[
                  {
                    color: colors.dark,
                    fontSize: height * 0.025,
                    fontWeight: "800",
                  },
                ]}
              >
                My wishlist
              </Text>
              <Text>{data.length} items</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={height * 0.03}></Ionicons>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) =>
              item.id?.toString() || `custom-${index}`
            }
            numColumns={2}
            contentContainerStyle={[
              styles.itemContainer,
              { alignItems: "center" },
            ]}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              if (item.type === "custom") {
                return (
                  <View
                    style={{
                      width: "90%",
                      padding: 10,
                      backgroundColor: colors.white,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 28,
                        color: colors.dark,
                      }}
                    >
                      🔥 Special Offer 🔥
                    </Text>
                  </View>
                );
              }
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProductDetails");
                    console.log(`clicked:${item.title}`);
                  }}
                >
                  <WishProduct isNew={false} />
                </TouchableOpacity>
              );
            }}
          />
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
    flex: 1, // makes items share space equally
    margin: 10,
    height: height * 0.25,
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
    justifyContent: "center",
    alignItems: "center",
    // width: width * 0.21,
    backgroundColor: colors.white,
    borderColor: colors.red,
    // padding:width*0.03,
    borderWidth: 1,
    borderRadius: 20,
    margin: 6,
    // justifyContent: "center",
    // 👇 Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // 👇 Shadow for Android
    elevation: 5,
  },
  catName: { marginStart: 7, marginEnd: 7, fontSize: 16, margin: 5 },
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
export default WishList;
