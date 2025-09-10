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
  LayoutAnimation,
  ScrollView,
  UIManager,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
import colors from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
// import { ScrollView } from "react-native-gesture-handler";
// import { Picker } from "@react-native-picker/picker";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width, height } = Dimensions.get("window");

const cateList = Array.from({ length: 5 }).map((_, j) => ({
  id: j,
  catName: `category ${j + 1}`,
}));
const ProductDetails = () => {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = height * 0.2;

  const images = [
    require("../../../../assets/vapeDevice.png"),
    require("../../../../assets/vapeDevice.png"),
    require("../../../../assets/vapeDevice.png"),
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const [nicotine, setNicotine] = useState("20mg");
  const [extraNicotine, setExtraNicotine] = useState("Shot");
  const [extraQty, setExtraQty] = useState("1");
  const [qty1, setQty1] = useState(1);

  const [activeTab, setActiveTab] = useState("details");
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    LayoutAnimation.easeInEaseOut();
    setCollapsed(!collapsed);
  };
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const [selected, setSelected] = useState(false);
  return (
    <ScrollView style={styles.container}>
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

          <View style={[{}, styles.card]}>
            <View
              style={[
                styles.rowBetween,
                { alignItems: "center", marginBottom: 10 },
              ]}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.title, { marginTop: 10 }]}
              >
                zeus dodoberry 20mg e li12 super long title testing for overflow
              </Text>
              <View
                style={[
                  {
                    maxWidth: "40%",
                    flexDirection: "column",
                    justifyContent: "baseline",
                    alignItems: "flex-end",
                  },
                ]}
              >
                <Text style={styles.stock}>In Stock: 5</Text>
                <Text
                  style={[
                    styles.sku,
                    { maxWidth: width * 0.15, minWidth: width * 0.13 },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  SKU: 1749228414000002211121
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text style={styles.description}>
              Dark forest berries picked from the garden of Zeus, with a subtle
              fresh mint that will leave your mouth watering
              {/* <Text style={styles.readMore}>Read More...</Text> */}
              <TouchableOpacity
                style={styles.readMore}
                onPress={() => {
                  console.log("read more clicked");
                }}
              >
                <Text style={styles.readMore}> Read More...</Text>
              </TouchableOpacity>
            </Text>

            {/* Price + Discount */}
            <View style={[styles.rowAlign, { alignSelf: "flex-start" }]}>
              <Text
                style={[
                  styles.discount,
                  {
                    color: "green",
                    fontWeight: "bold",
                    fontSize: width * 0.045,
                    marginEnd: 5,
                  },
                ]}
              >
                ↓ 50%
              </Text>
              <Text
                style={[
                  styles.oldPrice,
                  {
                    textDecorationLine: "line-through",
                    marginRight: 8,
                    fontWeight: "bold",
                    fontSize: width * 0.045,
                    color: colors.grey,
                  },
                ]}
              >
                £6.99
              </Text>
              <Text
                style={[
                  styles.newPrice,
                  { fontWeight: "bold", fontSize: width * 0.05, color: "#000" },
                ]}
              >
                £3.99
              </Text>
            </View>

            {/* Rating */}
            <Text
              style={[
                styles.rating,
                { alignSelf: "flex-start", marginStart: width * 0.05 },
              ]}
            >
              ⭐⭐⭐⭐⭐
            </Text>
            <View style={{ marginTop: 15, width: "90%", marginHorizontal: 10 }}>
              {/* Row 1 - Nicotine & Extra Nicotine */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* Nicotine */}
                <View style={{ flex: 1, marginRight: 10 }}>
                  <Text style={{ fontSize: 16, marginBottom: 5 }}>
                    Nicotine:
                  </Text>
                  <View style={styles.dropdownBox}>
                    <Text>20 mg ▼</Text>
                  </View>
                </View>

                {/* Extra Nicotine */}
                <View style={{ flex: 2, marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, marginBottom: 5 }}>
                    Add Extra Nicotine:
                  </Text>
                  <View style={styles.dropdownBox}>
                    <Text>Nicotine Shot ▼</Text>
                  </View>
                </View>

                {/* Extra Nicotine Qty */}
                <View style={{ width: 60, marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, marginBottom: 5 }}> </Text>
                  <View style={styles.dropdownBox}>
                    <Text>1 ▼</Text>
                  </View>
                </View>
              </View>

              {/* Row 2 - Qty */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 16, marginRight: 10 }}>Qty:</Text>
                <View style={styles.qtyBox}>
                  <TouchableOpacity>
                    <Text style={styles.qtyBtn}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>1</Text>
                  <TouchableOpacity>
                    <Text style={styles.qtyBtn}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={[
                {
                  backgroundColor: colors.secondary,
                  height: height * 0.2,
                  flexDirection: "column",

                  marginStart: 10,
                  marginEnd: 10,
                  marginTop: 10,

                  borderRadius: 20,
                  minWidth: width * 0.88,
                },
              ]}
            >
              <View
                style={[
                  {
                    backgroundColor: colors.dark + "00",
                    flexDirection: "row",
                    borderRadius: 20,
                    paddingStart: width * 0.02,
                    alignItems: "center",
                    paddingTop: width * 0.01,
                    height:height*0.05
                  },
                ]}
              >
                <Image
                  style={[
                    {
                      height: height * 0.03,
                      width: width * 0.08,
                      marginStart: width * 0.01,
                    },
                  ]}
                  source={require("../../../../assets/offersimg.png")}
                ></Image>

                <Text
                  style={[
                    {
                      fontSize: width * 0.04,
                      color: colors.white,
                      fontWeight: "700",
                      marginStart: width * 0.02,
                    },
                  ]}
                >
                  Buy More, Save More
                </Text>
              </View>
              <View
                style={[
                  {
                    borderRadius: 10,
                    backgroundColor: "#FFEAEE",
                    flexDirection: "column",
                    height:height*0.15
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: width * 0.045,
                      fontWeight: "900",
                      fontStyle: "bold",
                      color: colors.dark,
                      padding: width * 0.035,
                    },
                  ]}
                >
                  GRAB THIS DEAL
                </Text>
                <FlatList
                  data={cateList}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.cardoffers, selected && styles.cardActive]}
                      onPress={() => setSelected(!selected)}
                      activeOpacity={0.8}
                    >
                      <LinearGradient
                        colors={[colors.primary, colors.secondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                          {
                            width: "30%",
                            marginEnd: 5,
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                          },
                        ]}
                      >
                        {/* Radio Button */}
                        <View style={[styles.radioOuter]}>
                          {selected ? <View style={styles.radioInner} /> : null}
                        </View>
                      </LinearGradient>
                      {/* Offer Details */}
                      <View style={styles.details}>
                        <Text style={styles.offerTitle}>
                          Buy 3 for £2.01 Off
                        </Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={styles.newPrice}>£3.32 </Text>
                          <Text style={styles.oldPrice}>£3.99</Text>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={styles.totalLabel}>Total </Text>
                          <Text style={styles.totalPrice}>£9.96 </Text>
                          <Text style={styles.oldPrice}>£11.97</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>

            <View style={[{ height: 50 }]}></View>

            <View
              style={[
                {
                  backgroundColor: colors.secondary,
                  height: height * 0.2,
                  flexDirection: "column",

                  marginStart: 10,
                  marginEnd: 10,
                  marginTop: 10,

                  borderRadius: 20,
                  minWidth: width * 0.88,
                },
              ]}
            >
              <View
                style={[
                  {
                    backgroundColor: colors.dark + "00",
                    flexDirection: "row",

                    borderRadius: 20,
                    paddingStart: width * 0.02,
                    alignItems: "center",
                    paddingTop: width * 0.01,
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: width * 0.04,
                      color: colors.white,
                      fontWeight: "700",
                      marginStart: width * 0.02,
                      marginVertical: 10,
                    },
                  ]}
                >
                  More Zeus E liquids
                </Text>
              </View>
              <View
                style={[
                  {
                    borderRadius: 10,
                    backgroundColor: "#FFEAEE",
                    flexDirection: "column",
                  },
                ]}
              >
                <FlatList
                  data={cateList}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View
                      style={[
                        styles.cardProduct,
                        { justifyContent: "center", alignItems: "center" },
                      ]}
                    >
                      {/* Product Image */}
                      <Image
                        source={require("../../../../assets/offersimg.png")}
                        style={styles.image}
                      />

                      {/* Product Details */}
                      <View style={styles.details}>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={styles.title}
                        >
                          zeus cerberus 20mg e liq
                        </Text>
                        <Text style={styles.stock}>(In Stock: 5)</Text>
                        <Text style={styles.price}>£3.99</Text>

                        {/* Counter */}
                        <View style={styles.counter}>
                          <TouchableOpacity
                            style={[
                              styles.btn,
                              qty === 1 && styles.disabledBtn,
                            ]}
                            onPress={decreaseQty}
                            disabled={qty === 1}
                          >
                            <Text style={styles.btnText}>-</Text>
                          </TouchableOpacity>

                          <Text style={styles.qty}>{qty}</Text>

                          <TouchableOpacity
                            style={styles.btn}
                            onPress={increaseQty}
                          >
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>

            <View style={[{ height: 50 }]}></View>
            <View
              style={[
                styles.detailsContainer,
                {
                  padding: 10,
                  margin: 10,
                  borderColor: colors.dark,
                  borderWidth: 1,
                  borderRadius: 20,
                  minWidth: width * 0.88,
                },
              ]}
            >
              <View
                style={[
                  { flexDirection: "row", justifyContent: "space-between" },
                ]}
              >
                <Text style={[{ color: colors.dark, fontSize: 20 }]}>
                  All Details
                </Text>

                {/* Collapse Button */}
                <TouchableOpacity
                  onPress={toggleCollapse}
                  style={styles.toggleCollapse}
                >
                  <Ionicons
                    style={{ fontWeight: "bold" }}
                    name={collapsed ? "caret-down" : "caret-up"}
                    size={width * 0.05}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
              {/* Header Tabs */}
              <View style={styles.tabRow}>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === "details" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("details")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "details" && styles.activeText,
                    ]}
                  >
                    Product Details
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === "spec" && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab("spec")}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === "spec" && styles.activeText,
                    ]}
                  >
                    Specification
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Content */}
              {!collapsed && (
                <View style={styles.contentBox}>
                  {activeTab === "details" ? (
                    <Text style={styles.contentText}>
                      Dark forest berries picked from the garden of Zeus, with a
                      subtle fresh mint that will leave your mouth watering.
                      {"\n\n"}
                      This product is powered by NS20. The two main benefits of
                      Nicotine Salts are that it affects the flavour of the
                      E-Liquid much less than traditional nicotine and has much
                      less of a throat hit at such high strengths.
                    </Text>
                  ) : (
                    <Text style={styles.contentText}>
                      - Strength: 20mg {"\n"}- Volume: 10ml {"\n"}- Ingredients:
                      PG, VG, Flavouring, Nicotine Salt {"\n"}- Made in: UK
                    </Text>
                  )}
                </View>
              )}
            </View>
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
                  flex: 1,
                  margin: 15,

                  fontWeight: 800,
                  fontSize: width * 0.03,

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
                    fontWeight: 800,
                    fontSize: width * 0.03,
                    padding: 10,
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
    </ScrollView>
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
  },
  itemContainer: {
    padding: 10,
  },
  card: {
    marginStart: 20,
    marginTop: 10,
    marginBottom: 10,
    marginEnd: 20,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    borderRadius: 20,

    borderColor: colors.primary,
    borderWidth: 1,

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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  catName: { marginStart: 7, marginEnd: 7, fontSize: 20 },
  fsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dark overlay
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    width: "100%",
    elevation: 5, // shadow for Android
  },

  modalView: {
    backgroundColor: colors.white,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    padding: 25,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: width,
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

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginEnd: width * 0.1,
    marginStart: width * 0.1,
  },

  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: width * 0.05,
    marginTop: 5,
  },

  title: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#000",
    maxWidth: width * 0.6, // ✅ max width for ellipsis
  },

  stock: { fontSize: width * 0.04, marginTop: 5, color: "green" },
  sku: { fontSize: width * 0.03, color: "#666", marginLeft: width * 0.05 },

  description: {
    marginHorizontal: width * 0.05,
    marginTop: 5,
    color: "#333",
    fontSize: width * 0.04,
  },

  readMore: { color: "blue" },

  discount: {},
  oldPrice: { textDecorationLine: "line-through", marginRight: 8 },
  newPrice: {},

  rating: { marginHorizontal: width * 0.05, marginTop: 1, fontSize: 20 },

  offerBox: {
    backgroundColor: "#f3f3f3",
    margin: width * 0.05,
    borderRadius: 8,
  },
  offerTitle: { fontWeight: "bold", marginBottom: 10 },
  offerCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  dropdownBox: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  qtyBtn: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 5,
    color: "#666",
  },
  qtyText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  container12: {
    margin: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },
  tabRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
  collapseBtn: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  contentBox: {
    padding: 10,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },

  cardoffers: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    // padding: 10,
    marginVertical: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
    height: height * 0.08,
    width: width * 0.5,
    marginHorizontal: width * 0.02,
    // borderWidth: 2,
    // borderColor: "#06c16700",
  },
  cardActive: {
    // borderWidth: 1,
    // borderColor: "#06C16700", // green highlight
  },
  radioOuter: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioInner: {
    height: 16,
    width: 16,
    borderRadius: 20,
    backgroundColor: "#ffffffff",
  },
  details: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
  },
  newPrice: {
    color: "red",
    fontSize: 14,
    fontWeight: "600",
  },
  oldPrice: {
    fontSize: 13,
    color: "#888",
    textDecorationLine: "line-through",
  },
  totalLabel: {
    fontSize: 13,
    fontWeight: "500",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "green",
  },

  cardProduct: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: 60,
    height: 80,
    resizeMode: "contain",
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  // title: {
  //   fontSize: 14,
  //   fontWeight: "600",
  //   marginBottom: 2,
  // },
  stock: {
    fontSize: 12,
    color: "green",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "red",
    marginBottom: 8,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    width: 100,
    justifyContent: "space-between",
  },
  btn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledBtn: {
    backgroundColor: "#ddd",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  qty: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProductDetails;
