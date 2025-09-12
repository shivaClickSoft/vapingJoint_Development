import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

const { height, width } = Dimensions.get("window");

const WishProduct = ({
  productName = "ZEUS DODOBERRY lorem ipsum a demo text to show in the ui",
  description = "20MG E LIQ",
  currentPrice = "£3.99",
  oldPrice = "£5.99",
  rating = 3.5,
  isNew = true,
  imageSource = require("../../../assets/oneProduct.png"),
}) => {
  // rendering stars
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Ionicons key={i} name="star" size={width * 0.04} color="#FFD700" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Ionicons
            key={i}
            name="star-half"
            size={width * 0.04}
            color="#FFD700"
          />
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={width * 0.04}
            color="#FFD700"
          />
        );
      }
    }
    return stars;
  };

  return (
    <View style={styles.card}>
      {/* Product Image */}
      <Image
        source={imageSource}
        style={styles.productImage}
        resizeMode="contain"
      />

      {/* Top Container with New tag and Icons */}
      <View style={styles.topContainer}>
        {isNew ? (
          <Text style={styles.newTag}>New</Text>
        ) : (
          <View style={{ width: height * 0.05, height: height * 0.02 }} />
        )}
        <View style={styles.iconsWrapper}>
          {/* <Pressable style={styles.iconButton}>
            <Ionicons
              name="heart-outline"
              size={width * 0.035}
              color={colors.white}
            />
          </Pressable> */}
          <Pressable style={styles.iconButton}>
            <Ionicons
              name="ellipsis-vertical"
              size={width * 0.045}
              color={colors.white}
            />
          </Pressable>
        </View>
      </View>

      {/* Product Title */}
      <Text
        style={[
          styles.productTitle,
          { maxWidth: height * 0.15, alignSelf: "flex-start" },
        ]}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {productName}
      </Text>
      {/* <Text style={sty les.productDescription}>{description}</Text> */}

      {/* Rating */}
      {/* Prices */}
      <View style={[styles.priceRow, { alignSelf: "flex-start" }]}>
        <Text style={styles.currentPrice}>{currentPrice}</Text>
        <Text style={styles.oldPrice}>{oldPrice}</Text>
      </View>
      {/* Rating */}
      <View style={[styles.ratingRow, { alignSelf: "flex-start" }]}>
        {renderStars()}
      </View>

      <TouchableOpacity
        style={[
          {
            marginTop: height * 0.01,
            borderColor: colors.grey,
            borderWidth: 1,
            width: "100%",
            alignItems: "center",
            borderRadius: 4,
          },
        ]}
      >
        <Text style={[{ color: colors.secondary, fontSize: height * 0.02 }]}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: height * 0.2,
    backgroundColor: colors.fullwhite,
    borderRadius: width * 0.03,
    padding: height * 0.015,
    margin: height * 0.01,
    alignItems: "center",
    shadowColor: "#ffffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  productImage: {
    width: height * 0.14,
    height: height * 0.145,
    resizeMode: "stretch",
    marginBottom: height * 0.003,
    marginTop: -10,
  },

  topContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: height * 0.003,
    position: "absolute",
    marginTop: height * 0.005,
  },
  newTag: {
    padding: 5,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    color: colors.white,
    fontSize: height * 0.0115,
    fontWeight: "bold",
  },
  iconsWrapper: {
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
    borderColor: colors.primary,
  },
  productTitle: {
    fontSize: height * 0.017,
    textAlign: "center",
    color: colors.dark,
    fontFamily: "KaiseiOpti_400Regular",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: height * 0.017,
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
    fontSize: height * 0.017,
    fontWeight: "bold",
    color: colors.dark,
  },
  oldPrice: {
    fontSize: height * 0.015,
    color: "gray",
    textDecorationLine: "line-through",
  },
});

export default WishProduct;
