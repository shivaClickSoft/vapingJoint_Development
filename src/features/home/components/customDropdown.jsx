// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   StyleSheet,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function CustomDropdown({
//   options = [],
//   placeholder = "Select",
//   onChange,
// }) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const select = (opt) => {
//     setSelected(opt);
//     onChange && onChange(opt.value);
//     setOpen(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.selector}
//         onPress={() => setOpen(true)}
//         activeOpacity={0.8}
//       >
//         <Text style={[styles.selectedText, !selected && styles.placeholder]}>
//           {selected?.label ?? placeholder}
//         </Text>
//         <Ionicons
//           name={open ? "chevron-up" : "chevron-down"}
//           size={20}
//           color="#333"
//         />
//       </TouchableOpacity>

//       <Modal visible={open} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={() => setOpen(false)}>
//           <View style={styles.backdrop} />
//         </TouchableWithoutFeedback>

//         <View style={styles.modalWrap}>
//           <View style={styles.modalCard}>
//             <FlatList
//               data={options}
//               keyExtractor={(item) => item.value.toString()}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.option}
//                   onPress={() => select(item)}
//                 >
//                   <Text style={styles.optionText}>{item.label}</Text>
//                 </TouchableOpacity>
//               )}
//               ItemSeparatorComponent={() => <View style={styles.sep} />}
//             />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { width: "30%" },
//   selector: {
//     height: 48,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     paddingHorizontal: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//   },
//   selectedText: { fontSize: 16, color: "#222" },
//   placeholder: { color: "#888" },

//   backdrop: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.3)",
//   },
//   modalWrap: {
//     position: "absolute",
//     left: 12,
//     right: 12,
//     top: "30%",
//     // You can adjust top to position the dropdown
//   },
//   modalCard: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     maxHeight: 300,
//     overflow: "hidden",
//     borderWidth: 1,
//     borderColor: "#eee",
//   },
//   option: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   optionText: { fontSize: 16 },
//   sep: { height: 1, backgroundColor: "#f2f2f2" },
// });
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import colors from "../../../constants/colors";

const { height, width } = Dimensions.get("window");

const DropdownExample = ({
  data = [
    { label: "10 mg", value: "10" },
    { label: "20 mg", value: "20" },
    { label: "30 mg", value: "30" },
    { label: "40 mg", value: "40" },
  ],
  widthh = height * 0.15,
  placeholder = "select",
}) => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, { width: widthh }]}
        containerStyle={styles.dropdownContainer}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={(item) => {
          setValue(item.value);
          console.log("selected:", item);
        }}
        selectedTextStyle={styles.selectedText}
        placeholderStyle={styles.placeholderText}
        itemTextStyle={styles.itemText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: { padding: 16 },
  label: {
    marginBottom: 8,
    fontSize: height * 0.02,
    color: "#333",
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
  dropdown: {
    minHeight: height * 0.04,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    minWidth: height * 0.1,
    // maxWidth: width * 0.5,
    // width: "auto",
    // width:width*0.3,
    // width: widthh,
    numberOfLines: 1,
    ellipsizeMode: "tail",
  },
  dropdownContainer: {
    borderRadius: 8,
    borderColor: "#ccc",
  },
  selectedText: {
    fontSize: height * 0.015, // yaha font size kam kar sakta hai
    color: "#222",
  },

  placeholderText: {
    fontSize: height * 0.015,
    color: "#888",
  },

  itemText: {
    fontSize: height * 0.015, // dropdown list ke andar ka text size
    color: "#333",
  },
});

export default DropdownExample;
