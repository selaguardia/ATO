import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Eddie's Tacos",
    image: "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/113/839/original/La-Taqueria-Tacos-San-Francisco-6.jpg?1485391801",
    categories: ["Mexican", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.9,
  },
  {
    name: "Pho King",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/19/2017/08/17/GettyImages-545286388-2000.jpg",
    categories: ["Chinese", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image:
      "https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.4,
  },
];

export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}> 
      {localRestaurants.map((restaurant, index) => (
        <View key={index} style={{
          marginTop: 10,
          padding:15,
          backgroundColor:"white",
        }}>
          <RestaurantImage image={restaurant.image} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({image}) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({name, rating}) => (
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
        {name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: "gray",
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
      <Text>{rating}</Text>
    </View>
  </View>
);
