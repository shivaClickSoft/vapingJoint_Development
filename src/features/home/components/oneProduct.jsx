import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

const { width } = Dimensions.get("window");

const OneProduct = () => {
  return (
    <View style={styles.card}>
      {/* Product Image */}
      <Image
        source={require("../../../../assets/oneProduct.png")}
        style={styles.productImage}
        resizeMode="contain"
      />

      {/* Wishlist & Cart Icons */}
      <View style={styles.iconContainer}>
        <Pressable style={styles.iconButton}>
          <Ionicons name="heart-outline" size={16} color={colors.white} />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Ionicons name="cart-outline" size={16} color={colors.white} />
        </Pressable>
      </View>

      {/* Product Title */}
      <Text style={styles.productTitle}>ZEUS DODOBERRY</Text>
      <Text style={styles.productDescription}>20MG E LIQ</Text>

      {/* Rating */}
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Ionicons name="star" size={16} color="#FFD700" />
        <Ionicons name="star" size={16} color="#FFD700" />
        <Ionicons name="star" size={16} color="#FFD700" />
        <Ionicons name="star-outline" size={16} color="#FFD700" />
      </View>

      {/* Prices */}
      <View style={styles.priceRow}>
        <Text style={styles.currentPrice}>£3.99</Text>
        <Text style={styles.oldPrice}>£6.99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.44,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productImage: {
    width: "80%",
    height: 100,
    marginBottom: 8,
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    backgroundColor: colors.dark,
    borderRadius: 50,
    padding: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: colors.primary
  },
  productTitle: {
    fontSize: 12,
    textAlign: "center",
    color: colors.dark,
    fontFamily: 'KaiseiOpti_400Regular',
  },
  productDescription: {
    fontSize: 11,
    color: "gray",
    marginBottom: 6,
    textAlign: "center",
  },
  ratingRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.dark,
  },
  oldPrice: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
  },
});

export default OneProduct;
