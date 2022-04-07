import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}> 
      <View style={{
        marginTop: 10,
        padding:15,
        backgroundColor:"white",
      }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/430156b5-606b-406e-8f7b-4a49c2877d75/original.jpg",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Spicy Chicken Sandwich
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontColor: "gray",
        }}
      >
        30-45min
      </Text>
    </View>
    <View style={{
      backgroundColor:"lightgray",
      height: 30,
      width: 30,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 50,
    }}>
      <Text>9.4</Text>
    </View>
  </View>
);
