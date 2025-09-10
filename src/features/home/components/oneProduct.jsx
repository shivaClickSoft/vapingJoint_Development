// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import colors from "../../../constants/colors";

// const { width } = Dimensions.get("window");

// const OneProduct = () => {
//   return (
//     <View style={styles.card}>
//       {/* Product Image */}
//       <Image
//         source={require("../../../../assets/oneProduct.png")}
//         style={styles.productImage}
//         resizeMode="contain"
//       />
//       {/* <View style={{flexDirection:"row",alignitem justifyContent:"space-between", position:"absolute"}}>
//         <Text>New</Text> */}

//       {/* Wishlist & Cart Icons */}
//       <View style={styles.iconContainer}>
//         <Text
//           style={{
//             alignSelf: "flex-start",
//             padding: 5,
//             backgroundColor: colors.secondary,
//             borderRadius: 5,
//             color: colors.white,
//           }}
//         >
//           New
//         </Text>

//         <Pressable style={styles.iconButton}>
//           <Ionicons name="heart-outline" size={16} color={colors.white} />
//         </Pressable>
//         <Pressable style={styles.iconButton}>
//           <Ionicons name="cart-outline" size={16} color={colors.white} />
//         </Pressable>
//       </View>
//       {/* </View> */}

//       {/* Product Title */}
//       <Text style={styles.productTitle}>ZEUS DODOBERRY</Text>
//       <Text style={styles.productDescription}>20MG E LIQ</Text>

//       {/* Rating */}
//       <View style={styles.ratingRow}>
//         <Ionicons name="star" size={20} color="#FFD700" />
//         <Ionicons name="star" size={20} color="#FFD700" />
//         <Ionicons name="star" size={20} color="#FFD700" />
//         <Ionicons name="star" size={20} color="#FFD700" />
//         <Ionicons name="star-outline" size={20} color="#FFD700" />
//       </View>

//       {/* Prices */}
//       <View style={styles.priceRow}>
//         <Text style={styles.currentPrice}>£3.99</Text>
//         <Text style={styles.oldPrice}>£6.99</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: width * 0.4,
//     backgroundColor: colors.fullwhite,
//     borderRadius: 10,
//     padding: 10,
//     margin: 5,
//     alignItems: "center",
//     shadowColor: "#ffffffff",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,

//     borderColor: colors.primary,
//     borderWidth: 1,
//   },
//   productImage: {
//     width: "80%",
//     height: 100,
//     marginBottom: 8,
//   },
//   iconContainer: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     flexDirection: "row",
//     gap: 8,
//     flex: 1,
//   },
//   iconButton: {
//     backgroundColor: colors.dark,
//     borderRadius: 50,
//     padding: 5,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowRadius: 2,
//     borderWidth: 1,
//     borderColor: colors.primary,
//   },
//   productTitle: {
//     fontSize: 18,
//     textAlign: "center",
//     color: colors.dark,
//     fontFamily: "KaiseiOpti_400Regular",
//   },
//   productDescription: {
//     fontSize: 15,
//     color: "gray",
//     marginBottom: 6,
//     textAlign: "center",
//   },
//   ratingRow: {
//     flexDirection: "row",
//     marginBottom: 6,
//   },
//   priceRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   currentPrice: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: colors.dark,
//   },
//   oldPrice: {
//     fontSize: 12,
//     color: "gray",
//     textDecorationLine: "line-through",
//   },
// });

// export default OneProduct;

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

const { width } = Dimensions.get("window");

const OneProduct = ({
  productName = "ZEUS DODOBERRY",
  description = "20MG E LIQ",
  currentPrice = "£3.99",
  oldPrice = "£5.99",
  rating = 3.5,
  isNew = true,
  imageSource = require("../../../../assets/oneProduct.png"),
}) => {
  // rendering stars
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Ionicons key={i} name="star" size={20} color="#FFD700" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Ionicons key={i} name="star-half" size={20} color="#FFD700" />
        );
      } else {
        stars.push(
          <Ionicons key={i} name="star-outline" size={20} color="#FFD700" />
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
          <View style={{ width: 40, height: 25 }} />
        )}
        <View style={styles.iconsWrapper}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="heart-outline" size={16} color={colors.white} />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Ionicons name="cart-outline" size={16} color={colors.white} />
          </Pressable>
        </View>
      </View>

      {/* Product Title */}
      <Text style={styles.productTitle}>{productName}</Text>
      <Text style={styles.productDescription}>{description}</Text>

      {/* Rating */}
      {/* Rating */}
      <View style={styles.ratingRow}>{renderStars()}</View>

      {/* Prices */}
      <View style={styles.priceRow}>
        <Text style={styles.currentPrice}>{currentPrice}</Text>
        <Text style={styles.oldPrice}>{oldPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.4,
    backgroundColor: colors.fullwhite,
    borderRadius: 10,
    padding: 10,
    margin: 5,
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
    width: "80%",
    height: 100,
    marginBottom: 8,
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
    position: "absolute",
    marginTop: 5,
  },
  newTag: {
    padding: 5,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    color: colors.white,
    fontSize: 12,
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
    fontSize: 18,
    textAlign: "center",
    color: colors.dark,
    fontFamily: "KaiseiOpti_400Regular",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 15,
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
