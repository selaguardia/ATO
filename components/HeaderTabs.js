import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup"/>
    </View>
  );
}

const HeaderButton = ({text}) => (
  <View>
    <TouchableOpacity style={{ 
      backgroundColor: "black",
      paddingVertical: 7,
      paddingHorizontal: 17,
      borderRadius: 30,
      }}>
      <Text style={{ color: "white"}}>{text}</Text>
    </TouchableOpacity>
  </View>
);

