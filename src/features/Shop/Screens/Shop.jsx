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
// import { green } from "react-native-reanimated/lib/typescript/Colors";
// import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const modifiedData = [];
const interval = 6;

const data = Array.from({ length: 15 }).map((_, i) => ({
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
  catName: `category ${j + 1}`,
}));

const Shop = ({ navigation }) => {
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
          <FlatList
            data={cateList}
            keyExtractor={(item) => item.id.toString()}
            numColumns={1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductDetails");
                  console.log(`clicked:${item.catName}`);
                }}
              >
                <View style={[styles.catItem, { marginBottom: 20 }]}>
                  <Text style={styles.catName}>{item.catName}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <FlatList
            data={data}
            keyExtractor={(item, index) =>
              item.id?.toString() || `custom-${index}`
            }
            numColumns={2}
            contentContainerStyle={styles.itemContainer}
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
                    {/* Your custom layout here */}
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
                // <TouchableOpacity onPress={()=>{console.log(`clicked: ${item.title}`)}}>
                <View style={styles.card}>
                  {/* Parent container with relative positioning */}
                  <View
                    style={{
                      position: "relative",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    {/* Image */}
                    <Image
                      style={{
                        height: "70%",
                        width: "65%",
                        borderRadius: 10,
                        marginTop: 15,
                      }}
                      source={require("../../../../assets/vapeDevice.png")}
                    />

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

                  {/* Item Title */}
                  <Text style={styles.itemName}>{item.title}</Text>
                  <Text style={[{ fontSize: 15 }]}>{item.star}</Text>
                  <View style={[{ flexDirection: "row" }]}>
                    <Text style={[styles.itemPrice, { marginEnd: 10 }]}>
                      {item.price}
                    </Text>
                    <Text
                      style={[
                        styles.itemPrice,
                        {
                          color: colors.grey,
                          textDecorationLine: "line-through",
                        },
                      ]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                // </TouchableOpacity>
              );
            }}
          />
          {/* bottom dialog for filter and sort options */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.log("age Verification dialog is closed");
              setModalVisible(!modalVisible);
            }}
          >
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
              style={styles.modalBackdrop}
            >
              <Pressable onPress={() => {}}>
                <View style={[styles.modalView, {}]}>
                  <Text
                    style={{
                      color: colors.dark,
                      fontSize: width * 0.045,
                      marginBottom: 5,
                      lineHeight: height * 0.035,
                      fontFamily: "KaiseiOpti_700Bold",
                    }}
                  >
                    sort the product
                  </Text>
                  <View style={styles.container1}>
                    {options.map((option, index) => (
                      <Pressable
                        key={index}
                        style={styles.optionContainer}
                        onPress={() => setSelected(option)}
                      >
                        <Text style={styles.label}>{option}</Text>
                        <View style={styles.outerCircle}>
                          {selected === option && (
                            <View style={styles.innerCircle} />
                          )}
                        </View>
                      </Pressable>
                    ))}

                    {/* <Text style={{ marginTop: 20, fontWeight: "bold" }}>
                      Selected: {selected || "None"}
                    </Text> */}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {/* <checkedBox></checkedBox> */}
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
          {/* bottom option filter and sort */}

          <View
            style={[
              styles.fsContainer,
              {
                height: height * 0.05,
                backgroundColor: colors.grey,
                width: "100%",
                // paddingHorizontal:10,
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.fsContainer,
                {
                  width: "50%",
                  height: "100%",
                  borderColor: colors.dark,
                  backgroundColor: colors.white,

                  borderWidth: 1,
                },
              ]}
              onPress={() => {
                setModalVisible(true);
                console.log("sort clicked");
              }}
            >
              <View
                style={[
                  styles.fsContainer,
                  {
                    // flexDirection: "row",
                    width: "50%",
                    height: "100%",
                    // borderColor: colors.dark,
                    // borderWidth: 1,
                  },
                ]}
              >
                <Ionicons name="sort" color={colors.dark} size={25}></Ionicons>
                <Text
                  style={[
                    {
                      marginStart: 5,
                      fontSize: width * 0.05,
                      fontWeight: "800",
                    },
                  ]}
                >
                  short
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("filter clicked");
              }}
              style={[
                styles.fsContainer,
                {
                  width: "50%",
                  height: "100%",
                  backgroundColor: colors.white,

                  borderColor: colors.dark,
                  borderWidth: 1,
                },
              ]}
            >
              <View
                style={[
                  styles.fsContainer,
                  {
                    // width: "50%",
                    // height: "100%",
                    // borderColor: colors.dark,
                    // borderWidth: 1,
                  },
                ]}
              >
                <Ionicons
                  name="options-outline"
                  color={colors.dark}
                  size={25}
                ></Ionicons>
                <Text
                  style={[
                    {
                      marginStart: 5,
                      fontSize: width * 0.05,
                      fontWeight: "800",
                    },
                  ]}
                >
                  filter
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* <Text style={styles.text}>Main Content Area</Text> */}
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
export default Shop;
