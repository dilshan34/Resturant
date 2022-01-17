import React from "react";
import { View, Text, Image } from "react-native";

export default function PhotoList({ image }) {
  return (
    <View style={{alignItems:"center"}}> 
      {/* <Text>{image}</Text> */}
      <Image
        source={{ uri: image }}
        style={{
          width: 250,
          height: 150,
          backgroundColor: "yellow",
          margin:10
        }}
      />
    </View>
  );
}
